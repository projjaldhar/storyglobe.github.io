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
  if (lng < -180) lng += 360;
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

// Tooltip rendered outside the rotating mesh so it never flickers on the back-face.
// useFrame tracks the country's world position each frame.
function CountryTooltip({
  country,
  meshRef,
}: {
  country: Country;
  meshRef: React.RefObject<THREE.Mesh>;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const { camera } = useThree();
  const localPos = useMemo(
    () => latLngToVector3(country.lat, country.lng, 2.3),
    [country]
  );

  useFrame(() => {
    if (!meshRef.current || !groupRef.current) return;
    const worldPos = localPos.clone().applyMatrix4(meshRef.current.matrixWorld);
    groupRef.current.position.copy(worldPos);

    // Hide when the country is on the back hemisphere (facing away from camera)
    const toCamera = camera.position.clone().normalize();
    const toCountry = worldPos.clone().normalize();
    groupRef.current.visible = toCamera.dot(toCountry) > 0.15;
  });

  return (
    <group ref={groupRef}>
      <Html center distanceFactor={8}>
        <div
          style={{
            pointerEvents: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
            }}
          >
            {country.emoji} {country.name}
          </div>
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "7px solid rgba(255,255,255,0.95)",
            }}
          />
        </div>
      </Html>
    </group>
  );
}

interface EarthGlobeProps {
  countries: Country[];
  meshRef: React.RefObject<THREE.Mesh>;
  onHover: (country: Country | null) => void;
  onCountryClick: (countryId: string) => void;
}

function EarthGlobe({ countries, meshRef, onHover, onCountryClick }: EarthGlobeProps) {
  const texture = useLoader(THREE.TextureLoader, "/images/earth-texture.jpg");
  const hoveredRef = useRef<Country | null>(null);
  const isDragging = useRef(false);

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
      onPointerDown={() => { isDragging.current = false; }}
      onPointerMove={(e) => {
        // Suppress hover updates while the user is dragging/spinning
        if (e.buttons !== 0) { isDragging.current = true; return; }
        e.stopPropagation();
        if (!meshRef.current) return;
        const localPoint = meshRef.current.worldToLocal(e.point.clone());
        const { lat, lng } = vector3ToLatLng(localPoint);
        const country = nearestCountry(lat, lng, countries);
        hoveredRef.current = country;
        onHover(country);
        document.body.style.cursor = country ? "pointer" : "default";
      }}
      onPointerLeave={() => {
        hoveredRef.current = null;
        onHover(null);
        document.body.style.cursor = "default";
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (!isDragging.current && hoveredRef.current) {
          onCountryClick(hoveredRef.current.id);
        }
        isDragging.current = false;
      }}
    >
      <sphereGeometry args={[2, 128, 128]} />
      <meshPhongMaterial map={texture} shininess={15} specular={new THREE.Color(0x111122)} />
    </mesh>
  );
}

function Atmosphere() {
  return (
    <mesh>
      <sphereGeometry args={[2.12, 64, 64]} />
      <meshBasicMaterial
        color="#93c5fd"
        transparent
        opacity={0.12}
        side={THREE.BackSide}
        depthWrite={false}
      />
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
  const meshRef = useRef<THREE.Mesh>(null);
  const [hoveredCountry, setHoveredCountry] = useState<Country | null>(null);

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
        <EarthGlobe
          countries={countries}
          meshRef={meshRef}
          onHover={setHoveredCountry}
          onCountryClick={onCountryClick}
        />
        {hoveredCountry && (
          <CountryTooltip country={hoveredCountry} meshRef={meshRef} />
        )}

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
