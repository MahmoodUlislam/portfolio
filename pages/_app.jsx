import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { Roboto } from 'next/font/google';
import { ParallaxProvider } from 'react-scroll-parallax';
import { TssCacheProvider } from "tss-react";
import { createEmotionSsrAdvancedApproach } from "tss-react/next/pagesDir";
const cache = createCache({ key: 'css', prepend: true });
// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
})
const {
  augmentDocumentWithEmotionCache: augmentDocumentWithEmotionCache_mui,
  withAppEmotionCache: withAppEmotionCache_mui
} = createEmotionSsrAdvancedApproach({ "key": "mui", "prepend": true });

export { augmentDocumentWithEmotionCache_mui };

const {
  augmentDocumentWithEmotionCache: augmentDocumentWithEmotionCache_tss,
  withAppEmotionCache: withAppEmotionCache_tss
} = createEmotionSsrAdvancedApproach({ "key": "tss" }, TssCacheProvider);

export { augmentDocumentWithEmotionCache_tss };


function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={cache}>
      <ParallaxProvider >
        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>
      </ParallaxProvider>
    </CacheProvider>

  )
}
export default MyApp
