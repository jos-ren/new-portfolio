import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 15vw;
  height: calc(100% - 20px);
  border-radius: 10px;
  margin: 10px;
  position: relative;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius:10px;
  }
  div {
    position: absolute;
    color:white;
  }
  & > :nth-child(1) {
    bottom: 30px;
  }
  & > :nth-child(2) {
    bottom: 10px;
  }
`;

const Card = ({ title, description, img_url }) => {
  return (
    <Container>
      <div>{title}</div>
      <div>{description}</div>
      <img src={img_url} />
    </Container>
  );
};

export default Card;
