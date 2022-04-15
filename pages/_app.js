import "../styles/globals.css";
import useColorTheme from "use-color-theme";
import Link from "next/link";
import Image from "next/image";
import React from "react";

if (typeof window !== 'undefined' && localStorage.colorTheme !== '"light-theme"') {
  localStorage.setItem("colorTheme", '"dark-theme"');
  // console.log(localStorage.colorTheme)
} else if (typeof window !== 'undefined' && localStorage.colorTheme !== '"dark-theme"') {
  localStorage.setItem("colorTheme", '"light-theme"');
  // console.log(localStorage.colorTheme)
}

export const MyApp = ({ Component, pageProps }) => {
  const colorTheme = useColorTheme("light-theme", {
    classNames: ["light-theme", "dark-theme"],
  });
  //change theme icon depending on theme
  let icon = "";
  let logo = "";
  if (colorTheme.value === "light-theme") {
    icon = "/icons/moon.png";
    logo = "/icons/josren.svg";
  } else if (colorTheme.value === "dark-theme") {
    icon = "/icons/sun.svg";
    logo = "/icons/josren_w.svg";
  }

  return (
    <div>
      <header>
        <nav>
          <div className="nav-l">
            <Link href="/">
              <button className="logo">
                <Image width={40} height={40} className="logo_img" src={logo} />
              </button>
            </Link>
          </div>
          <div className="nav-r">
            <Link href="/">
              <div className="link">
                <div>Home</div>
              </div>
            </Link>
            {/* <Link href="/about">
              <div className="link">
                <div>About</div>
              </div>
            </Link> */}
            <Link href="/resume">
              <div className="link">
                <div>Resume</div>
              </div>
            </Link>
            <button className="toggle" onClick={colorTheme.toggle} style={{ marginRight: "20px" }}>
              <Image width={20} height={20} className="toggle_img" src={icon} />
            </button>
            <button className="toggle" onClick={colorTheme.toggle}>
              <Image width={20} height={20} className="toggle_img" src={icon} />
            </button>
          </div>
        </nav>
      </header>
      <Component {...pageProps} />
      <footer className="footer">
        <nav>
          <div className="nav-r">
            <Link href="/">
              <div className="link">
                <div>Home</div>
              </div>
            </Link>
            <Link href="/resume">
              <div className="link">
                <div>Resume</div>
              </div>
            </Link>

            {/* add socials here */}

            <Link href="/">
              <button className="toggle" onClick={colorTheme.toggle}>
                <Image width={20} height={20} className="toggle_img" src={icon} />
              </button>
            </Link>
            <Link href="/">
              <button className="toggle" onClick={colorTheme.toggle}>
                <Image width={20} height={20} className="toggle_img" src={icon} />
              </button>
            </Link>
            <Link href="/">
              <button className="toggle" onClick={colorTheme.toggle}>
                <Image width={20} height={20} className="toggle_img" src={icon} />
              </button>
            </Link>
            <Link href="/">
              <button className="toggle" onClick={colorTheme.toggle}>
                <Image width={20} height={20} className="toggle_img" src={icon} />
              </button>
            </Link>
          </div>
        </nav>
      </footer>
      <br />
      <br />
    </div>
  );
};

export default MyApp;
