import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null);
  const count = 3000;
  
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
       p[i * 3 + 0] = (Math.random() - 0.5) * 20; // x
       p[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
       p[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
    }
    return p;
  }, [count]);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 30;
      ref.current.rotation.y -= delta / 40;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#5eead4"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const ShootingStar = () => {
  const ref = useRef<THREE.Mesh>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const spawnStar = () => {
      setActive(true);
      if (ref.current) {
        const startX = 10 + Math.random() * 10;
        const startY = 10 + Math.random() * 10;
        ref.current.position.set(startX, startY, -5);
      }
      setTimeout(() => setActive(false), 1500); 
    };
    
    setTimeout(spawnStar, 2000); 
    const interval = setInterval(spawnStar, 15000);
    return () => clearInterval(interval);
  }, []);

  useFrame((_state, delta) => {
    if (active && ref.current) {
      ref.current.position.x -= delta * 30;
      ref.current.position.y -= delta * 30;
    }
  });

  return (
    <mesh ref={ref} visible={active} rotation={[0, 0, Math.PI / 4]}>
      <planeGeometry args={[0.02, 4]} />
      <meshBasicMaterial color="#5eead4" transparent opacity={0.6} blending={THREE.AdditiveBlending} />
    </mesh>
  );
};

const BackgroundParticles = () => {
  return (
    <div className="particles-bg">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleField />
        <ShootingStar />
      </Canvas>
    </div>
  );
};

export default BackgroundParticles;
