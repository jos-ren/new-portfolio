import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: calc(10vh - 20px);
  height: calc(10vh - 20px);
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba( 255, 255, 255, 0.10 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 9.5px );
  -webkit-backdrop-filter: blur( 9.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  img {
    width: 60%;
    height: 60%;
  }
`;

const Icon = ({ img_url, title }) => {
  return (
    <Container>
      {/* {title} */}
      <img src={img_url} />
    </Container>
  );
};

export default Icon;
