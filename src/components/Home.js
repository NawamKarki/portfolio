import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useCursor,
  MeshReflectorMaterial,
  Image,
  Text,
  Environment,
  Float,
  CameraShake,
  useGLTF,
  Html,
  OrbitControls,
} from "@react-three/drei";
import { useRoute, useLocation } from "wouter";
import getUuid from "uuid-by-string";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import Intro from "./Intro";

const GOLDENRATIO = 1.61803398875;

export default function Home({ images }) {
  return (
    <div className="canvas">
      <Canvas
        gl={{ alpha: false }}
        dpr={[1, 1.5]}
        camera={{ fov: 70, position: [0, 2, 15] }}
      >
        <EffectComposer>
          <Noise opacity={0.2} />
        </EffectComposer>
        <color attach="background" args={["#191920"]} />
        <fog attach="fog" args={["#191920", 0, 15]} />
        <Environment preset="forest" />
        <group position={[0, -0.5, 0]}>
          <Frames images={images} />
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={40}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#101010"
              metalness={0.5}
            />
          </mesh>
        </group>
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
}

function Frames({
  images,
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
}) {
  const ref = useRef();
  const clicked = useRef();
  const [, params] = useRoute("/item/:id");
  const [, setLocation] = useLocation();

  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id);
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true);
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25));
      clicked.current.parent.getWorldQuaternion(q);
    } else {
      p.set(0, 0, 5.5);
      q.identity();
    }
  });
  useFrame((state, dt) => {
    state.camera.position.lerp(p, 0.025);
    state.camera.quaternion.slerp(q, 0.025);
  });
  return (
    <group
      ref={ref}
      onPointerMissed={() => {
        setLocation("/");
        console.log("Pointer missed");
      }}
    >
      {images.map(
        (props) => <Frame key={props.url}  setFunciton={setLocation} {...props}/> /* prettier-ignore */
        //(props) => <Mac key={props.url}   {...props}/> /* prettier-ignore */
      )}
    </group>
  );
}

function Frame({ url, c = new THREE.Color(), setFunciton, ...props }) {
  const [hovered, hover] = useState(false);
  const [rnd] = useState(() => Math.random());
  const image = useRef();
  const frame = useRef();
  const name = getUuid(url);
  const clicked = useRef();
  const [hidden, setVisible] = useState(false);

  useCursor(hovered);
  useFrame((state) => {
    // image.current.material.zoom =
    //   2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2;
    image.current.scale.x = THREE.MathUtils.lerp(
      image.current.scale.x,
      0.85 * (hovered ? 0.85 : 1),
      0.1
    );
    // image.current.scale.y = THREE.MathUtils.lerp(
    //   image.current.scale.y,
    //   0.9 * (hovered ? 0.905 : 1),
    //   0.1
    // );
    frame.current.material.color.lerp(c.set(hovered ? "orange" : "white"), 0.1);
  });
  return (
    <group {...props}>
      <Float
        speed={2} // Animation speed, defaults to 1
        rotationIntensity={0} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[0, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <mesh
          onClick={(e) => (
            e.stopPropagation(),
            console.log(url),
            setFunciton(
              clicked.current === e.object ? "/" : "/item/" + e.object.name
            )
          )}
          name={name}
          onPointerOver={(e) => (e.stopPropagation(), hover(true))}
          onPointerOut={() => hover(false)}
          scale={[1.5, GOLDENRATIO, 0.05]}
          position={[0, GOLDENRATIO / 2, 0]}
        >
          <boxGeometry />

          <mesh
            transparent
            opacity={0.2}
            color="white"
            metalness={1}
            roughness={1}
            envMapIntensity={2}
          />

          <mesh
            ref={frame}
            raycast={() => null}
            scale={[0.9, 0.93, 0.9]}
            position={[0, 0, 0.2]}
          >
            <meshBasicMaterial
              transparent
              opacity={0.2}
              toneMapped={false}
              fog={false}
            />
          </mesh>
          {props.image ? (
            ""
          ) : (
            <Html
              className="content"
              // style={{ pointerEvents: "none" }}
              //style={{ width: "10vw", height: "20vh" }}
              onClick={() => console.log("DONNNNN")}
              occlude
              transform
              distanceFactor={1.5}
              onOcclude={() => console.log("Occui", name)}
            >
              <div className="wrapper">{props.dom}</div>
            </Html>
          )}

          <Image
            raycast={() => null}
            ref={image}
            position={[0, 0, 0.7]}
            url={url}
          >
            {" "}
          </Image>
        </mesh>

        <Text
          maxWidth={0.5}
          anchorX="left"
          anchorY="top"
          position={[-0.2, 1.8, 0]}
          fontSize={0.09}
        >
          {props.title}
        </Text>
      </Float>
    </group>
  );
}
