import react from 'react';
import styles from '../styles/Home.module.css'
import { Canvas, useFrame } from '@react-three/fiber'
import Box from '../components/LeftBox';
import LeftBox from '../components/LeftBox';
import RightBox from '../components/RightBox';

export default function Home() {
  return (
    <div className={styles.root}>
      <Canvas>
        <ambientLight />
        <pointLight position={[50, 10, 10]} />
        <LeftBox position={[-2.2, 2, 0]} />
        <LeftBox position={[-1.2, 2, 0]} />
        <LeftBox position={[-.2, 2, 0]} />
        <RightBox position={[.8, 2, 0]} />
        <RightBox position={[1.8, 2, 0]} />
        <RightBox position={[2.8, 2, 0]} />
      </Canvas>
    </div>
  )
}
