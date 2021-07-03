import Head from "next/head";
import styled from "styled-components";
import PhoneSS from "../../comps/PhoneSS";

const Main = styled.div`
  background: var(--black);
  color: white;
  display: flex;
  justify-content: center;
`;

const Center = styled.div`
max-width: 960px;
  // border: 1px solid red;
`;

const screenshots = [
  {
    img_url: "../screenshots/pantro/4.png",
  },
  {
    img_url: "../screenshots/pantro/3.png",
  },
  {
    img_url: "../screenshots/pantro/1.png",
  },
  {
    img_url: "../screenshots/pantro/2.png",
  },
  {
    img_url: "../screenshots/pantro/6.png",
  },
  {
    img_url: "../screenshots/pantro/5.png",
  },
];

export default function Pantro() {
  return (
    <Main>
      <Center>
        <Head>
          <title>Pantro</title>
          <meta name="description" content="Generated by create next app" />
          <link href="" />
        </Head>
        {screenshots.map((o) => {
            return (
              <PhoneSS 
                img_url={o.img_url}
              />
            );
          })}
      </Center>
    </Main>
  );
}
