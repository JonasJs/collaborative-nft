
// Styles
import { Container } from "./styled";

export interface IColor {
  color: string;
}

export function Color({color}: IColor) {

  function onSelectColor() {
    console.log("red")
  }
  return (
    <Container color={color}></Container>
  )
}