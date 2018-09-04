import Document_, { Head, Main, NextScript } from "next/document";
import htmlescape from "htmlescape";
import "antd/dist/antd.css";

const { API_URL } = process.env;
const env = { API_URL };

console.log("Env,", env);

export default class Document extends Document_ {
  static async getInitialProps(ctx) {
    const props = await Document_.getInitialProps(ctx);
    return props;
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <script
            dangerouslySetInnerHTML={{ __html: "__ENV__ = " + htmlescape(env) }}
          />
          <NextScript />
        </body>
      </html>
    );
  }
}
