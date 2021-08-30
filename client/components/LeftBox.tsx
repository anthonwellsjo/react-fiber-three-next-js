import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useSpring, a } from '@react-spring/three';

export default function LeftBox(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame

  useFrame(() => {
    console.log(mesh.current.position.x)
    return (mesh.current.position.x -= window.scrollY / 200000)
  })

  const animProps = useSpring({
    scale: active ? [.5, .5, .5] : [.25, 5, .0001],
    color: hovered ? "lightpink" : "yellow",
    config: {
      friction: 40,
      mass: 2
    }
  })
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <a.mesh
      {...props}
      ref={mesh}
      scale={animProps.scale}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <a.meshStandardMaterial color={animProps.color} />
    </a.mesh>
  )
}