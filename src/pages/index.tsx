import React, { useEffect, useState } from 'react';
import { ChromePicker } from "react-color";

// Contexts
import { useApp } from '../context/AppContext';

// Components
import Layout from '../components/Layout';
import { Grid } from '../components/Grid';
// import { Color } from '../components/Color';

// Styles
import styles from '../styles/pages/Home.module.scss'

function Home() {
  // States
  const [currentPosition, setCurrentPosition] = useState(0);
  const [pixels, setPixels] = useState<any>([]);

  // Context
  const {
    selectedColor,
    setSelectedColor,
    isAuthenticated,
    handleLoginWalletConnect,
    handleLoginMetamask,
    user
  } = useApp() as any;

  function handleMouseDown(position: number, event: any) {
    const deepClonePixel = [...pixels];
    const newPixels = [...deepClonePixel, {
      id: String(position),
      position: position,
      wallet: "111",
      color: selectedColor?.hex,
    }]
    setPixels(newPixels)
  }

  function handleMouseOver(position: number, event: any) {
    setCurrentPosition(position);
  }

  const handleColorChange = (color: any) => setSelectedColor(color);
  

  useEffect(() => {
    console.log(user)
  }, []);

  return (
    <Layout title="Home | Collaborative NFT">
      <div className={styles.container}>
        <h1>Collaborative NFT</h1>
        
        {isAuthenticated ? (
          <>
            <div className={styles.gridContainer}>
              <Grid
                pixels={pixels}
                onMouseDown={handleMouseDown}
                onMouseOver={handleMouseOver}
              />
              <div className={styles.colorPalette}>
                <ChromePicker
                  color={selectedColor}
                  onChange={handleColorChange}
                  
                />
              </div>
            </div>
            
            <h1>Color: {selectedColor?.hex}</h1>
            <h1>Position: {currentPosition}</h1>
          </>
        ): (
          <div>
        
            <button onClick={handleLoginMetamask}>
              Sign in using Metamask
            </button>
            <br /><br />
            <button onClick={handleLoginWalletConnect}>
              Sign in using Wallet Connect
            </button>
          </div>
        )}


        
      </div>
    </Layout>
  )
}

export default Home
