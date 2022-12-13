import Letter from "./Letter";
import Tab from "./Tab";
import Space from "./Space";

const CodingLine = ({ line, color }) => {
  const words = line.line.split('');
  return (
    <span className="flex leading-0 h-8">
      <Tab indent={line.indent} />
      <div className="words flex gap-x-[0.6px]">
        {
          words.map((ch, idx) => {
            let toColor = ""
            if (idx < line.right) {
              toColor = color 
            } else if (idx >= line.right && idx < line.current) {
              toColor = "text-red-500"
            } else {
              toColor = "text-gray-500"
            }
            return (
              <>
                <Space ch={ch} color={toColor} />
                <Letter letter={ch} color={toColor} />
              </>
            )
          })
        }
      </div>
    </span>
  )
}

export default CodingLine;
