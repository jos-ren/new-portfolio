import React from "react";
import styled from "styled-components";

const Container = styled.button`
  border: 0;
  border-radius: 4px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-bg);
  transition: background-color 0.2s ease-in;
  cursor: pointer;
  color: var(--headings);
  focus {
    border: 2px solid var(--headings);
  }
  hover,
  active {
    background-color: var(--secondary-bg-hover);
    outline: none;
  }
  img {
    width: 18px;
    height: 18px;
  }
`;

const IconButton = ({ img_src }) => {
  return (
    <Container>
      <img src={img_src} />
    </Container>
  );
};

export default IconButton;
