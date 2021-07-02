import React from "react";
import styled from "styled-components";

const Container = styled.img`
  width: calc(25% - 20px);
  object-fit: contain;
  margin:10px;
  border-radius:10px;
`;

const PhoneSS = ({ img_url }) => {
  return <Container src={img_url} />;
};

export default PhoneSS;
