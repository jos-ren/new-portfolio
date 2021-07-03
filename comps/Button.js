import React from "react";
import styled from "styled-components";

const Container = styled.button`
  border: 0;
  border-radius: 4px;
  height: 45px;
  width: calc(100% - 48px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 2px solid var(--tertiary);
  transition: background-color 0.2s ease-in;
  cursor: pointer;
  :hover {
    background-color: var(--tertiary);
    border: none;
    outline: none;
    p {
        color: white;
      }
  }
  p {
    color: var(--headings);
    font-weight: 500;
    font-size: 14pt;
  }
  }
`;

const Button = ({ text }) => {
  return (
    <Container>
      <p>{text}</p>
    </Container>
  );
};

export default Button;
