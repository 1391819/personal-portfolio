import { SimpleGrid, Box, Badge } from "@chakra-ui/react";
import CreationGridItem from "./CreationGridItem.js";

// thumbnails
import faceRecognitionThumbnail from "../public/images/creations/face-recognition/analysis.jpg";
import japaneseLanguageRenshuuThumbnail from "../public/images/creations/japanese-language-renshuu/4.4.jpg";
import generalProjectThumbnail from "../public/images/creations/generalProjectThumbnail.jpg";
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
              Raspberry PI
            </Badge>
            <Badge
              className="stack-badge"
              fontSize={["xs", null, null, null, null, null]}
              colorScheme="orange"
            >
              SQLite3
            </Badge>
          </Box>
        </CreationGridItem>
      </Box>
      <Box>
        <CreationGridItem
          title="Japanese Language Renshū"
          thumbnail={japaneseLanguageRenshuuThumbnail}
          link="https://github.com/1391819/japanese-language-renshuu"
        >
          <Box pb={1}>
            <Badge
              className="stack-badge"
              fontSize={["xs", null, null, null, null, null]}
              colorScheme="blue"
            >
              Python
            </Badge>
          </Box>
        </CreationGridItem>
      </Box>
      <Box>
        <CreationGridItem
          title="Tic Tac Toe"
          thumbnail={generalProjectThumbnail}
          link="https://github.com/1391819/tic-tac-toe"
        >
          <Box pb={1}>
            <Badge
              className="stack-badge"
              fontSize={["xs", null, null, null, null, null]}
              colorScheme="blue"
            >
              C++
            </Badge>
            <Badge
              className="stack-badge"
              fontSize={["xs", null, null, null, null, null]}
              colorScheme="purple"
            >
              Linux
            </Badge>
            <Badge
              className="stack-badge"
              fontSize={["xs", null, null, null, null, null]}
              colorScheme="red"
            >
              Minimax
            </Badge>
            <Badge
              className="stack-badge"
              fontSize={["xs", null, null, null, null, null]}
              colorScheme="orange"
            >
              TCP Sockets
            </Badge>
          </Box>
        </CreationGridItem>
      </Box>
    </SimpleGrid>
  );
};

export default Creations;
