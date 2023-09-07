import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { Roboto } from 'next/font/google';
import { ParallaxProvider } from 'react-scroll-parallax';
import { TssCacheProvider } from "tss-react";
import { createEmotionSsrAdvancedApproach } from "tss-react/next/pagesDir";
import '../styles/globals.scss';

const cache = createCache({ key: 'scss', prepend: true });
// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
})
const {
  augmentDocumentWithEmotionCache: augmentDocumentWithEmotionCache_mui,
  withAppEmotionCache: withAppEmotionCache_mui
} = createEmotionSsrAdvancedApproach({ "key": "mui", "prepend": true });

export { augmentDocumentWithEmotionCache_mui, withAppEmotionCache_mui };

const {
  augmentDocumentWithEmotionCache: augmentDocumentWithEmotionCache_tss,
  withAppEmotionCache: withAppEmotionCache_tss
} = createEmotionSsrAdvancedApproach({ "key": "tss" }, TssCacheProvider);

export { augmentDocumentWithEmotionCache_tss, withAppEmotionCache_tss };


function MyApp({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <CacheProvider value={cache}>
        <ParallaxProvider >
          <Component {...pageProps} />
        </ParallaxProvider>
      </CacheProvider>
    </main>

  )
}
export default MyApp
