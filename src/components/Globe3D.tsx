import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import type { Country } from "@/data/stories";

interface GlobeMarkerProps {
  lat: number;
  lng: number;
  emoji: string;
  name: string;
  onClick: () => void;
}

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function GlobeMarker({ lat, lng, emoji, name, onClick }: GlobeMarkerProps) {
  const position = useMemo(() => latLngToVector3(lat, lng, 2.06), [lat, lng]);
  const [hovered, setHovered] = useState(false);

  return (
    <Html position={position} center distanceFactor={8}>
      <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex flex-col items-center cursor-pointer group"
        title={name}
        style={{ transform: hovered ? "scale(1.3)" : "scale(1)", transition: "transform 0.2s ease" }}>
        
        <span className="relative">
          <span
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              boxShadow: hovered ?
              "0 0 20px 10px rgba(100, 200, 255, 0.6), 0 0 50px 20px rgba(100, 200, 255, 0.2)" :
              "0 0 8px 3px rgba(100, 200, 255, 0.1)",
              transform: "scale(1.8)",
              transition: "box-shadow 0.3s ease"
            }} />
          
          <span className="text-xl md:text-2xl drop-shadow-lg relative z-10 block">{emoji}</span>
        </span>
        <span
          className="text-[9px] font-display font-semibold px-1.5 py-0.5 rounded-full whitespace-nowrap mt-0.5"
          style={{
            opacity: hovered ? 1 : 0,
            background: hovered ? "rgba(255,255,255,0.9)" : "transparent",
            color: "#111",
            transition: "opacity 0.2s ease"
          }}>
          
          {name}
        </span>
      </button>
    </Html>);

}

function EarthGlobe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, "/images/earth-texture.jpg");

  useMemo(() => {
    texture.anisotropy = 16;
    texture.colorSpace = THREE.SRGBColorSpace;
  }, [texture]);

  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.05;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 128, 128]} />
      <meshPhongMaterial map={texture} shininess={15} specular={new THREE.Color(0x111122)} />
    </mesh>);

}

function Atmosphere() {
  return (
    <mesh>
      <sphereGeometry args={[2.12, 64, 64]} />
      <meshBasicMaterial color="#4488cc" transparent opacity={0.045} side={THREE.BackSide} depthWrite={false} />
    </mesh>);

}

function Stars() {
  const positions = useMemo(() => {
    const pos = new Float32Array(1200 * 3);
    for (let i = 0; i < 1200; i++) {
      const r = 18 + Math.random() * 30;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.04} sizeAttenuation transparent opacity={0.7} />
    </points>);

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
        dpr={[1, 1.5]} className="border-muted">
        
        <color attach="background" args={["#060a14"]} />
        <ResponsiveCamera />

        <ambientLight intensity={0.3} color="#c8d8ff" />
        <directionalLight position={[8, 4, 6]} intensity={1.6} color="#fff5e0" />
        <pointLight position={[-6, -3, -6]} intensity={0.1} color="#4488ff" />

        <Stars />
        <Atmosphere />
        <EarthGlobe />
        {countries.map((country) =>
        <GlobeMarker
          key={country.id}
          lat={country.lat}
          lng={country.lng}
          emoji={country.emoji}
          name={country.name}
          onClick={() => onCountryClick(country.id)} />

        )}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.25}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI - Math.PI / 4} />
        
      </Canvas>
    </div>);

}