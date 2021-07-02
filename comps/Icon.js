import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-width: 66px;
  height: 66px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--darkgray);
  border-radius: 4px;
  transition: 0.25s;
  position: relative;
  :hover {
    // background: var(--black);
    cursor: pointer;
  }
  .tooltip {
    position: absolute;
    bottom: 75px;
    max-width: 250px;
    min-width: 150px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 1;
    background: var(--grey);
    border-radius: 4px;
    padding: 5px;
  }
  .tooltip_arrow {
    position: absolute;
    bottom: -9px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid var(--grey);
  }
  img {
    width: 60%;
    height: 60%;
  }
`;

const Icon = ({ img_url, tooltip }) => {
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
      <div className="tooltip" style={style}>
        {tooltip}
        <div className="tooltip_arrow"></div>
      </div>
      <img src={img_url} />
    </Container>
  );
};

export default Icon;
