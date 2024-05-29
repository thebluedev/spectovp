export default function Color(props) {
  return (
    <div
      className={`block w-full h-fit bg-[${props.color}] sticky top-0 p-20 pt-[15rem] pb-[15rem] text-white last:text-black last:h-[100vh] last:relative `}
    >
      <h1 className="pt-10 text-4xl text-left xl:text-5xl font-bold">
        {props.title}
      </h1>
      <p className="text-xl text-left xl:text-3xl font-normal pt-5">
        {props.text}
      </p>
    </div>
  );
}
