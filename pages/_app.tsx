import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';
import { TssCacheProvider } from "tss-react";
import { createEmotionSsrAdvancedApproach } from "tss-react/next/pagesDir";
const cache = createCache({ key: 'css', prepend: true });

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


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <ParallaxProvider >
        <Component {...pageProps} />
      </ParallaxProvider>
    </CacheProvider>

  )
}
export default MyApp
