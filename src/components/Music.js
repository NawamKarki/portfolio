/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Music() {
  return (
    <div className="relative bg-gray-50">
      <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center">
        <div className="px-4 px-8">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 text-5xl">
            <span className="block"></span>{" "}
            <span className="block text-indigo-600 text-xl">
              When I am not coding I make music
            </span>
          </h1>
          <p className=" text-left mt-3 max-w-md mx-auto text-lg text-gray-500 text-xl">
            You can checkout my music here
          </p>
          <p>Spotify</p>
        </div>
      </div>
      <div className="relative w-full h-64 h-72">
        <iframe
          className="absolute inset-0 w-full h-full object-cover"
          src="https://youtu.be/Dgum2qlS5AA"
          autoPlay
          muted
          alt=""
        />
      </div>
    </div>
  );
}
