import CssBaseline from '@mui/material/CssBaseline';
import lightTheme from '../../styles/theme/lightTheme';
import createEmotionCache from '../utility/createEmotionCache';

import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { CacheProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

import { ThemeProvider } from '@mui/material/styles';
import { Public_Sans } from '@next/font/google';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache: typeof clientSideEmotionCache;
};

const publicSans = Public_Sans({
  weight: ['400', '600', '700'],
  style: 'normal',
  subsets: ['latin'],
});

// Create emotion cache
const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      <style jsx global>{`
        html {
          font-family: ${publicSans.style.fontFamily};
        }
      `}</style>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}
