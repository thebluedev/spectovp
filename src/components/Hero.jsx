import "neobrutalismcss";
import scrollthing from "../assets/scrollthing.svg";
import heroBlob from "../assets/heroBlob.svg";
export default function Hero() {
  return (
    <div className="h-full w-screen overflow-x-hidden overflow-y-auto font-normal text-black">
      <div className="absolute inset-x-[2.5rem] lg:inset-x-20 top-[18rem] lg:top-[18rem] mb-100  text-4xl text-left xl:text-5xl font-normal">
        <h1>
          <div className="text-[#d73633] inline font-bold">Trailblazing </div>
          assistive VR & AR
        </h1>
        <h1>
          <div className="inline text-[#4AA7B6] font-bold">Tech </div>for a more
        </h1>
        <h1>
          <div className="inline text-[#FDC654] font-bold">
            Accessible World
          </div>
        </h1>
        <button
          className="nb-button default rounded-2xl mt-5  bg-[#f5f5f5]  normal-case h-[3rem] w-[10rem]
          "
          style={{ padding: "0px" }}
        >
          Learn More
        </button>
        <img
          src={scrollthing}
          alt="scroll down icon"
          className="h-10 absolute top-[50vh] left-1/2"
        />
      </div>
      <img
        src={heroBlob}
        alt="cosmetic blob"
        className=" absolute right-0 top-0 -z-10 object-fit h-[100vh] transform scale-125"
      />
    </div>
  );
}
