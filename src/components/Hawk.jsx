import { useGLTF, useTexture, useCursor } from '@react-three/drei'
import { useState } from 'react'

const HackerRoom = ({onPartClick, ...props}) => {
  const { nodes, materials } = useGLTF('/models/hawk.glb');

  const monitortxt = useTexture('textures/desk/monitor.png');
  const screenTxt = useTexture('textures/desk/screen.png');

  const [hovered, setHovered] = useState(false)
  useCursor(hovered)

  const handleClick = (id) => (e) => {
    e.stopPropagation()
    onPartClick?.(id, e.object)     // bubble out to React app
  }
  const over = (e) => { e.stopPropagation(); setHovered(true) }
  const out  = (e) => { e.stopPropagation(); setHovered(false) }

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={nodes.TomGroup_0_mtl_vehicle_silenthawk_0.geometry}
          material={materials.mtl_vehicle_silenthawk}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_1_mtl_vehicle_silenthawk_0.geometry}
          material={materials.mtl_vehicle_silenthawk_0}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_2_mtl_vehicle_silenthawk_0.geometry}
          material={materials.mtl_vehicle_silenthawk_1}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_3_mtl_vehicle_silenthawk_0.geometry}
          material={materials.mtl_vehicle_silenthawk_2}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_4_mtl_vehicle_silenthawk_0.geometry}
          material={materials.mtl_vehicle_silenthawk_3}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_5_mtl_vehicle_silenthawk_0.geometry}
          material={materials.mtl_vehicle_silenthawk_4}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_6_mtl_vehicle_silenthawk_0.geometry}
          material={materials.mtl_vehicle_silenthawk_5}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_7_mtl_vehicle_silenthawk_0.geometry}
          material={materials.mtl_vehicle_silenthawk_6}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_8_mtl_vehicle_silenthawk_0.geometry}
          material={materials.mtl_vehicle_silenthawk_7}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_9_mtl_vehicle_silenthawk_0.geometry}
          material={materials.mtl_vehicle_silenthawk_8}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_10_mtl_vehicle_silenthawk_0.geometry}
          material={materials.mtl_vehicle_silenthawk_9}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_11_mtl_vehicle_silenthawk_0.geometry}
          material={materials.mtl_vehicle_silenthawk_10}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_12_mtl_vehicle_silenthawk_0.geometry}
          material={materials.mtl_vehicle_silenthawk_11}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_13_mtl_vehicle_silenthawk_0.geometry}
          material={materials.mtl_vehicle_silenthawk_12}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_14_mtl_vehicle_silenthawk_0.geometry}
          material={materials.mtl_vehicle_silenthawk_13}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_15_mtl_vehicle_silenthawk_0.geometry}
          material={materials.mtl_vehicle_silenthawk_14}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_16_mtl_vehicle_silenthawk_0.geometry}
          material={materials.mtl_vehicle_silenthawk_15}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_17_mtl_vehicle_silenthawk_0.geometry}
          material={materials.mtl_vehicle_silenthawk_16}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_18_mtl_vehicle_silenthawk_0.geometry}
          material={materials.mtl_vehicle_silenthawk_17}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_19_mtl_vehicle_silenthawk_0.geometry}
          material={materials.mtl_vehicle_silenthawk_18}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_20_mtl_vehicle_silenthawk_0.geometry}
          material={materials.mtl_vehicle_silenthawk_19}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_21_mtl_vehicle_silenthawk_0.geometry}
          material={materials.mtl_vehicle_silenthawk_20}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_22_mtl_vehicle_nh90_blades_0.geometry}
          material={materials.mtl_vehicle_nh90_blades}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_23_mtl_vehicle_nh90_blades_0.geometry}
          material={materials.mtl_vehicle_nh90_blades_0}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_24_mtl_vehicle_nh90_blades_alpha_0.geometry}
          material={materials.mtl_vehicle_nh90_blades_alpha}
          position={[0, 4554.04, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_25_mtl_vehicle_nh90_blades_alpha_0.geometry}
          material={materials.mtl_vehicle_nh90_blades_alpha_0}
          position={[0, 0, 2982.085]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_26_mtl_vehicle_silenthawk_alpha_0.geometry}
          material={materials.mtl_vehicle_silenthawk_alpha}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_27_mtl_vehicle_silenthawk_alpha_0.geometry}
          material={materials.mtl_vehicle_silenthawk_alpha_0}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_28_mtl_vehicle_silenthawk_alpha_0.geometry}
          material={materials.mtl_vehicle_silenthawk_alpha_1}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_29_mtl_vehicle_silenthawk_alpha_0.geometry}
          material={materials.mtl_vehicle_silenthawk_alpha_2}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_30_mtl_vehicle_silenthawk_alpha_0.geometry}
          material={materials.mtl_vehicle_silenthawk_alpha_3}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_31_mtl_vehicle_silenthawk_alpha_0.geometry}
          material={materials.mtl_vehicle_silenthawk_alpha_4}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_32_mtl_vehicle_silenthawk_alpha_0.geometry}
          material={materials.mtl_vehicle_silenthawk_alpha_5}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_33_mtl_vehicle_silenthawk_interior_0.geometry}
          material={materials.mtl_vehicle_silenthawk_interior}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_34_mtl_vehicle_silenthawk_interior_0.geometry}
          material={materials.mtl_vehicle_silenthawk_interior_0}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_35_mtl_vehicle_silenthawk_interior_0.geometry}
          material={materials.mtl_vehicle_silenthawk_interior_1}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_36_mtl_vehicle_silenthawk_interior_0.geometry}
          material={materials.mtl_vehicle_silenthawk_interior_2}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_37_mtl_vehicle_silenthawk_interior_0.geometry}
          material={materials.mtl_vehicle_silenthawk_interior_3}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_38_mtl_vehicle_silenthawk_interior_0.geometry}
          material={materials.mtl_vehicle_silenthawk_interior_4}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.TomGroup_39_mtl_vehicle_silenthawk_interior_0.geometry}
          material={materials.mtl_vehicle_silenthawk_interior_5}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/hawk.glb');

export default HackerRoom;