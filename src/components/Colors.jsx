import Color from "./Color.jsx";
let colors = [
  {
    id: 0,
    color: "#43A7B6",
    title: "Some title",
    content:
      "random text-At SpectoV, our commitment to innovation extends beyond technology; its about creating meaningful impact. We collaborate with industry leaders, researchers, and communities to ensure our solutions are not only cutting-edge but also user-centric. By harnessing the power of AR and VR, we strive to enhance accessibility, promote education, and improve quality of life",
  },
  {
    id: 0,
    color: "#DD5061",
    title: "Some title",
    content:
      "random text-At SpectoV, our commitment to innovation extends beyond technology; its about creating meaningful impact. We collaborate with industry leaders, researchers, and communities to ensure our solutions are not only cutting-edge but also user-centric. By harnessing the power of AR and VR, we strive to enhance accessibility, promote education, and improve quality of life  Our goal is to empower people of diverse needs, break down barriers, and foster inclusivity with AR and VR. Through innovative AR overlays and immersive VR experiences, we enrich lives and advance inclusivity with cutting-edge technology.",
  },
  {
    id: 0,
    color: "#FDC654",
    title: "Some title",
    content:
      "random text-At SpectoV, our commitment to innovation extends beyond technology; its about creating meaningful impact. We collaborate with industry leaders, researchers, and communities to ensure our solutions are not only cutting-edge but also user-centric. By harnessing the power of AR and VR, we strive to enhance accessibility, promote education, and improve quality of life",
  },
  {
    id: 0,
    color: "#43A7B6",
    title: "Some title",
    content:
      "random text-At SpectoV, our commitment to innovation extends beyond technology; its about creating meaningful impact. We collaborate with industry leaders, researchers, and communities to ensure our solutions are not only cutting-edge but also user-centric. By harnessing the power of AR and VR, we strive to enhance accessibility, promote education, and improve quality of life",
  },
  {
    id: 0,
    color: "#F5F5F5",
    title: "Our Journey",
    content:
      "random text-At SpectoV, our commitment to innovation extends beyond technology; its about creating meaningful impact. We collaborate with industry leaders, researchers, and communities to ensure our solutions are not only cutting-edge but also user-centric. By harnessing the power of AR and VR, we strive to enhance accessibility, promote education, and improve quality of life ",
  },
];

export default function Colors() {
  return (
    <>
      <div className="relative mt-[25vh]">
        {colors.map((col) => (
          <Color
            key={col.id}
            color={col.color}
            title={col.title}
            text={col.content}
          />
        ))}
      </div>
    </>
  );
}
