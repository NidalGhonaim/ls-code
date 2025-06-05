"use client";

import { Canvas } from "@react-three/fiber";
import { ScienceFairModel } from "./science-fair-model";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import styles from "./science-fair.module.scss";
// import { PerspectiveCamera as PerspectiveCameraType, Vector3 } from "three";

const ScienceFair = () => {
  // const camRef = useRef<PerspectiveCameraType>(null);

  // useEffect(() => {
  //   if (camRef.current) {
  //     camRef.current.lookAt(new Vector3(0, 110000, 0)); // your target point
  //   }
  // }, []);

  return (
    <div className={styles.container}>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        {/* <Grid /> */}
        <PerspectiveCamera makeDefault position={[0.25, 0.5, 2.5]} />
        <OrbitControls
          target={[0, 0.5, 0]}
          enableZoom={false}
          enablePan={false}
        />
        <ScienceFairModel />
      </Canvas>
    </div>
  );
};

export default ScienceFair;
