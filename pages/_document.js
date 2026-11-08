// _document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6B46C1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
