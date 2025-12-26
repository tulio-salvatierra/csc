import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay to ensure page has rendered
    const timer = setTimeout(() => {
      // Try to use Lenis if available
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      } else {
        // Fallback to native scroll
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

