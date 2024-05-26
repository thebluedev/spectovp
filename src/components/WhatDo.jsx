import Card from "./Card.jsx";
import cardDetails from "../feed/cards.js";
console.log(cardDetails[0].content);
export default function WhatDo() {
  return (
    <div className="mt-[12.5vh] text-4xl text-left xl:text-5xl font-bol overflow-hiddend">
      <h1 className="pl-[2.5rem] lg:pl-20 w-100">What do we do</h1>
      <div
        className="ml-20
      transform -translate-x-10 
      overflow-x-scroll 
      w-[100vw] h-fit
      scrollhide"
      >
        <div className="flex flex-nowrap overflow-x-auto w-min h-fit pl-10 snap-proximity snap-x">
          {cardDetails.map((card) => (
            <Card head={card.head} content={card.content} key={card.id} />
          ))}
        </div>
      </div>
      <h2 className="pl-[2.5rem] lg:pl-20 text-2xl mt-5 text-left xl:text-4xl pt-5 font-normal block  w-[28rem] lg:w-[75rem] text-wrap lg:mb-20 mb-[15rem] ">
        Our goal is to empower people of diverse needs, break down barriers, and
        foster inclusivity with AR and VR. Through innovative AR overlays and
        immersive VR experiences, we enrich lives and advance inclusivity with
        cutting-edge technology.
      </h2>
    </div>
  );
}
