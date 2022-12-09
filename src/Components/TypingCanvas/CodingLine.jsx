import Letter from "./Letter";
import Tab from "./Tab";
import Space from "./Space";

const CodingLine = ({ line, indent, colored }) => {
  const words = line.split('');
  return (
    <span className="flex leading-0 h-8">
      <Tab indent={indent} />
      <div className="words flex gap-x-[0.6px]">
        {
          words.map((ch, idx) => {
            return (
            <>
              <Space ch={ch} />
              <Letter letter={ch} color={idx < colored ? "text-green-500" : "text-gray-500"} />
            </>
            )
          })
        }
      </div>
    </span>
  )
}

export default CodingLine;
