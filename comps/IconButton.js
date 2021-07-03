import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.button`
  border: 0;
  border-radius: 4px;
  height: 45px;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  transition: background-color 0.2s ease-in;
  cursor: pointer;
  color: var(--headings);
  focus {
    border: 2px solid var(--headings);
  }
  hover,
  active {
      border:1px solid red;
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
    <Link href={href}>
      <Container>
        <img src={img_src} />
      </Container>
    </Link>
  );
};

export default IconButton;
