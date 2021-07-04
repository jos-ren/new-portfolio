import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
class _Document extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }
  render() {
    return (
      <Html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <script src="./colorTheme.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default _Document;
