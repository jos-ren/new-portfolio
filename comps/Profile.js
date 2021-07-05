import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  border-radius: 4px;
  height: 100%;
  width: 100%;
  & > :nth-child(2) {
    font-size: 42pt;
  }
  // p {
  //   margin: 20px;
  // }
`;

// const ImgCont = styled.div`
//   padding: 20px;
//   // border: 1px solid red;
//   width: auto;
//   height: auto;
//   //   img {
//   //     border-radius: 4px;
//   //   }
// `;

const Header = styled.h1`
  font-size: 144pt;
  left: -20px;
  position: relative;
  margin: 0px;
  padding: 0px;
  line-height: 220px;
  // border: 1px solid red;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const PhoneSS = ({}) => {
  return (
    <Container>
      <Header>Hello</Header>
      <h1> I'm Josh Renema</h1>
      <p>
        I’m a Full Stack Developer as well as a Designer, currently living in
        Surrey, Canada. I enjoy creating projects that live on the internet,
        whether that be websites, applications, or anything in between. I always
        strive for my projects to provide real world value.
      </p>
      <p>
        I’ve just wrapped up my diploma at the Digital Design and Development
        program at BCIT, where I’ve learned how to develop and design
        responsive, cross-platform applications.
      </p>
      <p>
        I’m currently working as a Full Stack Developer at{" "}
        <a target="_blank" href="https://techiesoftomorrow.com/">
          Techies of Tommorow
        </a>
        , a tech talent incubator that empowers recent BC tech graduates to work
        on real industry projects that require high-quality and cost-effective
        solutions.
      </p>
      <p>
        When I’m not spending my days coding and designing, you’ll probably find
        me riding my jeep out in the mountains, trying out new food with
        friends, or testing out my Nikon film camera. Feel free to checkout my
        projects below or browse to your heart's content!
      </p>

      {/* <ImgCont>
        <Image src="/profile.jpg" width={300} height={300} />
      </ImgCont> */}
    </Container>
  );
};

export default PhoneSS;
