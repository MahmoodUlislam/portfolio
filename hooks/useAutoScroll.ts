import { useState, useEffect, useRef, useCallback } from "react";

export const useAutoScroll = () => {
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoScroll = useCallback(() => {
    if (isAutoScrolling) {
      // Stop auto-scrolling
      setIsAutoScrolling(false);
      if (autoScrollRef.current) {
        clearTimeout(autoScrollRef.current);
        autoScrollRef.current = null;
      }
      return;
    }

    // Start auto-scrolling immediately
    setIsAutoScrolling(true);

    const scrollToBottom = () => {
      if (!isAutoScrolling) return;

      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const maxScroll = scrollHeight - clientHeight;

      if (window.scrollY < maxScroll) {
        // Scroll down by 100px every 500ms
        window.scrollBy(0, 100);
        autoScrollRef.current = setTimeout(scrollToBottom, 500);
      } else {
        // Reached bottom, stop
        setIsAutoScrolling(false);
        if (autoScrollRef.current) {
          clearTimeout(autoScrollRef.current);
          autoScrollRef.current = null;
        }
      }
    };

    // Start scrolling immediately
    scrollToBottom();
  }, [isAutoScrolling]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (autoScrollRef.current) {
        clearTimeout(autoScrollRef.current);
      }
    };
  }, []);

  return {
    isAutoScrolling,
    startAutoScroll,
  };
};
