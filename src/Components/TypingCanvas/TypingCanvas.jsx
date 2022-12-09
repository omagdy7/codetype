import { useEffect, useState } from 'react'
import CodingLine from "./CodingLine";
import Caret from './Caret';

const TypingCanvas = () => {

  const lines = [
    { line: "def is_even(n):", indent: 0, colored: 0, number: 1 },
    { line: "if(n % 2 == 0):", indent: 1, colored: 0, number: 2 },
    { line: "return True", indent: 2, colored: 0, number: 3 },
    { line: "else:", indent: 1, colored: 0, number: 4 },
    { line: "return False", indent: 2, colored: 0, number: 5 },
    { line: "def is_odd(n):", indent: 0, colored: 0, number: 6 },
    { line: "if(n % 2 == 0):", indent: 1, colored: 0, number: 7 },
    { line: "return False", indent: 2, colored: 0, number: 8 },
    { line: "else:", indent: 1, colored: 0, number: 9 },
    { line: "def is_prime():", indent: 0, colored: 0, number: 10 },
    { line: "for i in range(i * i, 100):", indent: 1, colored: 0, number: 11 },
    { line: "for j in range(2, i):", indent: 2, colored: 0, number: 12 },
    { line: "if i % j == 0:", indent: 3, colored: 0, number: 13 },
    { line: "return False", indent: 4, colored: 0, number: 14 },
    { line: "else:", indent: 3, colored: 0, number: 15 },
    { line: "return True", indent: 4, colored: 0, number: 16 },
  ];

  const get_alive = [
    { line: "pub fn get_alive(x: i32, y: i32, cur_gen: &Gen) -> i32 {", indent: 0, colored: 0, number: 1},
    { line: "let mut alive_cnt: i32 = 0;", indent: 1, colored: 0, number: 2},
    { line: "let m: i32 = cur_gen().len() as i32;", indent: 1, colored: 0, number: 3},
    { line: "let n: i32 = cur_gen()[0].len() as i32;", indent: 1, colored: 0, number: 4},
    { line: "let dx: [i8; 8] = [0, 1, 0, -1, 1, -1, -1, 1]", indent: 1, colored: 0, number: 5},
    { line: "let dy: [i8; 8] = [1, 0, -1, 0, 1, -1, 1, -1]", indent: 1, colored: 0, number: 6},
    { line: "for i in 0..8 {", indent: 1, colored: 0, number: 7},
    { line: "let nx: i32 = x as i32 + dx[i] as i32", indent: 3, colored: 0, number: 8},
    { line: "let ny: i32 = u as i32 + dy[i] as i32", indent: 3, colored: 0, number: 9},
    { line: "if is_valid_idx(nx, ny, m, n) {", indent: 3, colored: 0, number: 10},
    { line: "let cur_cell = cur_gen[nx as usize][ny as usize]", indent: 4, colored: 0, number: 11},
    { line: "match cur_cell {", indent: 4, colored: 0, number: 12},
    { line: "Cell::Alive => alive_cnt += 1,", indent: 5, colored: 0, number: 13},
    { line: "Cell::Dead => (),", indent: 5, colored: 0, number: 14},
    { line: "}", indent: 3, colored: 0, number: 15},
    { line: "}", indent: 2, colored: 0, number: 16},
    { line: "}", indent: 1, colored: 0, number: 17},
    { line: "alive_cnt", indent: 1, colored: 0, number: 18},
    { line: "}", indent: 0, colored: 0, number: 17},
  ]

  const handleBackSpace = () => {
    const newLine = test[curLineIdx];
    newLine.colored--;
    const newLines = test;
    newLines[curLineIdx].colored = newLine.colored;
    const newCaretPos = { posX: caret.posX - 0.85, posY: caret.posY }
    setCaret({ ...newCaretPos })
    setTest([...newLines]);
  }

  const handleCorrectInput = (key) => {
    const newLine = test[curLineIdx];
    newLine.colored++;
    const newCaretPos = (key == " ") ? { posX: caret.posX + 0.80, posY: caret.posY } : { posX: caret.posX + 0.88, posY: caret.posY }
    setCaret({ ...newCaretPos })
    const newLines = test;
    newLines[curLineIdx].colored = newLine.colored;
    setTest([...newLines]);
  }

  const handleUpdateToNextLine = () => {
    setCurLineIdx(curLineIdx + 1);
    const newCaretPos = { posX: test[curLineIdx + 1].indent * 2.5, posY: caret.posY + 2 }
    setCaret({ ...newCaretPos })
  }

  const [test, setTest] = useState(get_alive);
  const [curLineIdx, setCurLineIdx] = useState(0);
  const [caret, setCaret] = useState({ posX: 0, posY: 1.5 })

  const handleTest = (e) => {
    if (test[curLineIdx].colored < test[curLineIdx].line.length) {
      if (e.key == test[curLineIdx].line[test[curLineIdx].colored]) {
        handleCorrectInput(e.key)
      } else if (e.key == "Backspace") {
        handleBackSpace()
      } else {
        // handle wrong input
      }
    } else {
      handleUpdateToNextLine()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleTest);

    return () => {
      window.removeEventListener('keydown', handleTest)
    };
  }, [test, curLineIdx]);




  return (
    <div className="typing-canvas h-screen">
      <div className="h-[82vh] w-1/2 min-w-fit border-2 border-white rounded-md ml-auto mr-auto mb-10 mt-5 p-6">
        <Caret caret={caret} />
        {
          test.map((line) => {
            return (
              <div>
                <CodingLine line={line.line} indent={line.indent} colored={line.colored} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default TypingCanvas;
