import React from "react";
import styled from "styled-components";

const Container = styled.h1`
  font-size: 144pt;
  //   left: -20px;
  margin-left: ${props => props.margin ? "20px" : "0px"};
  position: relative;
  margin: 0px;
  padding: 0px;
  line-height: 220px;
  // border: 1px solid red;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const PhoneSS = ({ text, margin }) => {
  return <Container margin={true}>{text}</Container>;
};

export default PhoneSS;
