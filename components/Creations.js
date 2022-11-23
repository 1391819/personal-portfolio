import { SimpleGrid, Box, Badge } from '@chakra-ui/react';
import CreationGridItem from './CreationGridItem.js';

// thumbnails
import financialResearcherThumbnail from '../public/images/creations/financial-researcher/financial_dashboard_showcase.png';
import faceRecognitionThumbnail from '../public/images/creations/face-recognition/face_recognition_showcase.png';
import kdramaDashThumbnail from '../public/images/creations/kdrama-dash/kdrama-showcase.png';
import maSeekThumbnail from '../public/images/creations/MA-seek/ma_seek_showcase.png';
import interactiveLowPolyEnvironmentThumbnail from '../public/images/creations/interactive-low-poly-environment/interactive_low_poly_environment_showcase.png';
import generalProjectThumbnail from '../public/images/creations/generalProjectThumbnail.png';

const Creations = () => {
	return (
		<SimpleGrid columns={[1, null, 2, null, null]} gap={6} pt={4}>
			<Box>
				<CreationGridItem
					title="KDrama Dash"
					thumbnail={kdramaDashThumbnail}
					link="https://github.com/1391819/kdrama-dash"
				>
					<Box pb={1}>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							React
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							Flask
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							Sklearn
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							Docker
						</Badge>
					</Box>
				</CreationGridItem>
			</Box>
			<Box>
				<CreationGridItem
					title="Financial Researcher"
					thumbnail={financialResearcherThumbnail}
					link="https://github.com/1391819/financial-researcher"
				>
					<Box pb={1}>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							Hugging Face
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							Streamlit
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							Prophet
						</Badge>
					</Box>
				</CreationGridItem>
			</Box>
			<Box>
				<CreationGridItem
					title="ML Notebooks"
					thumbnail={generalProjectThumbnail}
					link="https://github.com/1391819/notebooks-ml"
				>
					<Box pb={1}>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							Python
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							Machine Learning
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
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							Tensorflow
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							RL
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							POMDP
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							DRQN
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
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							Opencv
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							Raspberry Pi
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
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
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							JavaScript
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							ThreeJS
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							GLSL/glTF
						</Badge>
					</Box>
				</CreationGridItem>
			</Box>
		</SimpleGrid>
	);
};

export default Creations;
