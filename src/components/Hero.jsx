import "neobrutalismcss";
import scrollthing from "../assets/scrollthing.svg";
import heroBlob from "../assets/heroBlob.svg";
export default function Hero() {
  return (
    <div className="h-full w-screen overflow-x-hidden overflow-y-auto font-normal text-black">
      <div className="p-12 pt-[14rem] md:pt-[28rem] md:p-20 mb-100  text-5xl text-left xl:text-6xl font-normal">
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
        <a
          href="products"
          className="nb-button default rounded-2xl mt-5  bg-[#f5f5f5]  normal-case h-[3rem] w-[10rem] mb-24"
          style={{ padding: "1rem" }}
        >
          Learn More
        </a
        >
        <img
          src={scrollthing}
          alt="scroll down icon"
          className="h-10 hidden md:block md:mt-[0rem] mt-[10.5rem] ml-[50%]"
        />
      </div>
      <img
        src={heroBlob}
        alt="cosmetic blob"
        className="absolute right-0 top-0 -z-10 object-fit h-[100vh] transform scale-125"
      />
    </div>
  );
}
