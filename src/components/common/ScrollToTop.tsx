import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets window scroll to the top on client-side route changes.
 * Skips when the URL has a hash so in-page anchor links still work.
 * Must be rendered inside <BrowserRouter>.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
