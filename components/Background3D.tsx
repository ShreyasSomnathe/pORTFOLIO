'use client'

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'
import { randomInRange } from '@/lib/utils'

function ParticleField({ count = 3000 }) {
  const points = useRef<THREE.Points>(null)
  const mousePosition = useRef({ x: 0, y: 0 })

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const radius = randomInRange(2, 18)
      const theta = randomInRange(0, Math.PI * 2)
      const phi = randomInRange(0, Math.PI * 2)
      positions[i3] = radius * Math.sin(theta) * Math.cos(phi)
      positions[i3 + 1] = radius * Math.sin(theta) * Math.sin(phi)
      positions[i3 + 2] = radius * Math.cos(theta)
    }
    return positions
  }, [count])

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

  useFrame((state) => {
    if (!points.current) return
    const time = state.clock.getElapsedTime()
    points.current.rotation.x = time * 0.03 + mousePosition.current.y * 0.002
    points.current.rotation.y = time * 0.05 + mousePosition.current.x * 0.002
    const scale = 1 + Math.sin(time * 0.3) * 0.03
    points.current.scale.set(scale, scale, scale)
  })

  return (
    <Points ref={points} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00e5ff"
        size={0.012}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function AuroraField({ count = 800 }) {
  const points = useRef<THREE.Points>(null)

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = randomInRange(-15, 15)
      positions[i3 + 1] = randomInRange(-2, 8)
      positions[i3 + 2] = randomInRange(-10, -4)
    }
    return positions
  }, [count])

  useFrame((state) => {
    if (!points.current) return
    const time = state.clock.getElapsedTime()
    points.current.rotation.y = Math.sin(time * 0.1) * 0.1
    points.current.position.y = Math.sin(time * 0.2) * 0.5
  })

  return (
    <Points ref={points} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.025}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.15}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function Lights() {
  const lightRef = useRef<THREE.PointLight>(null)

  useFrame((state) => {
    if (!lightRef.current) return
    const time = state.clock.getElapsedTime()
    lightRef.current.position.x = Math.sin(time * 0.2) * 4
    lightRef.current.position.z = Math.cos(time * 0.15) * 4
    lightRef.current.intensity = 1.2 + Math.sin(time * 0.3) * 0.3
  })

  return (
    <>
      <pointLight ref={lightRef} position={[0, 0, 0]} color="#00e5ff" intensity={1.2} distance={25} />
      <pointLight position={[-6, 4, -6]} color="#3366ff" intensity={0.6} distance={20} />
      <pointLight position={[6, -4, 6]} color="#8b5cf6" intensity={0.4} distance={20} />
      <ambientLight intensity={0.05} />
    </>
  )
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Deep dark gradient */}
      <div className="absolute inset-0 bg-gradient-luxury" />

      {/* Mesh gradient blobs */}
      <div className="absolute inset-0 bg-gradient-mesh" />

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-[0.15]" />

      {/* Three.js Canvas */}
      <Canvas
        camera={{ position: [0, 0, 10], fov: 65 }}
        className="absolute inset-0"
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
      >
        <Lights />
        <ParticleField count={2500} />
        <AuroraField count={600} />
      </Canvas>

      {/* Noise texture */}
      <div className="absolute inset-0 noise" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/70" />
    </div>
  )
}
