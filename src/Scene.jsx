import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Trees } from './Trees';
import { Tree2 } from './Tree2';
import { Treet } from './Treet';

export function Scene() {
	const refTrees = useRef(null)
	const refTree = useRef(null)
	const refTree2 = useRef(null)

	useFrame(() => {
		const { current: group } = refTrees;
		if (group) {
			group.rotation.x = group.rotation.y += 0.01;
		}
		const { current: gr } = refTree;
		if (gr) {
			gr.rotation.x = gr.rotation.y -= 0.01;
		}

	});

	return (
		<>
			<ambientLight intensivity={0.1} />
			<directionalLight
				color="white"
				position={[15, 15, 15]}
				castShadow
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
			/>

			<Trees
				ref={refTrees}
				position={[0, 0, -2]}
			/>

			<Trees
				ref={refTree}
				position={[0, 0, 4]}
			/>

			<Treet
				ref={refTree2}
				position={[2, 0, 7]}
			/>


		</>
	);
};
