import { Head } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Component {...pageProps} />;
    </>
  );
}
