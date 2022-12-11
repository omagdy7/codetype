import { useEffect, useState, useRef } from 'react'
import Header from './Components/Header/Header';
import TypingCanvas from './Components/TypingCanvas/TypingCanvas';
import Statistics from './Components/Statistics/Statistics';
import Restart from './Components/Buttons/Restart';
import AlgorithmsMenu from './Components/AlgorithmsMenu/AlgorithmsMenu';
import  algorithms from "/src/data/algorithms.json";
import  topWords from "/src/data/top_english_words.json";
import './App.css'

const App = () => {
  const clickingSound = new Audio("/src/assets/audios/nkCream.wav")

  const WORD_AVERAGE = 5;

  const topThousandWords = JSON.parse(JSON.stringify(topWords))
  const get_alive = JSON.parse(JSON.stringify(algorithms.get_alive))
  const is_prime = JSON.parse(JSON.stringify(algorithms.is_prime))


  const generateARandomTest = (topThousandWords, lines, wordsPerLine) => {
    const randomTest = []
    for (let i = 0; i < lines; i++) {
      let newLine = ""
      for (let j = 0; j < wordsPerLine ; j++) {
        if (j == wordsPerLine - 1) {
          newLine += topThousandWords.topOneThousand[Math.floor(Math.random() * 1000)]
        } else {
          newLine += topThousandWords.topOneThousand[Math.floor(Math.random() * 1000)] + " "
        }
      }
      const randomLine = {
        line: newLine,
        indent: 0,
        right: 0,
        number: i + 1
      }
      randomTest.push(randomLine)
    }
    return randomTest;
  }

  const [isCanvasFocused, setIsCanvasFocused] = useState(false)
  const [start, setStart] = useState(false)
  const [test, setTest] = useState(generateARandomTest(topThousandWords, 3, 11));
  const [curLineIdx, setCurLineIdx] = useState(0);
  const [caret, setCaret] = useState({ posX: 0, posY: 1.5 });
  const [color, setColor] = useState("text-green-500");
  const [charsRight, setCharsRight] = useState(0);
  const [charsWrong, setCharsWrong] = useState(0);
  const [totalChars, setTotalChars] = useState(0);
  const [wpm, setWpm] = useState(1);
  const firstStart = useRef(true);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const tick = useRef();
  const [acc, setAcc] = useState(100);

  const getTotalChars = (test) => {
    let totChars = 0;
    test.forEach(element => {
      totChars += element.line.length
    });
    return totChars
  }



  const restart = () => {
    const newCaret = { posX: 0, posY: 1.5 }
    setStart(false)
    setCaret({...newCaret})
    setCharsRight(0)
    setCharsWrong(0)
    setTotalChars(1)
    setWpm(1)
    setTimeElapsed(0)
    setAcc(100)
    setTest(() => [...generateARandomTest(topThousandWords, 3, 11)])
    setCurLineIdx(0)
  }
  const handleBackSpace = () => {
    clickingSound.play();
    const newLine = test[curLineIdx];
    newLine.right--;
    const newLines = test;
    newLines[curLineIdx].right = newLine.right;
    const newCaretPos = { posX: caret.posX - 0.85, posY: caret.posY }
    setCaret({ ...newCaretPos })
    setTest(() => [...newLines]);
  }

  const handleWrongInput = (key) => {
    if (key != "Shift") {
      setColor("text-red-500")
      setCharsWrong((charsWrong) => charsWrong + 1)
    }
  }

  const handleCorrectInput = (key) => {
    if (firstStart) {
      setStart(true)
    }
    setCharsRight((charsRight) => charsRight + 1)
    setColor("text-green-500")
    clickingSound.play();
    const newLine = test[curLineIdx];
    newLine.right++;
    const newCaretPos = (key == " ") ? { posX: caret.posX + 0.80, posY: caret.posY } : { posX: caret.posX + 0.88, posY: caret.posY }
    setCaret({ ...newCaretPos })
    const newLines = test;
    newLines[curLineIdx].right = newLine.right;
    setTest(() => [...newLines]);
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

  const onIsPrimeClick = () => {
    setTest(is_prime)
  }

  const onNormalTextClick = () => {
    setTest(generateARandomTest(topThousandWords, 3, 11))
  }

  const onGetAliveClick = () => {
    setTest(get_alive)
  }


  useEffect(() => {
    window.addEventListener('keydown', handleTest);

    return () => {
      window.removeEventListener('keydown', handleTest)
    };
  }, [test, curLineIdx]);

  useEffect(() => {
    if (firstStart.current) {
      firstStart.current = !firstStart.current;
      return;
    }

    if (start) {
        tick.current = setInterval(() => {
          setTimeElapsed((timeElapsed) => timeElapsed + 1)
      },1000);
    } else {
      clearInterval(tick.current)
    }

    return () => {
      clearInterval(tick.current);
    };
  }, [start])



  useEffect(() => {
    setWpm(Math.floor((((charsRight / WORD_AVERAGE) * 60) / timeElapsed)))
    setAcc(Math.floor(100 - (charsWrong / totalChars) * 100))

    return () => {
    };
  }, [timeElapsed])

  useEffect(() => {
    if (charsRight == getTotalChars(test)) {
      setStart(false)
    }
  }, [charsRight])


  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <main className="main flex justify-around mt-10">
        <AlgorithmsMenu onPrimeClick={onIsPrimeClick} onNormalTextClick={onNormalTextClick} onGetAliveCLick={onGetAliveClick}/>
        <TypingCanvas caret={caret} test={test} color={color} isFocused={isCanvasFocused}/>
        <Statistics wpm={wpm} timeElapsed={timeElapsed} acc={acc}/>
      </main>
      <div className='text-center mt-5'>
        <Restart onClick={restart}/>
      </div>
    </div>
  )
}

export default App
