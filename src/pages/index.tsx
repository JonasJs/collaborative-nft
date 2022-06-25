import React, { useEffect, useState } from 'react';
import { SketchPicker } from "react-color";



// Components
import Layout from '../components/Layout';
import { Grid } from '../components/Grid';
// import { Color } from '../components/Color';

// Styles
import styles from '../styles/pages/Home.module.scss'

function Home() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [pixels, setPixels] = useState<any>([]);

  const [colorSelected, setColorSelected] = useState<any>();


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

  const handleColorChange = (color: any) => setColorSelected(color);
 
  return (
    <Layout title="Home | Collaborative NFT">
      <div className={styles.container}>
        <h1>Collaborative NFT</h1>

        <Grid
          pixels={pixels}
          onMouseDown={handleMouseDown}
          onMouseOver={handleMouseOver}
        />
        <div className={styles.colorPalette}>
            <SketchPicker
              color={colorSelected}
              onChange={handleColorChange}
              onSwatchHover={(color, e) => {
                console.log("color", color);
              }}
            />
          
        </div>
        
        <h1>Color: {colorSelected?.hex}</h1>
        <h1>Position: {currentPosition}</h1>
      </div>
    </Layout>
  )
}

export default Home
