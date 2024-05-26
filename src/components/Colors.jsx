import Color from "./Color.jsx";
import colors from "../feed/colors.js";

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
