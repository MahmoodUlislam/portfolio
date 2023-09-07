import Document from "next/document";

import {
    augmentDocumentWithEmotionCache_mui,
    augmentDocumentWithEmotionCache_tss,
    withAppEmotionCache_mui,
    withAppEmotionCache_tss
} from "./_app";

augmentDocumentWithEmotionCache_mui(Document);
withAppEmotionCache_mui(Document);
augmentDocumentWithEmotionCache_tss(Document);
withAppEmotionCache_tss(Document);

export default Document;