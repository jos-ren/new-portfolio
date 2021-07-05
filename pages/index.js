import Head from "next/head";
import styled from "styled-components";
import Card from "../comps/Card";
import Profile from "../comps/Profile";
import useColorTheme from "use-color-theme";
import Image from "next/image";
import React, { useState } from "react";

// --gutterSpace: 32px;
// --screenXs: 576px;
// --screenXsMin: 575.98px;
// --screenSm: 768px;
// --screenSmMin: 767.98px;
// --screenMd: 1024px;
// --screenMdMin: 1023.98px;
// --screenLg: 1168px;
// --screenXl: 1472px;

const icons = [
  {
    id: 1,
    img_src: "/icons/aws.svg",
    tooltip: "AWS (DynamoDB, SES, SMS, S3)",
  },
  {
    id: 2,
    img_src: "/icons/react.svg",
    tooltip: "React",
  },
  {
    id: 3,
    img_src: "/icons/javascript.svg",
    tooltip: "Javascript",
  },
  {
    id: 4,
    img_src: "/icons/php.svg",
    tooltip: "PHP",
  },
  {
    id: 5,
    img_src: "/icons/mysql.svg",
    tooltip: "MySql",
  },
  {
    id: 6,
    img_src: "/icons/postgresql.svg",
    tooltip: "PostgreSQL",
  },
  {
    id: 7,
    img_src: "/icons/nextjs.svg",
    tooltip: "NextJS",
  },
  {
    id: 8,
    img_src: "/icons/nodejs.svg",
    tooltip: "NodeJS",
  },
  {
    id: 9,
    img_src: "/icons/html.svg",
    tooltip: "HTML",
  },
  {
    id: 10,
    img_src: "/icons/css.svg",
    tooltip: "CSS",
  },
  {
    id: 11,
    img_src: "/icons/adobe.svg",
    tooltip: "Adobe Creative Suite",
  },
  {
    id: 12,
    img_src: "/icons/asana.svg",
    tooltip: "Asana",
  },
  {
    id: 13,
    img_src: "/icons/figma.svg",
    tooltip: "Figma",
  },
  {
    id: 14,
    img_src: "/icons/firebase.svg",
    tooltip: "Firebase",
  },
  {
    id: 15,
    img_src: "/icons/material.svg",
    tooltip: "Material Design",
  },
  {
    id: 16,
    img_src: "/icons/postman.svg",
    tooltip: "Postman",
  },
  {
    id: 17,
    img_src: "/icons/python.svg",
    tooltip: "Python",
  },
  {
    id: 18,
    img_src: "/icons/sass.svg",
    tooltip: "Sass: Syntactically Awesome Style Sheets",
  },
  {
    id: 19,
    img_src: "/icons/wordpress.svg",
    tooltip: "Wordpress",
  },
];

const cards = [
  {
    id: 1,
    title: "CRM",
    description: "A CRM with the options to text, email, and send updates to contacts",
    img_src: "/icons/cog.svg",
    href: "/projects/crm",
    github_link: "https://github.com/HenryBcit/BBoT",
    link: "https://crm.techiesoftomorrow.com/",
  },
  {
    id: 2,
    title: "Petsave",
    description: "A social media app for animal rehabilitation centers",
    img_src: "/icons/bone.svg",
    href: "/projects/petsave",
    github_link: "https://github.com/jos-ren/petsave-frontend",
    link: null,
  },
  {
    id: 3,
    title: "Pantro",
    description: "A pantry app which tracks food expiration dates",
    img_src: "/icons/apple.svg",
    href: "/projects/pantro",
    github_link: "https://github.com/jos-ren/bcitd3_pantro",
    link: null,
  },
  {
    id: 4,
    title: "Poman",
    description: "A foodie social network app",
    img_src: "/icons/spoon.svg",
    href: "/projects/poman",
    github_link: "/",
    link: null,
  },
  {
    id: 5,
    title: "Get'em",
    description: "An app for the delivery of everyday items",
    img_src: "/icons/truck.svg",
    href: "/projects/getem",
    github_link: "/",
    link: null,
  },
];

const Main = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;

const Center = styled.div`
  max-width: 960px;
  padding: 0 32px;
  margin: 0 auto;
  // border: 1px solid red;
`;

const Top = styled.div`
  // border: 1px solid red;
  // height: 500px;
  margin-bottom: 20px;
`;

const Projects = styled.div`
  // border: 1px solid blue;
  // height: 30vh;
  display: flex;
  margin-bottom: 20px;
  overflow-x: scroll;
`;

const Apps = styled.div`
  // border: 1px solid green;
  height: 10vh;
  display: flex;
  overflow-x: auto;
`;

const IconCont = styled.div`
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
    cursor: pointer;
  }
`;

const Tooltip = styled.div`
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
`;

const TooltipArrow = styled.div`
  position: absolute;
  bottom: -10px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid var(--secondary-bg-hover);
`;

export default function Home() {

  //add all adobe stuff as icons
  //animations when clicking arrows
  //if github/links are empty display:none;
  //write descriptions for cards
  //desktop screenshots
  //gradient buttons

  const [style, setStyle] = useState({ display: "none" });

  const colorTheme = useColorTheme("dark-theme", {
    classNames: ["light-theme", "dark-theme"],
  });

  let github_src = "";
  let link_src = "";
  if (colorTheme.value === "light-theme") {
    github_src = "/icons/github.svg";
    link_src = "/icons/link.svg";
  } else if (colorTheme.value === "dark-theme") {
    github_src = "/icons/github_w.svg";
    link_src = "/icons/link_w.svg";
  }

  return (
    <Main>
      <Center>
        <Head>
          <title>Josh Renema</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/icons/logo.png" />
        </Head>
        <Top>
          <Profile />
        </Top>
        <h1>Projects</h1>
        <Projects>
          {cards.map((o) => {
            return (
              <Card
                key={o.id}
                title={o.title}
                img_src={o.img_src}
                description={o.description}
                href={o.href}
                github_link={o.github_link}
                link={o.link}
                github_src={github_src}
                link_src={link_src}
              />
            );
          })}
        </Projects>
        <h1>Skills</h1>
        <Apps>
          {icons.map((o) => {
            return (
              // <IconCont
              //   onMouseEnter={(e) => {
              //     setStyle({ display: "flex" });
              //   }}
              //   onMouseLeave={(e) => {
              //     setStyle({ display: "none" });
              //   }}
              // >
              //   <Tooltip style={style}>
              //     <p >{o.tooltip}</p>
              //     <TooltipArrow />
              //   </Tooltip>
              // </IconCont>
                <Image key={o.id} width={40} height={40} src={o.img_src} />
            );
          })}
        </Apps>
      </Center>
    </Main>
  );
}
