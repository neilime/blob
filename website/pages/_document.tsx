import {
  DocumentHeadTags,
  type DocumentHeadTagsProps,
  documentGetInitialProps,
} from "@mui/material-nextjs/v16-pagesRouter";
import {
  type DocumentContext,
  type DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import theme from "../lib/theme";

export default function MyDocument(
  props: DocumentInitialProps & DocumentHeadTagsProps,
) {
  return (
    <Html lang="fr">
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
MyDocument.getInitialProps = (ctx: DocumentContext) =>
  documentGetInitialProps(ctx);
