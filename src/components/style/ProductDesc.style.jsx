import styled from "styled-components";

export const ProductDtContainer = styled.div`
  display: grid;
  grid-template-areas: "img detail";
  justify-items: center;
  margin: 10px;
`;
export const DetailCont = styled.div`
  width: 60%;
  grid-area: detail;
  display: grid;
  grid-template-areas: "title" "desc" "price" "buyBt";
  justify-items: center;
  align-items: center;
`;
