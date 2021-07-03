import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Button from "../comps/Button.js";
import IconButton from "../comps/IconButton.js";

const Container = styled.div`
  // border: 1px solid red;
  width: 375px;
  margin-right: 20px;
  margin-bottom: 20px;
  height: 240px;
  padding: 24px;
  background: var(--secondary-bg);
  border-radius: 4px;
  transition: 0.25s;
  position: relative;
  :hover {
    background: var(--secondary-bg-hover);
    cursor: pointer;
  }
  button {
    position: absolute;
    bottom: 20px;
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background: var(--bg);
  border-radius: 50%;
  margin-right: 15px;
  img {
    width: 28px;
    height: 28px;
    // border:1px solid red;
  }
`;

const Card = ({ title, description, href, img_src }) => {
  return (
    <Link href={href}>
      <Container>
        <Top>
          <Circle>
            <img src={img_src} />
          </Circle>
          <h1>{title}</h1>
        </Top>
        <p>{description}</p>
        <Button text="See Project" />
        <IconButton img_src=""/>
        <IconButton img_src=""/>
      </Container>
    </Link>
  );
};

export default Card;
