import { useEffect, useState } from "react";

function useWindowWidth() {
  // 2. Store width in state
  const [width, setWidth] = useState(window.innerWidth);

  // 3. useEffect to add resize listener
  useEffect(() => {
    const handleResize = () => {
      // 4. Update width on resize
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    //5. Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default useWindowWidth;
