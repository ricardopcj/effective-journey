import type { AppProps } from "next/app";
import { SessionProvider as NextAuthProvider } from "next-auth/react";

import { Header } from "../components/Header";
import "../styles/globals.scss";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <NextAuthProvider session={session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}
