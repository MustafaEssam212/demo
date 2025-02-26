import { useEffect } from "react";
import { useLocation } from "react-router-dom";


// Used to make a smooth behavior scrolling every change in the app route

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
