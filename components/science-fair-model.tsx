/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/objects/science-fair.glb 
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";
import { Color, DoubleSide, MeshPhysicalMaterial } from "three";

const containerMat = new MeshPhysicalMaterial({
  color: new Color().setHSL(0 / 360, 1.0, 1),
  roughness: 0.2,
  side: DoubleSide,
});

const cap01Mat = new MeshPhysicalMaterial({
  color: new Color().setHSL(166 / 360, 1, 0.2),
  roughness: 0.2,
  side: DoubleSide,
});

const label01Mat = new MeshPhysicalMaterial({
  color: new Color().setHSL(166 / 360, 1, 0.2),
  roughness: 0.2,
  side: DoubleSide,
});

const cap02Mat = new MeshPhysicalMaterial({
  color: new Color().setHSL(328 / 360, 0.7, 0.4),
  roughness: 0.2,
  side: DoubleSide,
});

const label02Mat = new MeshPhysicalMaterial({
  color: new Color().setHSL(328 / 360, 0.7, 0.4),
  roughness: 0.2,
  side: DoubleSide,
});

const paperMat = new MeshPhysicalMaterial({
  color: new Color().setHSL(30 / 360, 1, 0.8),
  roughness: 1,
  side: DoubleSide,
});

const paper01Mat = new MeshPhysicalMaterial({
  color: new Color().setHSL(30 / 360, 1, 0.8),
  roughness: 1,
  side: DoubleSide,
});

const paper02Mat = new MeshPhysicalMaterial({
  color: new Color().setHSL(30 / 360, 1, 0.8),
  roughness: 1,
  side: DoubleSide,
});

const glassMat = new MeshPhysicalMaterial({
  color: new Color().setHSL(220 / 360, 1.0, 0.8),
  roughness: 0.1,
  transparent: true,
  transmission: 1.0, // enables true glass-like refraction
  metalness: 0,
  ior: 1.5,
  thickness: 0.2,
  specularIntensity: 1,
});

const liquidMat = new MeshPhysicalMaterial({
  color: new Color().setHSL(230 / 360, 0.7, 0.5),
  roughness: 0.1,
  metalness: 0,
  ior: 1.333,
});

const bubble01Mat = new MeshPhysicalMaterial({
  color: new Color().setHSL(220 / 360, 1.0, 0.5),
  roughness: 0.1,
  emissive: new Color().setHSL(220 / 360, 1.0, 0.5),
  emissiveIntensity: 2,
});

const bubble02Mat = new MeshPhysicalMaterial({
  color: new Color().setHSL(150 / 360, 1.0, 0.5),
  roughness: 0.1,
  emissive: new Color().setHSL(150 / 360, 1.0, 0.5),
  emissiveIntensity: 2,
});

const bubble03Mat = new MeshPhysicalMaterial({
  color: new Color().setHSL(235 / 360, 1.0, 0.5),
  roughness: 0.1,
  emissive: new Color().setHSL(235 / 360, 1.0, 0.5),
  emissiveIntensity: 2,
});

export function ScienceFairModel(props: ThreeElements["group"]) {
  const { nodes } = useGLTF("/objects/science-fair.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.01}>
        <group position={[40, 0, 0]} rotation={[0, 0, -Math.PI]}>
          <mesh
            geometry={(nodes.polySurface6001 as any).geometry}
            material={cap02Mat}
          />
          <mesh
            geometry={(nodes.Mesh030 as any).geometry}
            material={containerMat}
          />
          <mesh
            geometry={(nodes.Mesh030_1 as any).geometry}
            material={label02Mat}
          />
        </group>
        <mesh
          geometry={(nodes.pCylinder5 as any).geometry}
          material={glassMat}
        />
        <mesh
          geometry={(nodes.pCylinder6 as any).geometry}
          material={glassMat}
        />
        <mesh
          geometry={(nodes.polySurface10 as any).geometry}
          material={paperMat}
        />
        <mesh
          geometry={(nodes.polySurface11 as any).geometry}
          material={paper02Mat}
        />
        <mesh
          geometry={(nodes.polySurface3 as any).geometry}
          material={glassMat}
        />
        <mesh
          geometry={(nodes.polySurface4 as any).geometry}
          material={liquidMat}
        />
        <mesh
          geometry={(nodes.polySurface9 as any).geometry}
          material={paper01Mat}
        />
        <mesh
          geometry={(nodes.pSphere1 as any).geometry}
          material={bubble03Mat}
        />
        <mesh
          geometry={(nodes.pSphere10 as any).geometry}
          material={bubble02Mat}
        />
        <mesh
          geometry={(nodes.pSphere11 as any).geometry}
          material={bubble01Mat}
        />
        <mesh
          geometry={(nodes.pSphere12 as any).geometry}
          material={bubble02Mat}
        />
        <mesh
          geometry={(nodes.pSphere13 as any).geometry}
          material={bubble03Mat}
        />
        <mesh
          geometry={(nodes.pSphere14 as any).geometry}
          material={bubble01Mat}
        />
        <mesh
          geometry={(nodes.pSphere15 as any).geometry}
          material={bubble02Mat}
        />
        <mesh
          geometry={(nodes.pSphere16 as any).geometry}
          material={bubble01Mat}
        />
        <mesh
          geometry={(nodes.pSphere17 as any).geometry}
          material={bubble01Mat}
        />
        <mesh
          geometry={(nodes.pSphere18 as any).geometry}
          material={bubble02Mat}
        />
        <mesh
          geometry={(nodes.pSphere19 as any).geometry}
          material={bubble03Mat}
        />
        <mesh
          geometry={(nodes.pSphere2 as any).geometry}
          material={bubble01Mat}
        />
        <mesh
          geometry={(nodes.pSphere20 as any).geometry}
          material={bubble03Mat}
        />
        <mesh
          geometry={(nodes.pSphere21 as any).geometry}
          material={bubble02Mat}
        />
        <mesh
          geometry={(nodes.pSphere3 as any).geometry}
          material={bubble02Mat}
        />
        <mesh
          geometry={(nodes.pSphere4 as any).geometry}
          material={bubble01Mat}
        />
        <mesh
          geometry={(nodes.pSphere5 as any).geometry}
          material={bubble03Mat}
        />
        <mesh
          geometry={(nodes.pSphere6 as any).geometry}
          material={bubble01Mat}
        />
        <mesh
          geometry={(nodes.pSphere7 as any).geometry}
          material={bubble02Mat}
        />
        <mesh
          geometry={(nodes.pSphere8 as any).geometry}
          material={bubble01Mat}
        />
        <mesh
          geometry={(nodes.pSphere9 as any).geometry}
          material={bubble03Mat}
        />
        <mesh
          geometry={(nodes.polySurface6 as any).geometry}
          material={cap01Mat}
        />
        <mesh
          geometry={(nodes.Mesh028 as any).geometry}
          material={containerMat}
        />
        <mesh
          geometry={(nodes.Mesh028_1 as any).geometry}
          material={label01Mat}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/science-fair.glb");
