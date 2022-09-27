import React, { useState, useEffect } from "react";

const useScrollPosition = () => {
  const [scrollPos, setScrollPos] = useState(0);

  const onScroll = () => {
    setScrollPos(window.pageYOffset);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return scrollPos;
};

export default useScrollPosition;
