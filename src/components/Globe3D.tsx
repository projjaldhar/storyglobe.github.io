import { useRef, useMemo, useState } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
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

interface GlobeMarkerProps {
  lat: number;
  lng: number;
  emoji: string;
  name: string;
  onClick: () => void;
  occludeRef: React.RefObject<THREE.Mesh>;
  drawerOpen: boolean;
}

function GlobeMarker({ lat, lng, emoji, name, onClick, occludeRef, drawerOpen }: GlobeMarkerProps) {
  const position = useMemo(() => latLngToVector3(lat, lng, 2.08), [lat, lng]);
  const [hovered, setHovered] = useState(false);

  return (
    <Html position={position} center distanceFactor={8} occlude={[occludeRef]} zIndexRange={drawerOpen ? [0, 0] : [16777271, 0]}>
      <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3px",
          transform: hovered ? "scale(1.4)" : "scale(1)",
          transition: "transform 0.2s ease",
        }}
      >
        <span
          style={{
            fontSize: "16px",
            lineHeight: 1,
            filter: hovered
              ? "drop-shadow(0 0 6px rgba(59,130,246,0.7))"
              : "drop-shadow(0 2px 3px rgba(0,0,0,0.25))",
            transition: "filter 0.2s ease",
          }}
        >
          {emoji}
        </span>
        <span
          style={{
            background: "rgba(255,255,255,0.95)",
            color: "#1e3a5f",
            fontSize: "11px",
            fontWeight: 700,
            padding: "2px 8px",
            borderRadius: "8px",
            whiteSpace: "nowrap",
            fontFamily: "'Playfair Display', serif",
            boxShadow: "0 2px 8px rgba(59,130,246,0.2)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.2s ease",
            pointerEvents: "none",
          }}
        >
          {name}
        </span>
      </button>
    </Html>
  );
}

function EarthGlobe({ meshRef }: { meshRef: React.RefObject<THREE.Mesh> }) {
  const texture = useLoader(THREE.TextureLoader, "/images/earth-texture.jpg");

  useMemo(() => {
    texture.anisotropy = 16;
    texture.colorSpace = THREE.SRGBColorSpace;
  }, [texture]);

  return (
    <mesh ref={meshRef}>
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
    // Portrait mobile: pull way back and raise FOV so globe fits above the drawer
    if (aspect < 0.6) {
      cam.position.set(0, 0.4, 7.8);
      cam.fov = 58;
    } else if (aspect < 0.75) {
      cam.position.set(0, 0.2, 7.0);
      cam.fov = 52;
    } else if (aspect < 1) {
      cam.position.set(0, 0, 5.8);
      cam.fov = 47;
    } else {
      cam.position.set(0, 0, 5.2);
      cam.fov = 45;
    }
    cam.updateProjectionMatrix();
  }, [size.width, size.height, camera]);
  return null;
}

interface Globe3DProps {
  countries: Country[];
  onCountryClick: (countryId: string) => void;
  drawerOpen: boolean;
}

export default function Globe3D({ countries, onCountryClick, drawerOpen }: Globe3DProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0.4, 7.8], fov: 58 }}
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
        <EarthGlobe meshRef={meshRef} />

        {countries.map((country) => (
          <GlobeMarker
            key={country.id}
            lat={country.lat}
            lng={country.lng}
            emoji={country.emoji}
            name={country.name}
            onClick={() => onCountryClick(country.id)}
            occludeRef={meshRef}
            drawerOpen={drawerOpen}
          />
        ))}

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI - Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}
