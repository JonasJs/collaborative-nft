import React, { useEffect, useRef } from 'react';

// Components
import Layout from '../components/Layout';
import { Grid } from '../components/Grid';

// Styles
import styles from '../styles/pages/Home.module.scss'

function Home() {

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className={styles.container}>

        {/* <Grid /> */}
      
      {/* 
        <canvas className={styles.canvas} ref={canvasRef}/>
        <div className={styles.artBoard}>
          <div id="canvas-container">
            <table id="pixel-canvas">
              
            </table>
          </div>
        </div> */}
      
      
      </div>
    </Layout>
  )
}

export default Home
