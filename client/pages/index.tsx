import react from 'react';
import styles from '../styles/Home.module.css'
import { Canvas, useFrame } from '@react-three/fiber'
import Box from '../components/LeftBox';
import LeftBox from '../components/LeftBox';
import RightBox from '../components/RightBox';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Alegreya+SC&display=swap" rel="stylesheet" />
      </Head>
      <>
        <div className={styles.root}>
          <Canvas>
            <ambientLight />
            <pointLight position={[50, 10, 10]} />
            <LeftBox color="lightpink" defaultPosition={[-0.2, -2.2, -0.2]} />
            <>
              <LeftBox color="red" defaultPosition={[-0.25, -0.8, 0]} />
              <LeftBox color="green" defaultPosition={[0, -1.5, 0.1]} />
              <LeftBox color="blue" defaultPosition={[0.2, -3, -0.1]} />
              <LeftBox color="orange" defaultPosition={[0.3, -1, 0.3]} />
              <LeftBox color="salmon" defaultPosition={[0.2, -0.5, 0.5]} />
            </>

          </Canvas>
        </div>
        <div style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0, display: "flex", justifyContent: "center" }}>
          <h1 style={{ fontFamily: "Alegreya", textTransform: "uppercase", marginTop: "800px", fontSize: "40px", textShadow: "2px 2px 15px lightgrey" }}>This is it!</h1>
        </div>
      </>
    </>
  )
}
