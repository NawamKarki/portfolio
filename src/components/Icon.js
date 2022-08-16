import * as THREE from "three";
import { useState, useMemo } from "react";
import { useThree } from "@react-three/fiber";
import { useGLTF, Float, Icosahedron } from "@react-three/drei";

export default function Icon() {
  const { nodes } = useGLTF("/tools.gltf");
  const [geometry] = useState(() => nodes[0].geometry);

  return <mesh scale={3} geometry={geometry} />;
}
