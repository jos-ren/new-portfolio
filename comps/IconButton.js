import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.button`
  border: 0;
  border-radius: 4px;
  height: 45px;
  min-width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-bg);
  transition: background-color 0.2s ease-in;
  cursor: pointer;
  color: var(--headings);
  :focus {
    border: 2px solid var(--headings);
  }
  :hover,
  :active {
    background-color: var(--secondary-bg-hover);
    outline: none;
  }
  img {
    width: 18px;
    height: 18px;
  }
`;

const IconButton = ({ img_src, href }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href} >
      <Container>
        <Image width={20} height={20} src={img_src} />
      </Container>
    </a>
  );
};

export default IconButton;
