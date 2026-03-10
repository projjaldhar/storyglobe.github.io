import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import type { Country } from "@/data/stories";

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function vector3ToLatLng(point: THREE.Vector3): { lat: number; lng: number } {
  const n = point.clone().normalize();
  const lat = 90 - Math.acos(Math.max(-1, Math.min(1, n.y))) * (180 / Math.PI);
  let lng = Math.atan2(n.z, -n.x) * (180 / Math.PI) - 180;
  if (lng < -180) lng += 360; // atan2 returns (-180,180]; shift eastern longitudes back into range
  return { lat, lng };
}

function nearestCountry(lat: number, lng: number, countries: Country[], threshold = 28): Country | null {
  let best: Country | null = null;
  let bestDist = threshold;
  for (const c of countries) {
    const dlat = lat - c.lat;
    const dlng = lng - c.lng;
    const d = Math.sqrt(dlat * dlat + dlng * dlng);
    if (d < bestDist) {
      bestDist = d;
      best = c;
    }
  }
  return best;
}

interface EarthGlobeProps {
  countries: Country[];
  onCountryClick: (countryId: string) => void;
}

function EarthGlobe({ countries, onCountryClick }: EarthGlobeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, "/images/earth-texture.jpg");
  const [hoveredCountry, setHoveredCountry] = useState<Country | null>(null);

  useMemo(() => {
    texture.anisotropy = 16;
    texture.colorSpace = THREE.SRGBColorSpace;
  }, [texture]);

  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.05;
  });

  return (
    <mesh
      ref={meshRef}
      onPointerMove={(e) => {
        e.stopPropagation();
        if (!meshRef.current) return;
        const localPoint = meshRef.current.worldToLocal(e.point.clone());
        const { lat, lng } = vector3ToLatLng(localPoint);
        const country = nearestCountry(lat, lng, countries);
        setHoveredCountry(country);
        document.body.style.cursor = country ? "pointer" : "default";
      }}
      onPointerLeave={() => {
        setHoveredCountry(null);
        document.body.style.cursor = "default";
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (hoveredCountry) onCountryClick(hoveredCountry.id);
      }}
    >
      <sphereGeometry args={[2, 128, 128]} />
      <meshPhongMaterial map={texture} shininess={15} specular={new THREE.Color(0x111122)} />

      {hoveredCountry && (
        <Html
          position={latLngToVector3(hoveredCountry.lat, hoveredCountry.lng, 2.25)}
          center
          distanceFactor={8}
        >
          <div style={{ pointerEvents: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
            <div
              style={{
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(10px)",
                border: "2px solid rgba(59,130,246,0.45)",
                borderRadius: "10px",
                padding: "5px 14px",
                fontSize: "13px",
                fontWeight: 700,
                color: "#1e3a5f",
                whiteSpace: "nowrap",
                boxShadow: "0 4px 20px rgba(59,130,246,0.25)",
                fontFamily: "'Fredoka', sans-serif",
                letterSpacing: "0.01em",
              }}
            >
              {hoveredCountry.emoji} {hoveredCountry.name}
            </div>
            <div style={{
              width: 0, height: 0,
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "7px solid rgba(255,255,255,0.95)",
            }} />
          </div>
        </Html>
      )}
    </mesh>
  );
}

function Atmosphere() {
  return (
    <mesh>
      <sphereGeometry args={[2.12, 64, 64]} />
      <meshBasicMaterial color="#93c5fd" transparent opacity={0.12} side={THREE.BackSide} depthWrite={false} />
    </mesh>
  );
}

function ResponsiveCamera() {
  const { size, camera } = useThree();
  useMemo(() => {
    const cam = camera as THREE.PerspectiveCamera;
    const aspect = size.width / size.height;
    cam.position.z = aspect < 0.7 ? 6.5 : aspect < 1 ? 5.8 : 5.2;
    cam.fov = aspect < 0.7 ? 50 : 45;
    cam.updateProjectionMatrix();
  }, [size.width, size.height, camera]);
  return null;
}

interface Globe3DProps {
  countries: Country[];
  onCountryClick: (countryId: string) => void;
}

export default function Globe3D({ countries, onCountryClick }: Globe3DProps) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
        className="border-muted"
      >
        <color attach="background" args={["#dbeafe"]} />
        <ResponsiveCamera />

        <ambientLight intensity={1.8} color="#ffffff" />
        <directionalLight position={[8, 4, 6]} intensity={2.0} color="#fff8f0" />
        <directionalLight position={[-5, 2, -4]} intensity={0.6} color="#c8e8ff" />

        <Atmosphere />
        <EarthGlobe countries={countries} onCountryClick={onCountryClick} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.25}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI - Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}
