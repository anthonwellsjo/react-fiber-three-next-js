import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useSpring, a } from '@react-spring/three';

const scrollThreshHolds = {
  first: 800,
  second: 1600,
  third: 2400,
  fourth: 3000,
}

interface props {
  defaultPosition: [number, number, number],
  color: string
}

export default function LeftBox({ defaultPosition, color }: props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [wide, setWide] = useState(false)
  const [thick, setThick] = useState(false)
  const [last, setLast] = useState(false)
  const [rotate, setRotate] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame

  useFrame(() => {
    if (window.scrollY > scrollThreshHolds.first && !wide) {
      console.log("scroll over 800");
      setWide(true);
    }
    if (window.scrollY <= scrollThreshHolds.first && wide) {
      console.log("scroll under 800");
      setWide(false);
    }
    if (window.scrollY > scrollThreshHolds.second && !thick) {
      console.log("scroll over 1600");
      setThick(true);
    }
    if (window.scrollY <= scrollThreshHolds.second && thick) {
      console.log("scroll over 1600");
      setThick(false);
    }
    if (window.scrollY > scrollThreshHolds.third && !last) {
      console.log("scroll over 2400");
      setLast(true);
      setRotate(true);
    }
    if (window.scrollY <= scrollThreshHolds.third && last) {
      console.log("scroll under 2400");
      setRotate(false);
      setLast(false);
    }
    if (rotate) return mesh.current.rotation.y += 0.02;
    if (!rotate && mesh.current.rotation.y > 0.0) return mesh.current.rotation.y -= 0.1;

  })

  const getShape = () => {
    if (!wide) return [.0025, 50, 0.0001];
    if (wide && !thick) return [.5, 1, 0.0001];
    if (thick) return [.01, .01, .05];
    if (last) return [.015, 50, .0001];
  }
  const getColor = () => {
    if (!wide) return "white";
    if (wide && !thick) return "black";
    if (thick) return color;
  }
  const getPosition = () => {
    if (!wide) return [0, 0, 0];
    if (wide && !thick) return [0, 0, 0];
    if (thick) return defaultPosition;
  }


  const animProps = useSpring({
    scale: getShape(),
    color: getColor(),
    position: getPosition(),
    config: {
      friction: 100,
      mass: 20
    }
  })
  const anim2Props = useSpring({
    scale: getShape(),
    color: getColor(),
    position: getPosition(),
    config: {
      friction: 100,
      mass: 2
    }
  })
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <a.mesh
      ref={mesh}
      scale={anim2Props.scale}
      position={anim2Props.position}
    >
      <boxGeometry args={[5, 5, 5]} />
      <a.meshStandardMaterial color={animProps.color} />
    </a.mesh>
  )
}
