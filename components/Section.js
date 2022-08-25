import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

const Section = ({ children, id, delay = 0 }) => (
  <StyledDiv
    id={id}
    display="flex"
    flexDirection="column"
    alignItems="flex-start"
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    fontSize={["sm", "md", "lg", "md", null, "lg"]}
  >
    {children}
  </StyledDiv>
);

export default Section;
