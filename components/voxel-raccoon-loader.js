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
    boxShadow="lg"
    ref={ref}
    className="voxel-raccoon"
    m="auto"
    mt={["-180px", "-170px", "-120px"]}
    mb={["-40px", "-20px", "-40px"]}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
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
