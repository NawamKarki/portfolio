import * as THREE from "three";
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  Text,
  Html,
  CycleRaycast,
  BakeShadows,
  useCursor,
  softShadows,
} from "@react-three/drei";
import { LayerMaterial, Depth, Noise, DebugLayerMaterial } from "lamina";
import Noodles from "./Noodles";
import Button from "./Button";
import Preloader from "./Preloader";
import Icon from "./Icon";

const text = {
  intro: "Hi,\n\nI am Nawam Karki",
  title: "Full Stack Engineer, Designer, Musician and an Awesome Human",
  description:
    "Over the years I've worked with various techonoliges\n\nto create functional & beautiful applicaitons.\n\nAn innovator at heart, I am always interested in learning \n\nnew technologies and understanding how they can make our \n\nlives a little bit more easier.",
  current:
    "Currently I am learning Solidity and Brownie JS.\n\n\nLet's get in touch if you'd like to jam. ☺️",
  stack: "My Arsenal",
  music: "Besides coding & desiging, I make music.\n\nCheck my music here",
  works: "Some of my works",
};

const i = 1;

export default function Placeholder() {
  const [enter, setEnter] = useState(false);

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 22 }}>
      <Bg />
      <Suspense fallback={<Preloader />}>
        <Stage />
        <Noodles />

        <mesh>
          <Caption text={text.intro} position={[-2, 1.5, 0]} size="60" />
          <Caption text={text.title} position={[-1.32, 1.2, 0]} size="100" />
          <Caption text={text.description} position={[-1, 0.7, 0]} size="90" />
          <Caption text={text.current} position={[-1.22, 0.1, 0]} size="90" />

          <Caption text={text.stack} position={[-2.5, -0.5, 0]} size="90" />
          <Caption text={text.music} position={[1.5, -0.58, 0]} size="100" />
          <SkillsContainer />

          <mesh position={[1, 0.5, 1]}>
            <Caption text={text.works} position={[0.07, 0.2, 0]} size="100" />
            <Button
              small={false}
              position={[0, 0, 0]}
              text="ZeFi"
              type="Full Stack"
              url="https://zefi.com/en"
            />
            <Button
              small={false}
              position={[0.4, 0, 0]}
              text="Soul Æther"
              type="WebGL"
              url="https://zefi.com/en"
            />
            <Button
              small={false}
              position={[0.8, 0, 0]}
              text="PopC Trivia"
              type="Full Stack"
              url="https://popc-trivia.web.app/"
            />
            <Button
              small={false}
              position={[0, -0.2, 0]}
              text="Pepper Robot"
              type="Robotics"
              url="https://www.youtube.com/watch?v=aE3fGLqIyG8"
            />
            <Button
              small={false}
              position={[0.4, -0.2, 0]}
              text="Pixel Awards"
              type="Frontend"
              url="https://www.pixelawards.nz"
            />
            <Button
              small={false}
              position={[0.8, -0.2, 0]}
              text="VESPHA"
              type="Virtaul Reality"
              url="https://youtu.be/cIjqZWCwfZg"
            />
          </mesh>
          {/* {showPopup ? (
          <mesh position={[1, 1.5, 0]}>
            <Html className="germs">
              <p>Hover over the germs and sanitise my screen!!!!</p>
            </Html>
          </mesh>
        ) : (
          ""
        )} */}
          <Button
            small={false}
            position={[1.1, -0.8, 1]}
            text="Spotify"
            type="Spotify"
            url="https://open.spotify.com/artist/6W98BrJeO1kPAcWhn4qQdi"
          />
          <Button
            small={false}
            position={[1.5, -0.8, 1]}
            text="Youtube"
            type="Youtube"
            url="https://www.youtube.com/watch?v=Dgum2qlS5AA&list=PLxnTaYqyJNAZOYj7nNOWRoLiFPZsm-ctE&index=1"
          />
          <mesh position={[0, -1.7, 0]}>
            <Caption text="Let's Connect" size="100" />
            <Button
              small={false}
              position={[-0.4, 0, 1]}
              text="LinkedIn"
              type="LinkedIn"
              url="https://www.linkedin.com/in/nawamkarki/"
            />
            <Button
              small={false}
              position={[0, 0, 1]}
              text="GitHub"
              type="GitHub"
              url="https://github.com/nawam-karki"
            />
            <Button
              small={false}
              position={[0.4, 0, 1]}
              text="Instagram"
              type="Instagram"
              url="https://www.instagram.com/nawam.mawan/"
            />
          </mesh>
        </mesh>
        <Rig />
      </Suspense>
    </Canvas>
  );
}

function Caption({ text, position, size }) {
  const { width } = useThree((state) => state.viewport);
  return (
    <Text
      position={position}
      lineHeight={0.8}
      color="white"
      font="/Gajkley.otf"
      fontSize={width / size}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  );
}

function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 2, state.mouse.y / 2, 10),
      0.05
    );
  });
}

function Bg() {
  return (
    <mesh scale={100}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth
          colorB="red"
          colorA="skyblue"
          alpha={1.2}
          mode="normal"
          near={130}
          far={200}
          origin={[100, 100, -100]}
        />
        <Noise
          mapping="local"
          type="white"
          scale={100}
          colorA="white"
          colorB="black"
          mode="subtract"
          alpha={0.8}
        />
      </LayerMaterial>
    </mesh>
  );
}

function Skill({ children, position }) {
  const color = new THREE.Color();
  const { width } = useThree((state) => state.viewport);

  const fontProps = {
    font: "/Ki-Medium.ttf",
    fontSize: width / 130,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);
  // Tie component to the render-loop
  // useFrame(({ camera }) => {
  //   // Make text face the camera
  //   ref.current.quaternion.copy(camera.quaternion);
  //   // Animate font color
  //   ref.current.material.color.lerp(
  //     color.set(hovered ? "#fa2720" : "white"),
  //     0.1
  //   );
  // });
  return (
    <Text
      position={position}
      ref={ref}
      color="white"
      // onPointerOver={over}
      // onPointerOut={out}
      {...fontProps}
      children={children}
    />
  );
}

function SkillsContainer(position) {
  return (
    <mesh position={[-2.42, -0.55, 1]}>
      <Html className="flex skills">
        <div className="flex-r">
          <p className="skill-tab">HTML5</p>
          <p className="skill-tab">CSS3</p>
          <p className="skill-tab">Bootstrap</p>
          <p className="skill-tab">Figma</p>
        </div>
        <div className="flex-r">
          <p className="skill-tab">Next JS</p>
          <p className="skill-tab">React JS</p>
          <p className="skill-tab">Vue JS</p>
          <p className="skill-tab">Three JS</p>
        </div>
        <div className="flex-r">
          <p className="skill-tab">Nodejs</p>
          <p className="skill-tab">Python</p>
        </div>
        <div className="flex-r">
          <p className="skill-tab">Serverless - Google Cloud Platform</p>
        </div>
        <div className="flex-r">
          <p className="skill-tab">Postman</p>
          <p className="skill-tab">Github</p>
          <p className="skill-tab">GitLab</p>
        </div>
        <div className="flex-r">
          <p className="skill-tab">Webflow</p>
          <p className="skill-tab">Wordpress</p>
          <p className="skill-tab">Unity</p>
        </div>
      </Html>
      \
    </mesh>
  );
}

function Stage() {
  return (
    <>
      {/* Fill */}
      <ambientLight intensity={0.5} />
      {/* Main */}
      <directionalLight
        position={[1, 10, -2]}
        intensity={1}
        shadow-camera-far={70}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-mapSize={[512, 512]}
        castShadow
      />
      {/* Strip */}
      <directionalLight position={[-10, -10, 2]} intensity={3} />
      {/* Ground */}
      {/* <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, -0.75, 0]}>
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0.2} />
      </mesh> */}
      {/* This freezes the shadow map, which is fast, but the model has to be static  */}
      <BakeShadows />
    </>
  );
}

// Percentage closer soft shadows, normally *very* expensive
softShadows();
