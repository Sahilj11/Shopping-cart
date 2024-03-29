import styled from "styled-components";
import { ButtonCart } from "../Product";
export const AddToCart = styled(ButtonCart)`
  width: 70%;
  height: 35px;
  font-weight: bold;
  grid-area: ${({ gridlocation }) => gridlocation};
  border-radius: 4px;
  background-color: #e76f51;
  border: 1px solid #e76f51;
  color: white;

  &:hover {
    background-color: white;
    color: #ae2012;
    cursor: pointer;
  }
`;
