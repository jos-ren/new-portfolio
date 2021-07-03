import "../styles/globals.css";
import useColorTheme from "use-color-theme";
import Link from "next/link";

export const MyApp = ({ Component, pageProps }) => {
  const colorTheme = useColorTheme("dark-theme", {
    classNames: ["light-theme", "dark-theme"],
  });
  //change theme icon depending on theme
  let icon = "";
  let logo = "";
  if (colorTheme.value === "light-theme") {
    icon = "icons/moon.png";
    logo = "logos/josren.svg";
  } else if (colorTheme.value === "dark-theme") {
    icon = "icons/sun.svg";
    logo = "logos/josren_w.svg";
  }
  // console.log(icon, "icon");

  return (
    <div>
      <header>
        <nav>
          <div className="nav-l">
            <Link href="/">
              <button className="logo">
                <img className="logo_img" src={logo} />
              </button>
            </Link>
          </div>
          <div className="nav-r">
            <Link href="/">
              <div className="link">
                <div>Home</div>
              </div>
            </Link>
            <Link href="/about">
              <div className="link">
                <div>About</div>
              </div>
            </Link>
            <Link href="/resume">
              <div className="link">
                <div>Resume</div>
              </div>
            </Link>
            <button className="toggle" onClick={colorTheme.toggle}>
              <img className="toggle_img" src={icon} />
            </button>
          </div>
        </nav>
      </header>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
