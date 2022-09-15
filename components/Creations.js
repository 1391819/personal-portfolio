import { SimpleGrid, Box, Badge } from "@chakra-ui/react";
import CreationGridItem from "./CreationGridItem.js";

// thumbnails
import faceRecognitionThumbnail from "../public/images/creations/face-recognition/face_recognition_showcase.png";
import japaneseLanguageRenshuuThumbnail from "../public/images/creations/japanese-language-renshuu/japanese_language_renshuu_showcase.png";
import interactiveLowPolyEnvironmentThumbnail from "../public/images/creations/interactive-low-poly-environment/interactive_low_poly_environment_showcase.png";
import maSeekThumbnail from "../public/images/creations/MA-seek/ma_seek_showcase.png"
import uniSocialMediaThumbnail from "../public/images/creations/social-media-app/uni_social_media_showcase.png"
import generalProjectThumbnail from "../public/images/creations/generalProjectThumbnail.png";

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
              ML
            </Badge>
            <Badge
              className="stack-badge"
              fontSize={["xs", null, null, null, null, null]}
              colorScheme="red"
            >
              Tensorflow
            </Badge>
            <Badge
              className="stack-badge"
              fontSize={["xs", null, null, null, null, null]}
              colorScheme="orange"
            >
              DRQN
            </Badge>
          </Box>
        </CreationGridItem>
      </Box>
      <Box>
        <CreationGridItem
          title="University Social Media"
          thumbnail={uniSocialMediaThumbnail}
          link="https://github.com/1391819/social_media_design"
        >
          <Box pb={1}>
            <Badge
              className="stack-badge"
              fontSize={["xs", null, null, null, null, null]}
              colorScheme="blue"
            >
              HCI
            </Badge>
            <Badge
              className="stack-badge"
              fontSize={["xs", null, null, null, null, null]}
              colorScheme="purple"
            >
              UX/UI
            </Badge>
          </Box>
        </CreationGridItem>
      </Box>
    </SimpleGrid>
  );
};

export default Creations;
