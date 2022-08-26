import { Box, ScaleFade } from "@chakra-ui/react";
import { useInViewport } from "react-in-viewport";
import React, { useRef } from "react";

const FadeIn = ({ children }) => {
  const ref = useRef(null);

  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "0px" },
    { disconnectOnLeave: false },
    {}
  );

  return (
    <ScaleFade
      style={{ transition: "0.2s linear" }}
      initialScale={0.3}
      ref={ref}
      in={inViewport}
    >
      {children}
    </ScaleFade>
  );
};

export default FadeIn;
