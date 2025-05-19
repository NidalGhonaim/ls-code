"use client";

import { Application } from "@pixi/react";
import CurtainAnimation from "./curtain-animation";
import { useState } from "react";
import CurtainLoading from "./curtain-loading";

const CurtainCanvas = () => {
  const [loading, setLoading] = useState(true);

  const handleLoaded = (frame: number) => {
    console.log(frame);
    setLoading(false);
  };

  return (
    <div>
      {loading && <CurtainLoading />}
      <Application backgroundAlpha={0} resizeTo={window}>
        <CurtainAnimation onLoad={handleLoaded} />
      </Application>
    </div>
  );
};

export default CurtainCanvas;
