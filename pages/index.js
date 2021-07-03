import Head from "next/head";
import styled from "styled-components";
import Card from "../comps/Card";
import Icon from "../comps/Icon";
import useColorTheme from "use-color-theme";

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
    img_src: "icons/AWS.svg",
    tooltip: "AWS (DynamoDB, SES, SMS, S3)",
  },
  {
    id: 2,
    img_src: "icons/React.svg",
    tooltip: "React",
  },
  {
    id: 3,
    img_src: "icons/Javascript.svg",
    tooltip: "Javascript",
  },
  {
    id: 4,
    img_src: "icons/PHP.svg",
    tooltip: "PHP",
  },
  {
    id: 5,
    img_src: "icons/MySql.svg",
    tooltip: "MySql",
  },
  {
    id: 6,
    img_src: "icons/PostgreSQL.svg",
    tooltip: "PostgreSQL",
  },
  {
    id: 7,
    img_src: "icons/NextJS.svg",
    tooltip: "NextJS",
  },
  {
    id: 8,
    img_src: "icons/NodeJS.svg",
    tooltip: "NodeJS",
  },
  {
    id: 9,
    img_src: "icons/HTML.svg",
    tooltip: "HTML",
  },
  {
    id: 10,
    img_src: "icons/CSS.svg",
    tooltip: "CSS: Cascaded Style Sheets",
  },
  {
    id: 11,
    img_src: "icons/Adobe.svg",
    tooltip: "Adobe Creative Suite",
  },
  {
    id: 12,
    img_src: "icons/Asana.svg",
    tooltip: "Asana",
  },
  {
    id: 13,
    img_src: "icons/Figma.svg",
    tooltip: "Figma",
  },
  {
    id: 14,
    img_src: "icons/Firebase.svg",
    tooltip: "Firebase",
  },
  {
    id: 15,
    img_src: "icons/Material.svg",
    tooltip: "Material Design",
  },
  {
    id: 16,
    img_src: "icons/Postman.svg",
    tooltip: "Postman",
  },
  {
    id: 17,
    img_src: "icons/Python.svg",
    tooltip: "Python",
  },
  {
    id: 18,
    img_src: "icons/Sass.svg",
    tooltip: "Sass: Syntactically Awesome Style Sheets",
  },
  {
    id: 19,
    img_src: "icons/Wordpress.svg",
    tooltip: "Wordpress",
  },
];

const cards = [
  {
    id: 1,
    title: "CRM",
    description: "A CRM with ",
    img_src: "/logos/cog.svg",
    href: "/projects/crm",
    github_link: "https://www.w3schools.com/cssref/sel_nth-child.asp",
    link: "/",
  },
  {
    id: 2,
    title: "Pantro",
    description: "A Pantry app for your phone",
    img_src: "/logos/apple.svg",
    href: "/projects/pantro",
    github_link: "/",
    link: "/",
  },
  {
    id: 3,
    title: "Petsave",
    description: "",
    img_src: "/logos/bone.svg",
    href: "/projects/petsave",
    github_link: "/",
    link: "/",
  },
  {
    id: 4,
    title: "Poman",
    description: "",
    img_src: "/logos/spoon.svg",
    href: "/projects/poman",
    github_link: "/",
    link: "/",
  },
  {
    id: 5,
    title: "Get'em",
    description: "",
    img_src: "/logos/truck.svg",
    href: "/projects/getem",
    github_link: "/",
    link: "/",
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
  border: 1px solid red;
`;

const Top = styled.div`
  // border: 1px solid red;
  height: 60vh;
`;

const Projects = styled.div`
  // border: 1px solid blue;
  height: 30vh;
  display: inline-flex;
`;

const Apps = styled.div`
  // border: 1px solid green;
  height: 10vh;
  display: flex;
`;

export default function Home() {
  //add all adobe stuff as icons
  //animations when clicking arrows
  //if github/links are empty display:none;
  //write descriptions for cards
  //desktop screenshots
  //gradient buttons

  const colorTheme = useColorTheme("dark-theme", {
    classNames: ["light-theme", "dark-theme"],
  });

  let github_src = "";
  let link_src = "";
  if (colorTheme.value === "light-theme") {
    github_src = "icons/github.svg";
    link_src = "icons/link.svg";
  } else if (colorTheme.value === "dark-theme") {
    github_src = "icons/github_w.svg";
    link_src = "icons/link_w.svg";
  }

  return (
    <Main>
      <Center>
        <Head>
          <title>Josh Renema</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/logos/josren.svg" />
        </Head>
        <Top></Top>
        <h1>Projects</h1>
        <Projects>
          {cards.map((o) => {
            return (
              <Card
                title={o.title}
                img_src={o.img_src}
                description={o.description}
                href={o.href}
                github_link={o.github_link}
                link={o.link}
                github_src={github_src}
                link_src={link_src}
                key={o.id}
              />
            );
          })}
        </Projects>
        <h1>Skills</h1>
        <Apps>
          {icons.map((o) => {
            return <Icon tooltip={o.tooltip} img_src={o.img_src} key={o.id} />;
          })}
        </Apps>
      </Center>
    </Main>
  );
}
