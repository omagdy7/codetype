import CodingLine from "./CodingLine";
import Caret from './Caret';

const TypingCanvas = ({caret, test, color, isFocused}) => {

  return (
    <div className="typing-canvas h-screen">
      <div className={"h-[95vh] w-1/2 min-w-full border-2 border-white rounded-md ml-auto mr-auto mb-10 p-6 " + (!isFocused ? "blur-none" : "blur-sm")}>
        <Caret caret={caret} />
        {
          test.map((line) => {
            return (
              <div>
                <CodingLine line={line.line} indent={line.indent} right={line.right} color={color}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default TypingCanvas;
