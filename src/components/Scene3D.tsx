"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function FloatingGrid() {
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.08;
      ref.current.rotation.y += delta * 0.12;
    }
  });

  const lines = useMemo(() => {
    const geometry = new THREE.BoxGeometry(3.5, 3.5, 3.5);
    return new THREE.EdgesGeometry(geometry);
  }, []);

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <group ref={ref}>
        <lineSegments geometry={lines}>
          <lineBasicMaterial color="#00ff88" transparent opacity={0.35} />
        </lineSegments>
        <mesh>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshBasicMaterial
            color="#00ff88"
            wireframe
            transparent
            opacity={0.15}
          />
        </mesh>
      </group>
    </Float>
  );
}

function Particles() {
  const count = 120;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#00ff88"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div className="scene-3d" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#00ff88" />
        <Stars
          radius={50}
          depth={40}
          count={2000}
          factor={3}
          saturation={0}
          fade
          speed={0.5}
        />
        <Particles />
        <FloatingGrid />
      </Canvas>
    </div>
  );
}
