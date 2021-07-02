import React from "react";
import styled from "styled-components";

const Container = styled.div`
  // border: 1px solid red;
  width:375px;
  margin:10px;
  min-height: 220px;
  padding: 24px;
  background: var(--darkgray);
  border-radius: 4px;
  transition: 0.25s;
  :hover {
    background: var(--black);
    cursor:pointer;
  }
`;

const Card = ({ title, description, img_url }) => {
  return (
    <Container>
      <div>{title}</div>
      <div>{description}</div>
      {/* <img src={img_url} /> */}
    </Container>
  );
};

export default Card;
