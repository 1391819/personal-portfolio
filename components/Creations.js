import { SimpleGrid, Box, Badge } from "@chakra-ui/react";
import CreationGridItem from "./CreationGridItem.js";

// thumbnails
import faceRecognitionThumbnail from "../public/images/creations/face-recognition/analysis.jpg";
import japaneseLanguageRenshuuThumbnail from "../public/images/creations/japanese-language-renshuu/project_showcase.jpg";
import interactiveLowPolyEnvironmentThumbnail from "../public/images/creations/interactive-low-poly-environment/environment_showcase.jpg";
import maSeekThumbnail from "../public/images/creations/MA-seek/observation_space_showcase_test.png"
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
              TCP/IP
            </Badge>
          </Box>
        </CreationGridItem>
      </Box>
      <Box>
        <CreationGridItem
          title="Low Poly Environment"
          thumbnail={interactiveLowPolyEnvironmentThumbnail}
          link="https://github.com/1391819/interactive-low-poly-environment"
        >
          <Box pb={1}>
            <Badge
              className="stack-badge"
              fontSize={["xs", null, null, null, null, null]}
              colorScheme="blue"
            >
              JavaScript
            </Badge>
            <Badge
              className="stack-badge"
              fontSize={["xs", null, null, null, null, null]}
              colorScheme="purple"
            >
              Threejs
            </Badge>
            <Badge
              className="stack-badge"
              fontSize={["xs", null, null, null, null, null]}
              colorScheme="red"
            >
              GLSL
            </Badge>
            <Badge
              className="stack-badge"
              fontSize={["xs", null, null, null, null, null]}
              colorScheme="orange"
            >
              glTF
            </Badge>
          </Box>
        </CreationGridItem>
      </Box>
      <Box>
        <CreationGridItem
          title="MA Seek"
          thumbnail={maSeekThumbnail}
          link="https://github.com/1391819/MA-seek"
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
              Deep RL
            </Badge>
            <Badge
              className="stack-badge"
              fontSize={["xs", null, null, null, null, null]}
              colorScheme="red"
            >
              Tensorflow
            </Badge>
          </Box>
        </CreationGridItem>
      </Box>
    </SimpleGrid>
  );
};

export default Creations;
