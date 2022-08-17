import { useState, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
  CycleRaycast,
  BakeShadows,
  useCursor,
  softShadows,
  RoundedBox,
  Text,
} from "@react-three/drei";

//const url = "https://www.youtube.com/";

export default function Button({ position, text, type, url, small = true }) {
  const i = 1;
  const { width } = useThree((state) => state.viewport);
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  useFrame((state) =>
    ref.current.scale.setScalar(
      hovered ? 1 + Math.sin(state.clock.elapsedTime * 10) / 150 : 1
    )
  );

  function click() {
    window.open(url, "_blank", "noopener,noreferrer");
  }
  // Sets document.body.style.cursor: useCursor(flag, onPointerOver = 'pointer', onPointerOut = 'auto')
  useCursor(hovered);
  return (
    <mesh
      ref={ref}
      receiveShadow
      castShadow
      onClick={(e) => (e.stopPropagation(), click())}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
    >
      {/* <boxGeometry args={[1, 1, 0.075]} />
      <meshStandardMaterial
        roughness={1}
        transparent
        opacity={0.6}
        color={clicked ? "lightblue" : hovered ? "aquamarine" : "white"}
      /> */}
      <RoundedBox
        args={small ? [0.3, 0.2, 0.09] : [0.4, 0.15, 0.09]}
        position={position}
        radius={0.01}
        smoothness={20}
        //rotation={[-Math.PI / 4, 0, i / Math.PI / 4]}
      >
        <meshPhongMaterial
          roughness={1}
          transparent
          opacity={0.6}
          color={clicked ? "lightblue" : hovered ? "#d634db" : "white"}
        />
        <Text
          position={[0, 0.01, 0.05]}
          lineHeight={0.8}
          color={hovered ? "white" : "black"}
          font="/Ki-Medium.ttf"
          fontSize={width / 150}
          material-toneMapped={false}
          anchorX="center"
          anchorY="middle"
        >
          {hovered ? type : text}
        </Text>
      </RoundedBox>
    </mesh>
  );
}
