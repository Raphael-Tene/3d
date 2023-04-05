import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import Three from "./components/three";

function App() {
  return (
    <div className=" h-screen w-screen  drop-shadow-2xl">
      <Canvas className="">
        <Suspense fallback={null}>
          <Three />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
