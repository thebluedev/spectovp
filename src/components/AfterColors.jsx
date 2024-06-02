import finalBlob1 from "../assets/finalBlobCut.svg";
export default function AfterColors() {
  return (
    <div className="h-screen w-screen overflow-clip font-normal text-black scrollhide relative">
      <div className="p-12 pt-[10rem] md:pt-[24rem] md:p-20 mb-100 text-5xl text-left xl:text-6xl font-normal relative z-20">
        <h1>
          <div className="text-[#d73633] inline font-bold">
            Transform your experience{" "}
          </div>
          with AR and VR.
        </h1>
        <h1>
          Explore our products designed to
          <div className="inline text-[#4AA7B6] font-bold">
            {" "}
            enhance accessibility
          </div>
        </h1>
        <h1>
          and provide
          <div className="inline text-[#FDC654] font-bold">
            {" "}
            immersive experiences.
          </div>
        </h1>
        <a
          className="nb-button default rounded-2xl mt-5 bg-[#f5f5f5] normal-case h-[3rem] w-[10rem] mb-24"
          style={{ paddingTop: "1rem" }}
          href="products"
        >
          Explore now
        </a>
      </div>
      <img
        src={finalBlob1}
        alt="cosmetic blob"
        className="absolute bottom-0 left-0 h-full w-full transform z-10"
      />
    </div>
  );
}
