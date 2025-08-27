import { useState, useEffect, useRef, useCallback } from "react";

export const useAutoScroll = () => {
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const autoScrollRef = useRef<number | null>(null);
  const isScrollingRef = useRef(false);

  const stopAutoScroll = useCallback(() => {
    if (isAutoScrolling) {
      setIsAutoScrolling(false);
      isScrollingRef.current = false;
      document.documentElement.classList.remove("auto-scrolling");
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
        autoScrollRef.current = null;
      }
    }
  }, [isAutoScrolling]);

  const startAutoScroll = useCallback(() => {
    if (isAutoScrolling) {
      // Stop auto-scrolling
      stopAutoScroll();
      return;
    }

    // Start auto-scrolling immediately
    setIsAutoScrolling(true);
    isScrollingRef.current = true;
    document.documentElement.classList.add("auto-scrolling");

    const scrollToBottom = () => {
      if (!isScrollingRef.current) return;

      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const maxScroll = scrollHeight - clientHeight;
      const currentScroll = window.scrollY;

      if (currentScroll < maxScroll) {
        // Faster smooth scroll with larger increment
        window.scrollTo({
          top: currentScroll + 3,
          behavior: "smooth",
        });

        // Faster updates for smoother animation
        autoScrollRef.current = requestAnimationFrame(scrollToBottom);
      } else {
        // Reached bottom, stop
        stopAutoScroll();
      }
    };

    // Start scrolling immediately
    scrollToBottom();
  }, [isAutoScrolling, stopAutoScroll]);

  // Add global click handler to stop auto-scroll
  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      // Don't stop if clicking on the decorative element itself
      const target = event.target as HTMLElement;
      if (target.closest(".decorativeElement")) {
        return;
      }

      if (isAutoScrolling) {
        stopAutoScroll();
      }
    };

    if (isAutoScrolling) {
      document.addEventListener("click", handleGlobalClick);
    }

    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, [isAutoScrolling, stopAutoScroll]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
      document.documentElement.classList.remove("auto-scrolling");
      isScrollingRef.current = false;
    };
  }, []);

  return {
    isAutoScrolling,
    startAutoScroll,
  };
};
