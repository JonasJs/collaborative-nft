

import styled from "styled-components";
import { IColor } from "./index";

export const Container = styled.div<IColor>`
  width: 50px;
  height: 50px;
  background: ${({color}) => color };
`;