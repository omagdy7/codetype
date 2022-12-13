import Letter from "./Letter";
import Tab from "./Tab";
import Space from "./Space";

const CodingLine = ({ line, color }) => {
  const words = line.content.split('');
  return (
    <span className="flex leading-0 h-8">
      <Tab indent={line.indent} />
      <div className="words flex gap-x-[0.6px]">
        {
          words.map((ch, idx) => {
            let toColor = ""
            if (idx < line.correct_so_far) {
              toColor = color 
            } else if (idx >= line.correct_so_far && idx < line.current_idx) {
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
