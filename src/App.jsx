import { useEffect, useState } from 'react'
import Header from './Components/Header/Header';
import TypingCanvas from './Components/TypingCanvas/TypingCanvas';
import Statistics from './Components/Statistics/Statistics';
import  algorithms from "/src/algorithms_code/algorithms.json";
import './App.css'

const App = () => {
  const clickingSound = new Audio("/src/assets/audios/nkCream.wav")

  const WORD_AVERAGE = 5;

  const get_alive = algorithms.get_alive
  const is_prime = algorithms.is_prime
  const text = algorithms.normal_text

  const [isCanvasFocused, setIsCanvasFocused] = useState(false)
  const [test, setTest] = useState(text);
  const [curLineIdx, setCurLineIdx] = useState(0);
  const [caret, setCaret] = useState({ posX: 0, posY: 1.5 });
  const [color, setColor] = useState("text-green-500");
  const [charsRight, setCharsRight] = useState(0);
  const [charsWrong, setCharsWrong] = useState(0);
  const [totalChars, setTotalChars] = useState(1);
  const [wpm, setWpm] = useState(1);
  const [timeElapsed, setTimeElapsed] = useState(1);
  const [acc, setAcc] = useState(100);

  const handleBackSpace = () => {
    clickingSound.play();
    const newLine = test[curLineIdx];
    newLine.right--;
    const newLines = test;
    newLines[curLineIdx].right = newLine.right;
    const newCaretPos = { posX: caret.posX - 0.85, posY: caret.posY }
    setCaret({ ...newCaretPos })
    setTest([...newLines]);
  }

  const handleWrongInput = (key) => {
    if (key != "Shift") {
      setColor("text-red-500")
      setCharsWrong((charsWrong) => charsWrong + 1)
    }
  }

  const handleCorrectInput = (key) => {
    setCharsRight((charsRight) => charsRight + 1)
    setColor("text-green-500")
    clickingSound.play();
    const newLine = test[curLineIdx];
    newLine.right++;
    const newCaretPos = (key == " ") ? { posX: caret.posX + 0.80, posY: caret.posY } : { posX: caret.posX + 0.88, posY: caret.posY }
    setCaret({ ...newCaretPos })
    const newLines = test;
    newLines[curLineIdx].right = newLine.right;
    setTest([...newLines]);
  }

  const handleUpdateToNextLine = () => {
    setCurLineIdx(curLineIdx + 1);
    const newCaretPos = { posX: test[curLineIdx + 1].indent * 2.5, posY: caret.posY + 2 }
    setCaret({ ...newCaretPos })
  }


  const handleTest = (e) => {
    setTotalChars((totalChars) => totalChars + 1)
    if (test[curLineIdx].right < test[curLineIdx].line.length) {
      if (e.key == test[curLineIdx].line[test[curLineIdx].right]) {
        handleCorrectInput(e.key)
      } else if (e.key == "Backspace") {
        handleBackSpace()
      } else {
        handleWrongInput(e.key)
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

  useEffect(() => {
    const id = setInterval(() => {
      setTimeElapsed((timeElapsed) => timeElapsed + 1)
    },1000);

    return () => {
      clearInterval(id);
    };
  }, [])



  useEffect(() => {
    setWpm(Math.floor((((charsRight / WORD_AVERAGE) / timeElapsed) * 60)))
    setAcc(Math.floor(100 - (charsWrong / totalChars) * 100))

    return () => {
    };
  }, [timeElapsed])


  return (
    <div className="App h-screen">
      <div className="Header">
        <Header />
      </div>
      <main className="main flex justify-around mt-10">
        <Statistics wpm={wpm} timeElapsed={timeElapsed} acc={acc}/>
        <TypingCanvas caret={caret} test={test} color={color} isFocused={isCanvasFocused}/>
        <Statistics wpm={wpm} timeElapsed={timeElapsed} acc={acc}/>
      </main>
    </div>
  )
}

export default App
