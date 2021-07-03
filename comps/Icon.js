import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  min-width: 66px;
  height: 66px;
  margin-right: 20px;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--secondary-bg);
  border-radius: 4px;
  transition: 0.25s;
  position: relative;
  :hover {
    // background: var(--secondary-bg-hover);
    // cursor:url(/icons/question.png), auto;
    cursor: pointer;
  }
  .tooltip {
    position: absolute;
    bottom: 75px;
    max-width: 250px;
    min-width: 150px;
    color: var(--text);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 1;
    background: var(--secondary-bg-hover);
    border-radius: 4px;
    padding: 5px;
  }
  .tooltip_arrow {
    position: absolute;
    bottom: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid var(--secondary-bg-hover);
  }
  nth-child(2) {
    width: 60%;
    height: 60%;
    -drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
`;

const Icon = ({ img_src, tooltip }) => {
  const [style, setStyle] = useState({ display: "none" });

  return (
    <Container
      onMouseEnter={(e) => {
        setStyle({ display: "flex" });
      }}
      onMouseLeave={(e) => {
        setStyle({ display: "none" });
      }}
    >
      <p className="tooltip" style={style}>
        {tooltip}
        <div className="tooltip_arrow"></div>
      </p>
      <Image width={40} height={40} src={img_src} />
    </Container>
  );
};

export default Icon;
