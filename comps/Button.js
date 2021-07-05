import React from "react";
import styled from "styled-components";

const Container = styled.button`
  border: 0;
  border-radius: 4px;
  height: 45px;
  // width: ${props => props.width ? props.width : "0px"};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 2px solid var(--tertiary);
  // border-style: solid;
  // border-width: 2px;
  // border-image: var(--gradient) 1;
  // border-radius:4px;
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

const Button = ({ text, width, onClick}) => {
  return (
    <Container width={width} onClick={onClick}>
      <p>{text}</p>
    </Container>
  );
};

export default Button;
