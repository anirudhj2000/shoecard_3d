import React, { Suspense, useRef, useState,useLayoutEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useFrame, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { TextureLoader } from "expo-three";

const Shoe = (props) => {
  const [base, normal, rough] = useLoader(TextureLoader, [
    require("../assets/Airmax/textures/BaseColor.jpg"),
    require("../assets/Airmax/textures/Normal.jpg"),
    require("../assets/Airmax/textures/Roughness.png"),
  ]);

  const material = useLoader(MTLLoader, require("../assets/Airmax/shoe.mtl"));

  const obj = useLoader(
    OBJLoader,
    require("../assets/Airmax/shoe.obj"),
    (loader) => {
      material.preload();
      loader.setMaterials(material);
    }
  );

  useLayoutEffect(() => {
    obj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = base;
        child.material.normalMap = normal;
        child.material.roughnessMap = rough;
      }
    });
  }, [obj]);


  return (
    <mesh rotation={[0.7, 0, 0]}>
      <primitive object={obj} scale={10} />
    </mesh>
  );
};

const Home = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Suspense fallback={null}>
        <Shoe  />
      </Suspense>
    </Canvas>
  );
};

export default Home;
