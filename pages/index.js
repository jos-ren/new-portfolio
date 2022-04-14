import Head from "next/head";
import styled from "styled-components";
import Card from "../comps/Card";
import useColorTheme from "use-color-theme";
import Image from "next/image";
import React, { useState } from "react";
import Header from "../comps/Header";
import Carousel from "react-elastic-carousel";

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
    id: 0,
    title: "Smart City Media",
    description:
      "loremj ipsum",
    img_src: "/icons/cog.svg",
    href: "/projects/crm",
    github_link: "https://github.com/HenryBcit/BBoT",
    link: "https://crm.techiesoftomorrow.com/",
  },
  {
    id: 1,
    title: "CRM",
    description:
      "A CRM with the options to text, email, and send updates to contacts",
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
  width: calc(100% + 150px);
  display: flex;
  margin-bottom: 20px;
  overflow-x: hidden;
  position: relative;
  right: 62px;
  `;

const Apps = styled.div`
  // border: 1px solid green;
  height: 10vh;
  display: flex;
  overflow-x: hidden;
  width: calc(100% + 150px);
  position: relative;
  right: 62px;
  overflow-y: hidden;
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

// const Tooltip = styled.div`
//   position: absolute;
//   top: -75px;
//   max-width: 250px;
//   min-width: 150px;
//   color: var(--text);
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   z-index: 1;
//   background: var(--secondary-bg-hover);
//   border-radius: 4px;
//   padding: 5px;
//   display:flex;
// `;

// const TooltipArrow = styled.div`
//   position: absolute;
//   bottom: -10px;
//   width: 0;
//   height: 0;
//   border-left: 10px solid transparent;
//   border-right: 10px solid transparent;
//   border-top: 10px solid var(--secondary-bg-hover);
// `;

export default function Home() {
  //add all adobe stuff as icons
  //animations when clicking arrows
  //if github/links are empty display:none;
  //write descriptions for cards
  //desktop screenshots
  //gradient buttons
  //color anchor tags
  //margin on header comp

  const [style, setStyle] = useState({ display: "flex" });

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
          <div className="margin_header">
            <Header text="Hello" />
          </div>
          <h1>I&apos;m Josh Renema</h1>
          <p>
            I&apos;m a Full Stack Developer and Designer, currently living in
            Surrey, Canada. I enjoy creating projects that live on the internet,
            whether that be websites, applications, or anything in between. I
            always strive for my projects to provide real world value.
          </p>
          <p>
            I&apos;ve just wrapped up my diploma at the Digital Design and
            Development program at BCIT, where I&apos;ve learned how to develop and
            design responsive, cross-platform applications.
          </p>
          <p>
            I&apos;m currently working as a Full Stack Developer at{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://techiesoftomorrow.com/"
            >
              Techies of Tommorow
            </a>
            , a tech talent incubator that empowers recent BC tech graduates to
            work on real industry projects that require high-quality and
            cost-effective solutions.
          </p>
          <p>
            When I&apos;m not spending my days coding and designing, you&apos;ll probably
            find me riding my jeep out in the mountains, trying out new food
            with friends, or testing out my Nikon film camera. Feel free to
            checkout my projects below or browse to your heart&apos;s content!
          </p>
          {/* <ImgCont>
        <Image src="/profile.jpg" width={300} height={300} />
      </ImgCont> */}
        </Top>
        <h1>Projects</h1>
        <Projects>
          <Carousel itemsToShow={2.3} itemsToScroll={1}>
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
          </Carousel>
        </Projects>
        <h1>Skills</h1>
        <Apps>
          <Carousel itemsToShow={11}>
            {icons.map((o) => {
              return (
                <IconCont key={o.id}>
                  {/* <Tooltip>
                  <p>{o.tooltip}</p>
                  <TooltipArrow />
                </Tooltip> */}
                  <Image width={40} height={40} src={o.img_src} />
                </IconCont>
              );
            })}
          </Carousel>
        </Apps>
      </Center>
    </Main>
  );
}
