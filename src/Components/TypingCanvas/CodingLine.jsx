import Letter from "./Letter";
import Tab from "./Tab";
import Space from "./Space";

const CodingLine = ({ line, indent, right , color}) => {
  const words = line.split('');
  let toColor = ""
  return (
    <span className="flex leading-0 h-8">
      <Tab indent={indent} />
      <div className="words flex gap-x-[0.6px]">
        {
          words.map((ch, idx) => {
            return (
            <>
              <Space ch={ch} />
              <Letter letter={ch} color={idx < right ? color : "text-gray-500"} />
            </>
            )
          })
        }
      </div>
    </span>
  )
}

export default CodingLine;
