"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Environment,
  Sparkles,
  Sphere,
  Icosahedron,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "./theme-provider";

function Blob() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = Math.sin(t * 0.2) * 0.2;
    ref.current.rotation.y = t * 0.15;
    const mx = state.pointer.x;
    const my = state.pointer.y;
    ref.current.position.x = THREE.MathUtils.lerp(
      ref.current.position.x,
      mx * 0.4,
      0.05
    );
    ref.current.position.y = THREE.MathUtils.lerp(
      ref.current.position.y,
      my * 0.3,
      0.05
    );
  });
  return (
    <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1.2}>
      <Sphere ref={ref} args={[1.35, 128, 128]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#a3e635"
          distort={0.45}
          speed={2}
          roughness={0.15}
          metalness={0.1}
          emissive="#a3e635"
          emissiveIntensity={0.15}
        />
      </Sphere>
    </Float>
  );
}

function Satellites() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.getElapsedTime() * 0.1;
  });
  const items = [
    { pos: [2.4, 0.8, -1] as const, size: 0.18 },
    { pos: [-2.2, -0.4, -0.5] as const, size: 0.22 },
    { pos: [1.8, -1.2, 0.8] as const, size: 0.14 },
    { pos: [-1.9, 1.4, 1.1] as const, size: 0.12 },
    { pos: [0.2, 2.1, -1.2] as const, size: 0.16 },
  ];
  return (
    <group ref={group}>
      {items.map((it, i) => (
        <Float
          key={i}
          speed={1 + i * 0.2}
          rotationIntensity={1}
          floatIntensity={1.8}
        >
          <Icosahedron args={[it.size, 0]} position={it.pos}>
            <meshStandardMaterial
              color="#bef264"
              emissive="#a3e635"
              emissiveIntensity={0.5}
              roughness={0.3}
            />
          </Icosahedron>
        </Float>
      ))}
    </group>
  );
}

export function ThreeScene() {
  const { theme } = useTheme();
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={theme === "dark" ? 0.4 : 0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-5, -3, -2]} intensity={1.2} color="#a3e635" />
        <pointLight position={[3, -4, 2]} intensity={0.6} color="#84cc16" />
        <Blob />
        <Satellites />
        <Sparkles
          count={80}
          scale={[8, 6, 4]}
          size={2}
          speed={0.4}
          color="#a3e635"
          opacity={theme === "dark" ? 0.9 : 0.7}
        />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
