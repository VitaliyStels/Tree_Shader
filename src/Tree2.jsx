import { forwardRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { Color, Vector3 } from 'three';
import { GhibliShader } from './GhibliShader';

export const Tree2 = forwardRef((props, ref) => {
	const { nodes } = useGLTF("/tree2.glb");

	const uniforms = useMemo(() => {
		return {
			colorMap: {
				value: [
					new Color('#4f7062').convertLinearToSRGB(),
					new Color('#fff94e').convertLinearToSRGB(),
					new Color('#234549').convertLinearToSRGB(),
					new Color('#1e363f').convertLinearToSRGB(),
				],
			},
			brightnessThresholds: {
				value: [0.6, 0.45, 0.001],
			},
			lightPosition: {
				value: new Vector3(15, 15, 15),
			},


		}
	},
		[]);

	return (
		<group {...props} ref={ref} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Foliage.geometry}
				position={[0.33, -0.05, -0.68]}
			>

				<shaderMaterial
					attach="material"
					{...GhibliShader}
					uniforms={uniforms}
				/>
			</mesh>
		</group>
	);
});

useGLTF.preload("/tree2.glb");
