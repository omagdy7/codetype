import CodingLine from "./CodingLine";
import Caret from './Caret';

const TypingCanvas = ({caret, test, color, isFocused}) => {

  return (
    <div className="typing-canvas w-1/2 min-w-fit">
      <div className={"h-[80vh] border-2 border-white rounded-md ml-auto mr-auto p-6 mt-auto mb-auto" + (!isFocused ? "blur-none" : "blur-sm")}>
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
