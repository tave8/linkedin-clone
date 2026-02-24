import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import { useState, useEffect } from "react";

function MyNavbar() {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width < 768;

  useEffect(() => {
    const updateSize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return <>{isMobile ? <MobileNavbar /> : <DesktopNavbar />}</>;
}

export default MyNavbar;
