import React from "react";
import styled from "styled-components";

const Container = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
`;

const Card = ({ text }) => {
  return <Container>{text}</Container>;
};

export default Card;
