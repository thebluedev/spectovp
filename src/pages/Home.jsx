import "../App.css";
import Hero   from   "../components/Hero";
import WhatDo from  "../components/WhatDo";
import Colors from  "../components/Colors";
import AfterColors from "../components/AfterColors";

function Home() {
  return (
    <>
      <Hero />
      <WhatDo />
      <Colors />
      <AfterColors />
    </>
  );
}

export default Home;
