import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Connect from "./components/Connect";
import Music from "./components/Music";
import Placeholder from "./components/Placeholder";

const pexel = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;

const images = [
  // Front
  {
    position: [0, 0, 1.5],
    rotation: [0, 0, 0],
    url: pexel(1103970),
    dom: <Intro />,
    title: "ABOUT",
  },
  // Back
  // { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(416430) },
  // { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(310452) },
  // Left
  {
    position: [-1.75, 0, 0.25],
    rotation: [0, Math.PI / 2.5, 0],
    //url: pexel(327482),
    url: `/resume.png`,
    dom: <div />,
    title: "RESUME",
    image: true,
  },
  // {
  //   position: [-2.15, 0, 1.5],
  //   rotation: [0, Math.PI / 2.5, 0],
  //   url: pexel(325185),
  // },
  {
    position: [-2, 0, 2.75],
    rotation: [0, Math.PI / 2.5, 0],
    url: pexel(358574),
    dom: <div />,
    title: "PORTFOLIO",
  },
  // Right
  {
    position: [1.75, 0, 0.25],
    rotation: [0, -Math.PI / 2.5, 0],
    url: pexel(227675),
    dom: <Music />,
    title: "MUSIC",
  },
  // {
  //   position: [2.15, 0, 1.5],
  //   rotation: [0, -Math.PI / 2.5, 0],
  //   url: pexel(911738),
  // },
  {
    position: [2, 0, 2.75],
    rotation: [0, -Math.PI / 2.5, 0],
    url: pexel(1738986),
    dom: <Connect />,
    title: "CONNECT",
  },
];

function App() {
  return (
    <div className="App">
      <Placeholder />
      {/* <Navbar />
      <Home images={images} /> */}
    </div>
  );
}

export default App;
