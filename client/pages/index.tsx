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
        <LeftBox position={[0, 0, 0]} />
      </Canvas>
    </div>
  )
}
