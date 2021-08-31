import React, { useEffect, useRef, useState } from 'react'
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
    if (window.scrollY > 300 && !active) {
      console.log("scroll over 300");
      setActive(true);
    }
    if (window.scrollY < 301 && active) {
      console.log("scroll over 300");
      setActive(false);
    }
    // console.log(mesh.current.position.x)
    // return (mesh.current.position.x -= window.scrollY / 200000)
  })

  useEffect(() => {
    if (window.scrollY > 300) {
      console.log("scroll over 300");
      setActive(true);
    }
  }, [window.scrollY])

  const animProps = useSpring({
    scale: active ? [1, 1, 1] : [.0025, 5, 0.001],
    color: active ? "black" : "black",
    config: {
      friction: 100,
      mass: 20
    }
  })
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <a.mesh
      {...props}
      ref={mesh}
      scale={animProps.scale}
      onClick={(event) => setActive(!active)}
    >
      <boxGeometry args={[5, 15, .01]} />
      <a.meshStandardMaterial color={animProps.color} />
    </a.mesh>
  )
}
