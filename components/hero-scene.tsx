"use client";

import { useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const NODE_COUNT = 74;
const CONNECTION_DISTANCE = 1.95;

type HoverState = {
  active: boolean;
  x: number;
  y: number;
};

type HeroSceneProps = {
  hoverRef: React.RefObject<HoverState>;
};

function ParticleNetwork({ hoverRef }: HeroSceneProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const pointPositionsRef = useRef(new Float32Array(NODE_COUNT * 3));
  const linePositionsRef = useRef(new Float32Array(NODE_COUNT * NODE_COUNT * 6));
  const lineColorsRef = useRef(new Float32Array(NODE_COUNT * NODE_COUNT * 6));

  const particles = useMemo(() => {
    return Array.from({ length: NODE_COUNT }, (_, index) => ({
      position: new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(10.8),
        THREE.MathUtils.randFloatSpread(5.8),
        THREE.MathUtils.randFloatSpread(3),
      ),
      velocity: new THREE.Vector3(
        Math.sin(index * 2.1) * 0.004,
        Math.cos(index * 1.7) * 0.0032,
        Math.sin(index * 1.3) * 0.0022,
      ),
    }));
  }, []);

  useFrame((state) => {
    const hover = hoverRef.current;
    const pointPositions = pointPositionsRef.current;
    const linePositions = linePositionsRef.current;
    const lineColors = lineColorsRef.current;
    let lineIndex = 0;
    const pulse = (Math.sin(state.clock.elapsedTime * 0.8) + 1) * 0.5;
    const hoverPoint = new THREE.Vector3(hover.x * 5.8, hover.y * 2.7, 0);

    particles.forEach((particle, index) => {
      particle.position.add(particle.velocity);

      if (Math.abs(particle.position.x) > 5.6) particle.velocity.x *= -1;
      if (Math.abs(particle.position.y) > 2.8) particle.velocity.y *= -1;
      if (Math.abs(particle.position.z) > 1.5) particle.velocity.z *= -1;

      if (hover.active) {
        const distanceToHover = particle.position.distanceTo(hoverPoint);
        if (distanceToHover < 1.9) {
          const pull = (1.9 - distanceToHover) * 0.012;
          particle.position.lerp(hoverPoint, pull);
        }
      }

      pointPositions[index * 3] = particle.position.x;
      pointPositions[index * 3 + 1] = particle.position.y;
      pointPositions[index * 3 + 2] = particle.position.z;
    });

    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const a = particles[i];
        const b = particles[j];
        const distance = a.position.distanceTo(b.position);
        const midpoint = new THREE.Vector3().addVectors(a.position, b.position).multiplyScalar(0.5);
        const hoverBoost = hover.active ? Math.max(0, 1 - midpoint.distanceTo(hoverPoint) / 2.4) * 0.95 : 0;

        if (distance < CONNECTION_DISTANCE + hoverBoost * 0.4) {
          const alpha =
            (1 - distance / (CONNECTION_DISTANCE + hoverBoost * 0.28)) *
            (0.52 + pulse * 0.24 + hoverBoost * 0.46);

          linePositions[lineIndex] = a.position.x;
          linePositions[lineIndex + 1] = a.position.y;
          linePositions[lineIndex + 2] = a.position.z;
          linePositions[lineIndex + 3] = b.position.x;
          linePositions[lineIndex + 4] = b.position.y;
          linePositions[lineIndex + 5] = b.position.z;

          for (let k = 0; k < 2; k += 1) {
            const colorOffset = lineIndex + k * 3;
            lineColors[colorOffset] = 0.48 + alpha * 0.26 + hoverBoost * 0.1;
            lineColors[colorOffset + 1] = 0.9 + hoverBoost * 0.06;
            lineColors[colorOffset + 2] = 0.7 + alpha * 0.18;
          }

          lineIndex += 6;
        }
      }
    }

    if (pointsRef.current) {
      const geometry = pointsRef.current.geometry;
      geometry.setAttribute("position", new THREE.BufferAttribute(pointPositions, 3));
      geometry.attributes.position.needsUpdate = true;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.07;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.18) * 0.06;
      const material = pointsRef.current.material as THREE.PointsMaterial;
      material.size = hover.active ? 0.09 : 0.076;
    }

    if (linesRef.current) {
      const geometry = linesRef.current.geometry;
      geometry.setDrawRange(0, lineIndex / 3);
      geometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
      geometry.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));
      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.color.needsUpdate = true;
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.07;
      linesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.18) * 0.06;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <points ref={pointsRef}>
        <bufferGeometry />
        <pointsMaterial
          color="#92f6a0"
          size={0.072}
          transparent
          opacity={1}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial transparent opacity={0.52} vertexColors blending={THREE.AdditiveBlending} />
      </lineSegments>
    </group>
  );
}

export function HeroScene({ hoverRef }: HeroSceneProps) {
  return (
    <div className="hero-scene pointer-events-none absolute inset-0 opacity-100">
      <Canvas
        frameloop="always"
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 7.1], fov: 54 }}
        dpr={[1, 1.5]}
      >
        <fog attach="fog" args={["#08131f", 4.8, 9]} />
        <ambientLight intensity={0.55} />
        <pointLight position={[2, 2, 2]} intensity={0.82} color="#92f6a0" />
        <pointLight position={[-2, -1, 1]} intensity={0.48} color="#b7a7ff" />
        <ParticleNetwork hoverRef={hoverRef} />
      </Canvas>
    </div>
  );
}
