import { Head, Html, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html className="scroll-smooth">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;1,400;1,600&family=PT+Serif:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-[#0F0F0F] text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
