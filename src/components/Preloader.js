import { Html, Image } from "@react-three/drei";
import { useState, useRef } from "react";

export default function Preloader() {
  return (
    <>
      {/* <Image url={"/icon.svg"} /> */}
      <Html>
        <h1>Loading</h1>
      </Html>
    </>
  );
}
