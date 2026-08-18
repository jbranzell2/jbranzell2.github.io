import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router doesn't reset scroll position on navigation the way a real
 * page load does. Without this, clicking a project card partway down the
 * home grid lands you at that same scroll offset on the project page
 * instead of at the top.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
