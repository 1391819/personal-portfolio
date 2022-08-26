import { SimpleGrid, Box, Badge } from "@chakra-ui/react";
import CreationGridItem from "./CreationGridItem.js";

// thumbnails
import faceRecognitionThumbnail from "../public/images/creations/face-recognition/pca.jpg";

const Creations = () => {
  return (
    <SimpleGrid columns={[1, null, 2, null, null]} gap={6} pt={4}>
      <Box>
        <CreationGridItem
          title="Face Recognition System"
          thumbnail={faceRecognitionThumbnail}
          link="https://github.com/1391819/face_recognition"
        >
          <Box pb={1}>
            <Badge
              className="stack-badge"
              fontSize={["xs", null, null, null, null, null]}
              colorScheme="blue"
            >
              Python
            </Badge>
            <Badge
              className="stack-badge"
              fontSize={["xs", null, null, null, null, null]}
              colorScheme="purple"
            >
              Opencv
            </Badge>
            <Badge
              className="stack-badge"
              fontSize={["xs", null, null, null, null, null]}
              colorScheme="red"
            >
              Raspberry
            </Badge>
          </Box>
        </CreationGridItem>
      </Box>
    </SimpleGrid>
  );
};

export default Creations;
