
// Styles
import styles from "../styles/components/Pixel.module.css";

interface IPixel {
  position: number;
  color?: string;
}

export function Pixel({
  position,
  color = "#000"
}: IPixel) {

  const pixelCustomStyle = {
    backgroundColor: color,
  }
  return (
    <div
      className={styles.pixel}
      style={pixelCustomStyle}
    ></div>
  )
}