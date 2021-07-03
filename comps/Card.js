import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  // border: 1px solid red;
  width: 375px;
  margin-right: 20px;
  margin-bottom: 20px;
  min-height: 220px;
  padding: 24px;
  background: var(--secondary-bg);
  border-radius: 4px;
  transition: 0.25s;
  :hover {
    background: var(--secondary-bg-hover);
    cursor: pointer;
  }
`;

const Card = ({ title, description, href, img_src }) => {
  return (
    <Link href={href}>
      <Container>
        <img src={img_src} />
        <h1>{title}</h1>
        <p>{description}</p>
      </Container>
    </Link>
  );
};

export default Card;
