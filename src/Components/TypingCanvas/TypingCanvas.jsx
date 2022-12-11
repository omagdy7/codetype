import CodingLine from "./CodingLine";
import Caret from './Caret';
import { useContext } from "react";
import { RaceContext } from '../../Contexts/Contexts';
import { ColorContext } from '../../Contexts/Contexts';
import { CaretContext } from '../../Contexts/Contexts';

const TypingCanvas = () => {

  const race = useContext(RaceContext)
  const caret = useContext(CaretContext)
  const color = useContext(ColorContext)

  return (
    <div className="typing-canvas w-1/2 min-w-fit">
      <div className={"h-[80vh] border-2 border-cyan-500 rounded-md ml-auto mr-auto p-6 mt-auto mb-auto"}>
        <Caret caret={caret} />
        {
          race.test.map((line) => {
            return (
              <div>
              <CodingLine line={line} color={color}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default TypingCanvas;
