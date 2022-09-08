import type { AppProps } from 'next/app';
import { Footer } from 'src/components/organisms/Footer';
import { Header } from 'src/components/organisms/Header';
import GlobalStyle from 'src/styles/Globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
