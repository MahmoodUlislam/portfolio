import { useState, useEffect, useRef, useCallback } from "react";

export const useAutoScroll = () => {
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const isScrollingRef = useRef(false);
  const autoScrollRef = useRef<number | null>(null);

  // Global function to stop auto-scroll from anywhere
  const globalStopAutoScroll = () => {
    setIsAutoScrolling(false);
    isScrollingRef.current = false;
    document.documentElement.classList.remove("auto-scrolling");
    if (autoScrollRef.current) {
      cancelAnimationFrame(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  // Make it available globally
  if (typeof window !== "undefined") {
    (window as any).stopAutoScrollGlobal = globalStopAutoScroll;
  }

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

    // Start auto-scrolling using medium speed
    setIsAutoScrolling(true);
    isScrollingRef.current = true;
    document.documentElement.classList.add("auto-scrolling");

    // Medium speed auto-scroll with smooth animation
    const scrollToBottom = () => {
      if (!isScrollingRef.current) {
        return;
      }

      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const maxScroll = scrollHeight - clientHeight;
      const currentScroll = window.scrollY;

      if (currentScroll < maxScroll) {
        // Medium speed scroll - balanced increments for smooth animation
        window.scrollTo({
          top: currentScroll + 100,
          behavior: "auto",
        });

        // Continue scrolling with medium speed
        autoScrollRef.current = requestAnimationFrame(scrollToBottom);
      } else {
        // Reached bottom, stop

        isScrollingRef.current = false; // Immediately stop the loop
        stopAutoScroll();
        return; // Exit the function immediately
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

      // Don't stop if clicking on the scroll to top button
      if (target.closest(".backToTopButton")) {
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
      document.documentElement.classList.remove("auto-scrolling");
      isScrollingRef.current = false;
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
    };
  }, []);

  return {
    isAutoScrolling,
    startAutoScroll,
  };
};
