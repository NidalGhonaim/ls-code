"use client";

import { useEffect, useRef, useState } from "react";
import { extend, useApplication, useTick } from "@pixi/react";
import {
  Texture,
  TextureSource,
  Container,
  Graphics,
  AnimatedSprite,
  Assets,
} from "pixi.js";

extend({
  Container,
  Graphics,
  AnimatedSprite,
});

type CurtainAnimationProps = {
  onLoad: (frame: number) => void;
};

const CurtainAnimation = ({ onLoad }: CurtainAnimationProps) => {
  const [frames, setFrames] = useState<Texture<TextureSource>[]>([]);
  const spriteRef = useRef<AnimatedSprite>(null);

  useEffect(() => {
    const loadTextures = async () => {
      const framePaths = [];

      for (let i = 1; i <= 108; i++) {
        const frame = String(i).padStart(4, "0");
        framePaths.push(`/curtain/curtain 01.0002_1.${frame}.png`);
      }

      // Load the animation sprite sheet
      await Assets.load(framePaths);

      // Create an array of textures from the sprite sheet
      const textures = framePaths.map((path) => Texture.from(path));

      setFrames(textures);
    };

    loadTextures();
  }, []);

  const { app } = useApplication();
  useTick(() => {});

  useEffect(() => {
    if (spriteRef.current && frames.length > 0) {
      spriteRef.current.play();
    }
  }, [frames]);

  return (
    <pixiContainer>
      {frames.length > 0 && (
        <pixiAnimatedSprite
          ref={spriteRef}
          textures={frames}
          x={app.screen.width / 2}
          y={app.screen.height / 2}
          anchor={0.5}
          animationSpeed={0.5}
          onFrameChange={onLoad}
          loop={false}
        />
      )}
    </pixiContainer>
  );
};

export default CurtainAnimation;
