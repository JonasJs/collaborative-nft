
// Styles
import styles from "../styles/components/Pixel.module.css";

export interface IPixel {
  position: number;
  color?: string | never;
  wallet?: string;
  id?: string;
  onMouseDown?: (position: number, event: any) => void;
  onMouseOver?: (position: number, event: any) => void;
}

export function Pixel({
  position,
  color = "#fff",
  onMouseDown,
  onMouseOver,
}: IPixel) {

  const pixelCustomStyle = {
    backgroundColor: color,
  }

  return (
    <div
      className={styles.pixel}
      style={pixelCustomStyle}
      onMouseDown={event => onMouseDown && onMouseDown(position, event)}
      onMouseOver={event => onMouseOver && onMouseOver(position, event)}
      onFocus={event => onMouseOver && onMouseOver(position, event)}
      onTouchStart={event => onMouseDown && onMouseDown(position, event)}
    >
      {/* <h1 style={{color: "#fff", fontSize: "10px"}}>{position}</h1> */}
    </div>
  )
}