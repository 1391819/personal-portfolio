import { SimpleGrid, Box, Link, Stack, Badge, Button } from "@chakra-ui/react";

import CreationGridItem from "./CreationGridItem.js";
import testImage from "../public/images/creations/face-recognition/pca.jpg";

const Creations = () => {
  return (
    <SimpleGrid columns={[1, 1, 2]} gap={6} pt={4}>
      <Box>
        <CreationGridItem
          title="Face Recognition System"
          thumbnail={testImage}
          link="https://github.com/1391819/face_recognition"
        >
          <Box pb={2}>
            <Badge className="stack-badge" colorScheme="blue">
              Python
            </Badge>
            <Badge className="stack-badge" colorScheme="purple">
              Opencv
            </Badge>
            <Badge className="stack-badge" colorScheme="red">
              Raspberry
            </Badge>
          </Box>
        </CreationGridItem>
      </Box>
    </SimpleGrid>
  );
};

export default Creations;
