/* eslint-disable react/jsx-key */
import Card from "./Card.jsx";
let cardDetails = [
  {
    head: "AR Overlays",
    content:
      "Providing real-time,intuitive information to enhance daily activities and accessibility",
  },
  {
    head: "Immersive VR Experiences",
    content:
      "Creating inclusive virtual environments that cater to diverse abilities and needs.",
  },
  {
    head: "3D Solutions",
    content:
      "Developing advanced 3D applications to support education, training, and recreation.",
  },
  {
    head: "AR Overlays",
    content:
      "Providing real-time,intuitive information to enhance daily activities and accessibility",
  },
  {
    head: "Immersive VR Experiences",
    content:
      "Creating inclusive virtual environments that cater to diverse abilities and needs.",
  },
  {
    head: "3D Solutions",
    content:
      "Developing advanced 3D applications to support education, training, and recreation.",
  },
  {
    head: "AR Overlays",
    content:
      "Providing real-time,intuitive information to enhance daily activities and accessibility",
  },
  {
    head: "Immersive VR Experiences",
    content:
      "Creating inclusive virtual environments that cater to diverse abilities and needs.",
  },
  {
    head: "3D Solutions",
    content:
      "Developing advanced 3D applications to support education, training, and recreation.",
  },
  {
    head: "AR Overlays",
    content:
      "Providing real-time,intuitive information to enhance daily activities and accessibility",
  },
  {
    head: "Immersive VR Experiences",
    content:
      "Creating inclusive virtual environments that cater to diverse abilities and needs.",
  },
  {
    head: "3D Solutions",
    content:
      "Developing advanced 3D applications to support education, training, and recreation.",
  },
];
console.log(cardDetails[0].head);
console.log(cardDetails[0].content);
export default function WhatDo() {
  return (
    <div className="absolute top-full  mb-16 text-4xl text-left xl:text-5xl font-bol overflow-hiddend">
      <h1 className="top-1/2 pl-[2.5rem] lg:pl-20 w-80">What do we do</h1>
      <div
        className="ml-20
      transform -translate-x-10 
      overflow-x-scroll 
      w-[100vw] h-fit 
      scrollhide"
      >
        <div className="flex flex-nowrap overflow-x-auto w-min h-fit pl-10 snap-proximity snap-x">
          {cardDetails.map((card) => (
            <Card head={card.head} content={card.content} />
          ))}
        </div>
      </div>
      <h2 className="pl-[2.5rem] lg:pl-20 text-2xl mt-5 text-left xl:text-4xl pt-5 font-normal block  w-[28rem] lg:w-[75rem] text-wrap mb-20">
        Our goal is to empower people of diverse needs, break down barriers, and
        foster inclusivity with AR and VR. Through innovative AR overlays and
        immersive VR experiences, we enrich lives and advance inclusivity with
        cutting-edge technology.
      </h2>
    </div>
  );
}
