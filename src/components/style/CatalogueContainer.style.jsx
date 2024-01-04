import styled from "styled-components";

export const CatalogueContainer = styled.div`
  display: grid;
  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
  grid-template-areas:
    "img"
    "title"
    "price"
    "buyBt";
  justify-items: center;
  grid-template-rows: 1fr auto auto auto;
  align-items: center;
  border-radius: 3px;
  padding: 6px;
  width: 300px;
  height: auto;
`;
