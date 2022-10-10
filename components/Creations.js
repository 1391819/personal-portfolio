import {SimpleGrid, Box, Badge} from "@chakra-ui/react";
import CreationGridItem from "./CreationGridItem.js";

// thumbnails
import faceRecognitionThumbnail from "../public/images/creations/face-recognition/face_recognition_showcase.png";
import japaneseLanguageRenshuuThumbnail from "../public/images/creations/japanese-language-renshuu/japanese_language_renshuu_showcase.png";
import interactiveLowPolyEnvironmentThumbnail from "../public/images/creations/interactive-low-poly-environment/interactive_low_poly_environment_showcase.png";
import maSeekThumbnail from "../public/images/creations/MA-seek/ma_seek_showcase.png";
import uniSocialMediaThumbnail from "../public/images/creations/social-media-app/uni_social_media_showcase.png";
import financialResearcherThumbnail from "../public/images/creations/financial-researcher/financial_dashboard_showcase.png";
import generalProjectThumbnail from "../public/images/creations/generalProjectThumbnail.png";

const Creations = () => {
  return (
    <SimpleGrid columns={[1, null, 2, null, null]} gap={6} pt={4}>
      <Box>
        <CreationGridItem
          title="Financial Researcher"
          thumbnail={financialResearcherThumbnail}
          link="https://huggingface.co/spaces/r1391819/financial-researcher"
        >
          <Box pb={1}>
            <Badge
              className="stack-badge"
              fontSize={["xs", null, null, null, null, null]}
              colorScheme="blue"
            >
              Hugging Face
            </Badge>
            <Badge
              className="stack-badge"
              fontSize={["xs", null, null, null, null, null]}
              colorScheme="purple"
            >
              Streamlit
            </Badge>
            <Badge
              className="stack-badge"
              fontSize={["xs", null, null, null, null, null]}
              colorScheme="red"
            >
              Prophet
            </Badge>
          </Box>
        </CreationGridItem>
      </Box>
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
              Opencv
            </Badge>
            <Badge
              className="stack-badge"
              fontSize={["xs", null, null, null, null, null]}
              colorScheme="purple"
            >
              Raspberry Pi
            </Badge>
            <Badge
              className="stack-badge"
              fontSize={["xs", null, null, null, null, null]}
              colorScheme="red"
            >
              SQLite3
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
              Threejs
            </Badge>
            <Badge
              className="stack-badge"
              fontSize={["xs", null, null, null, null, null]}
              colorScheme="purple"
            >
              GLSL
            </Badge>
            <Badge
              className="stack-badge"
              fontSize={["xs", null, null, null, null, null]}
              colorScheme="red"
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
              Reinforcement Learning
            </Badge>
            <Badge
              className="stack-badge"
              fontSize={["xs", null, null, null, null, null]}
              colorScheme="purple"
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
    </SimpleGrid>
  );
};

export default Creations;
