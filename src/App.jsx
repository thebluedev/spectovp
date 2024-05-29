import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import WhatDo from "./components/WhatDo.jsx";
import Colors from "./components/Colors.jsx";
import Cursor from "./components/Cursor.jsx";
import AfterColors from "./components/AfterColors.jsx";
function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <WhatDo />
      <Colors />
      <AfterColors />
    </>
  );
}

export default App;
