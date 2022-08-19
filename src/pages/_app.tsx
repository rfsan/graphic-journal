import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Graphic Journal</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧙‍♂️</text></svg>"
        ></link>
        <meta
          name="description"
          content="Rafael's Graphic Journal. I use Text-to-Image models to create an image for my daily entries."
        />
        <meta property="og:title" content="Rafael's Graphic Journal" />
        <meta property="og:url" content="https://graphic-journal.vercel.app/" />
        <meta
          property="og:description"
          content="description of your website/webpage"
        />
        <meta
          property="og:image"
          content="https://graphic-journal.vercel.app/images/fuckoff.png"
        />
        <meta property="og:image:width" content="1024" />

        <meta property="og:image:height" content="1024" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
