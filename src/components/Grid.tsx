import { Pixel } from "./Pixel";

// Styles
import styles from "../styles/components/Grid.module.css";

export function Grid() {
  
  return (
    <div className={styles.grid}>
      {Array.from(Array(100).keys()).map((item, index) => (
        <Pixel key={index} position={index+1} />
      ))}
    </div>
  )
}