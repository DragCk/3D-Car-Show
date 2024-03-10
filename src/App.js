import { Canvas } from "@react-three/fiber";
import "./style.css";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

function CarShow() {
  return (
    <>
      {/* -------------可以轉動視角---target={[x,y,z]}---------*/}
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />

      {/* --------攝影機視角---------*/}
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      {/* ----等於 : let color = new Color(0, 0, 0)---------*/}
      <color args={[0, 0, 0]} attach="background" />

      {/* ----等於 : let spotLight = newSpotLight() ---------*/}
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
    </>
  );
}

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadow>
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;
