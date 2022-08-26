import { forwardRef } from "react";
import { Box, Spinner } from "@chakra-ui/react";

export const RaccoonSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

export const RaccoonContainer = forwardRef(({ children }, ref) => (
  <Box
    boxShadow="md"
    ref={ref}
    className="voxel-raccoon"
    m="auto"
    mt={["-40px", "-45px", "-50px", "10px", null, "-40px"]}
    mb={["-50px", "-50px", "-50px", "-40px", null, "-40px"]}
    w={[300, 400, 600, 450, null, 420, 600]}
    h={[300, 400, 600, 450, null, 420, 600]}
    position="relative"
  >
    {children}
  </Box>
));

RaccoonContainer.displayName = "RaccoonContainer";

const Loader = () => {
  return (
    <RaccoonContainer>
      <RaccoonSpinner />
    </RaccoonContainer>
  );
};

export default Loader;
