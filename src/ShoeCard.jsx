import React, { Suspense, useRef, useState, useLayoutEffect } from "react";
import { Canvas } from "@react-three/fiber";
import useControls from "r3f-native-orbitcontrols";
import { Model } from "./Components/Model";

const ShoeCard = () => {
  const [OrbitControls, events] = useControls();

  return (
    <Canvas>
      <OrbitControls enablePan={false} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default ShoeCard;
