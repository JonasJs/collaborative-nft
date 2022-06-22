import React, { useEffect, useState } from 'react';

// Components
import Layout from '../components/Layout';
import { Grid } from '../components/Grid';

// Styles
import styles from '../styles/pages/Home.module.scss'

function Home() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [pixels, setPixels] = useState<any>([]);

  function handleMouseDown(position: number, event: any) {
    const deepClonePixel = [...pixels];
    const newPixels = [...deepClonePixel, {
      id: String(position),
      position: position,
      wallet: "111",
      color: "red"
    }]
    setPixels(newPixels)
  }

  function handleMouseOver(position: number, event: any) {
    setCurrentPosition(position);
  }
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className={styles.container}>
        <h1>Collaborative NFT</h1>
        <Grid
          pixels={pixels}
          onMouseDown={handleMouseDown}
          onMouseOver={handleMouseOver}
        />
        <h1>Position: {currentPosition}</h1>
      </div>
    </Layout>
  )
}

export default Home
