import React from "react";
import styled from "styled-components";
import Button from "../comps/Button.js";
import IconButton from "../comps/IconButton.js";
import Image from "next/image";

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
    background: var(--background);
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
  * {
    width: 28px;
    height: 28px;
    // border:1px solid red;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  width: calc(100% - 48px);
  bottom: 20px;
  button:nth-child(1) {
    margin-right: 10px;
    width: 70%;
  }
  button:nth-child(2) {
    margin-right: 10px;
  }
`;

const Card = ({
  title,
  description,
  href,
  img_src,
  github_link,
  link,
  link_src,
  github_src,
}) => {
  return (
    <Container>
      <Top>
        <Circle>
          <Image width={20} height={20} src={img_src} />
        </Circle>
        <h1>{title}</h1>
      </Top>
      <p>{description}</p>
      <Bottom>
        <Button text="See Project" href={href} />
        <IconButton href={github_link} img_src={github_src} />
        <IconButton href={link} img_src={link_src} />
      </Bottom>
    </Container>
  );
};

export default Card;
