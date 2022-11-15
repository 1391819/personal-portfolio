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
					title="Financial Researcher"
					thumbnail={financialResearcherThumbnail}
					link="https://huggingface.co/spaces/r1391819/financial-researcher"
				>
					<Box pb={1}>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="white"
						>
							Hugging Face
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="white"
						>
							Streamlit
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="white"
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
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="blue"
						>
							Opencv
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="purple"
						>
							Raspberry Pi
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="red"
						>
							SQLite3
						</Badge>
					</Box>
				</CreationGridItem>
			</Box>
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
							colorScheme="blue"
						>
							ReactJS
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="purple"
						>
							Flask
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="red"
						>
							Docker
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="yellow"
						>
							Sklearn
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
							colorScheme="blue"
						>
							Python
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="purple"
						>
							Reinforcement Learning
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="red"
						>
							DRQN
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
							colorScheme="blue"
						>
							Threejs
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="purple"
						>
							GLSL
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="red"
						>
							glTF
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
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="blue"
						>
							C++
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="purple"
						>
							TCP/IP
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="red"
						>
							Minimax
						</Badge>
					</Box>
				</CreationGridItem>
			</Box>
		</SimpleGrid>
	);
};

export default Creations;
