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

{
  /*Review sizes and margins in different view ports;
  Put heading closer within the Threejs scene;
  Move Threejs scene upwards, less margin at the top*/
}

export const RaccoonContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-raccoon"
    m="auto"
    mt={["-40px", "-45px", "-50px", "10px", null, "-120px"]}
    mb={["-50px", "-50px", "-50px", "-40px", null, "-170px"]}
    w={[300, 300, 420, 480, null, 500, 600]}
    h={[300, 300, 420, 480, null, 500, 600]}
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
