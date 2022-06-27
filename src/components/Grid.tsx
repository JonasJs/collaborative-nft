import React, { useEffect, useState } from 'react';
import * as lodash from 'lodash'


// Utils
import { PIXELS_DEFAULT } from "../utils/consts";

// Compoennts
import { Pixel, IPixel } from "./Pixel";

// Styles
import styles from "../styles/components/Grid.module.css";


interface IGrid {
  pixels: IPixel[],
  onMouseDown?: (position: number, event: any) => void;
  onMouseOver?: (position: number, event: any) => void;
}


export function Grid({pixels = [], onMouseDown, onMouseOver}: IGrid) {

  const [gridDefault,] = useState<IPixel[]>(PIXELS_DEFAULT)
  const [grid, setGrid] = useState<IPixel[]>(PIXELS_DEFAULT)

  
  useEffect(() => {

    const allPixes = lodash.unionBy(pixels, gridDefault, "position");
    const gridOrder = allPixes.sort((a: IPixel, b: IPixel) => a.position - b.position);
    
    setGrid(gridOrder);

  }, [pixels]);

  return (
    <div className={styles.grid}>
      {grid.map((item: IPixel) => (
        <Pixel
          key={item.position}
            color={item?.color || "#fff"}
            position={item.position}
            onMouseOver={onMouseOver}
            onMouseDown={onMouseDown}
          />
      ))}
    </div>
  )
}