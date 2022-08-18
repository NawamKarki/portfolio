import { Html, Image } from "@react-three/drei";
import { useState, useRef } from "react";

export default function Preloader() {
  return (
    <>
      {/* <Image url={"/icon.svg"} /> */}
      <Html className="preloader">
        <h1>
          IMPORTANT!!! <br />
          This site is a work in progress
        </h1>
      </Html>
    </>
  );
}
