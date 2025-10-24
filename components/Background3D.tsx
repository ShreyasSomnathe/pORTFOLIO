'use client'

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { randomInRange } from '@/lib/utils'

function ParticleField({ count = 5000 }) {
  const points = useRef<THREE.Points>(null)
  const mousePosition = useRef({ x: 0, y: 0 })

  // Generate particle positions
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      // Create a volumetric distribution
      const radius = randomInRange(2, 15)
      const theta = randomInRange(0, Math.PI * 2)
      const phi = randomInRange(0, Math.PI * 2)

      positions[i3] = radius * Math.sin(theta) * Math.cos(phi)
      positions[i3 + 1] = radius * Math.sin(theta) * Math.sin(phi)
      positions[i3 + 2] = radius * Math.cos(theta)
    }

    return positions
  }, [count])

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Animate particles
  useFrame((state) => {
    if (!points.current) return

    const time = state.clock.getElapsedTime()

    // Rotate the entire field slowly
    points.current.rotation.x = time * 0.05
    points.current.rotation.y = time * 0.075

    // React to mouse with subtle movement
    points.current.rotation.x += mousePosition.current.y * 0.001
    points.current.rotation.y += mousePosition.current.x * 0.001

    // Pulse effect
    const scale = 1 + Math.sin(time * 0.5) * 0.05
    points.current.scale.set(scale, scale, scale)
  })

  return (
    <Points
      ref={points}
      positions={particlesPosition}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#00ffff"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function VolumetricLight() {
  const lightRef = useRef<THREE.PointLight>(null)

  useFrame((state) => {
    if (!lightRef.current) return

    const time = state.clock.getElapsedTime()

    // Animate light position
    lightRef.current.position.x = Math.sin(time * 0.3) * 3
    lightRef.current.position.z = Math.cos(time * 0.2) * 3

    // Pulse intensity
    lightRef.current.intensity = 1.5 + Math.sin(time * 0.5) * 0.5
  })

  return (
    <>
      <pointLight ref={lightRef} position={[0, 0, 0]} color="#00ffff" intensity={1.5} distance={20} />
      <pointLight position={[-5, 5, -5]} color="#0066ff" intensity={1} distance={15} />
      <pointLight position={[5, -5, 5]} color="#00ff88" intensity={0.8} distance={15} />
      <ambientLight intensity={0.1} />
    </>
  )
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-luxury" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Three.js Canvas */}
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        className="absolute inset-0"
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <VolumetricLight />
        <ParticleField count={3000} />
      </Canvas>

      {/* Noise texture */}
      <div className="absolute inset-0 noise" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60" />
    </div>
  )
}
