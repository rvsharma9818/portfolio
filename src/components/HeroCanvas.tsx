"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles, Environment } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import type { Mesh, Group, PointLight } from "three";

function Halo() {
  const ringRef = useRef<Mesh>(null);
  const groupRef = useRef<Group>(null);
  const { viewport, pointer } = useThree();

  const aspect = viewport.width / viewport.height;
  const isWide = aspect > 1.1;
  const anchorX = isWide ? viewport.width * 0.28 : 0;
  const anchorY = isWide ? 0 : 0;
  const scale = isWide ? 1 : 0.7;

  useFrame((_, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.08;
    }
    if (groupRef.current) {
      const targetRotY = pointer.x * 0.35;
      const targetRotX = -pointer.y * 0.25;
      groupRef.current.rotation.y +=
        (targetRotY - groupRef.current.rotation.y) * 0.06;
      groupRef.current.rotation.x +=
        (targetRotX - groupRef.current.rotation.x) * 0.06;
    }
  });

  return (
    <group ref={groupRef} position={[anchorX, anchorY, -0.5]}>
      <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.4}>
        <mesh ref={ringRef} rotation={[Math.PI * 0.32, 0, 0]} scale={scale}>
          <torusGeometry args={[1.7, 0.035, 48, 160]} />
          <meshStandardMaterial
            color="#d6ff3d"
            emissive="#d6ff3d"
            emissiveIntensity={0.9}
            roughness={0.25}
            metalness={0.4}
            toneMapped={false}
          />
        </mesh>
      </Float>
      <Float speed={0.7} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh rotation={[Math.PI * 0.18, Math.PI * 0.12, 0]} scale={scale * 0.72}>
          <torusGeometry args={[1.7, 0.018, 32, 128]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.7}
            roughness={0.3}
            metalness={0.35}
            toneMapped={false}
          />
        </mesh>
      </Float>
    </group>
  );
}

type Shape = {
  geometry: "icosa" | "octa" | "box" | "torus";
  position: [number, number, number];
  scale: number;
  color: string;
  emissive: string;
  rotationSpeed: [number, number, number];
  floatSpeed: number;
  floatIntensity: number;
};

const SHAPES: Shape[] = [
  {
    geometry: "icosa",
    position: [-2.6, 1.4, -1.2],
    scale: 0.22,
    color: "#d6ff3d",
    emissive: "#d6ff3d",
    rotationSpeed: [0.3, 0.2, 0],
    floatSpeed: 1.2,
    floatIntensity: 1.0,
  },
  {
    geometry: "octa",
    position: [2.4, -1.6, -1.8],
    scale: 0.28,
    color: "#22d3ee",
    emissive: "#22d3ee",
    rotationSpeed: [0.15, 0.4, 0.1],
    floatSpeed: 1.4,
    floatIntensity: 1.2,
  },
  {
    geometry: "torus",
    position: [3.1, 1.9, -2.4],
    scale: 0.32,
    color: "#8b5cf6",
    emissive: "#8b5cf6",
    rotationSpeed: [0.4, 0.25, 0],
    floatSpeed: 0.9,
    floatIntensity: 0.8,
  },
  {
    geometry: "box",
    position: [-3.0, -1.1, -2.0],
    scale: 0.2,
    color: "#f472b6",
    emissive: "#f472b6",
    rotationSpeed: [0.25, 0.35, 0.15],
    floatSpeed: 1.1,
    floatIntensity: 0.9,
  },
  {
    geometry: "icosa",
    position: [1.6, 2.2, -2.8],
    scale: 0.16,
    color: "#d6ff3d",
    emissive: "#d6ff3d",
    rotationSpeed: [0.2, 0.3, 0],
    floatSpeed: 1.3,
    floatIntensity: 1.1,
  },
  {
    geometry: "octa",
    position: [-1.8, -2.1, -1.4],
    scale: 0.18,
    color: "#22d3ee",
    emissive: "#22d3ee",
    rotationSpeed: [0.35, 0.2, 0],
    floatSpeed: 1.5,
    floatIntensity: 1.0,
  },
];

function FloatingShape({ shape }: { shape: Shape }) {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * shape.rotationSpeed[0];
    ref.current.rotation.y += delta * shape.rotationSpeed[1];
    ref.current.rotation.z += delta * shape.rotationSpeed[2];
  });

  const geometry = useMemo(() => {
    switch (shape.geometry) {
      case "icosa":
        return <icosahedronGeometry args={[1, 0]} />;
      case "octa":
        return <octahedronGeometry args={[1, 0]} />;
      case "box":
        return <boxGeometry args={[1, 1, 1]} />;
      case "torus":
        return <torusGeometry args={[1, 0.32, 16, 48]} />;
    }
  }, [shape.geometry]);

  return (
    <Float
      speed={shape.floatSpeed}
      rotationIntensity={0.4}
      floatIntensity={shape.floatIntensity}
    >
      <mesh ref={ref} position={shape.position} scale={shape.scale}>
        {geometry}
        <meshStandardMaterial
          color={shape.color}
          emissive={shape.emissive}
          emissiveIntensity={0.35}
          roughness={0.35}
          metalness={0.65}
        />
      </mesh>
    </Float>
  );
}

function Shapes() {
  const groupRef = useRef<Group>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (!groupRef.current) return;
    const targetRotY = pointer.x * 0.18;
    const targetRotX = -pointer.y * 0.12;
    groupRef.current.rotation.y +=
      (targetRotY - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.x +=
      (targetRotX - groupRef.current.rotation.x) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {SHAPES.map((s, i) => (
        <FloatingShape key={i} shape={s} />
      ))}
    </group>
  );
}

function Lights() {
  const limeRef = useRef<PointLight>(null);
  const violetRef = useRef<PointLight>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (limeRef.current) {
      limeRef.current.position.x = Math.cos(t * 0.4) * 3;
      limeRef.current.position.z = Math.sin(t * 0.4) * 3;
    }
    if (violetRef.current) {
      violetRef.current.position.x = Math.cos(t * 0.4 + Math.PI) * 3;
      violetRef.current.position.z = Math.sin(t * 0.4 + Math.PI) * 3;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight ref={limeRef} color="#d6ff3d" intensity={14} distance={10} position={[3, 2, 3]} />
      <pointLight ref={violetRef} color="#8b5cf6" intensity={12} distance={10} position={[-3, -1, -2]} />
      <pointLight color="#22d3ee" intensity={6} distance={12} position={[0, 3, -4]} />
    </>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <Lights />
        <Halo />
        <Shapes />
        <Sparkles
          count={60}
          scale={[10, 6, 6]}
          size={1.4}
          speed={0.3}
          color="#d6ff3d"
          opacity={0.55}
        />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
