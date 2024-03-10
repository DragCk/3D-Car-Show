import { MeshReflectorMaterial } from "@react-three/drei";

const Ground = () => {
  return (
    <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
      <planeGeometry args={[30, 30]} />
      <MeshReflectorMaterial />
    </mesh>
  );
};

export default Ground;
