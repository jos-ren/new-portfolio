import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 20vw;
  height: calc(100% - 20px);
  border-radius: 10px;
  margin: 10px;
  position: relative;
  background: rgba( 255, 255, 255, 0.10 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 9.5px );
  -webkit-backdrop-filter: blur( 9.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  img {
    height: calc(80% - 20px);
    width: calc(100% - 20px);
    object-fit: cover;
    border-radius:10px;
    margin:10px;
  }
  div {
    position: absolute;
    color:white;
    margin:10px;
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
