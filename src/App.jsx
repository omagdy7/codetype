import { useEffect, useState, useRef, createContext } from 'react'
import Header from './Components/Header/Header';
import TypingCanvas from './Components/TypingCanvas/TypingCanvas';
import Statistics from './Components/Statistics/Statistics';
import Restart from './Components/Buttons/Restart';
import AlgorithmsMenu from './Components/AlgorithmsMenu/AlgorithmsMenu';
import algorithms from "/src/data/algorithms.json";
import topWords from "/src/data/top_english_words.json";
import { RaceContext } from './Contexts/Contexts';
import { ColorContext } from './Contexts/Contexts';
import { CaretContext } from './Contexts/Contexts';
import { StatsContext } from './Contexts/Contexts';
import { generateARandomTest } from './utils/generateRandomTest';
import './App.css'

const App = () => {
  const clickingSound = new Audio("/src/assets/audios/nkCream.wav")


  const WORD_AVERAGE = 5;

  /* our data */
  const topThousandWords = JSON.parse(JSON.stringify(topWords))
  const get_alive = JSON.parse(JSON.stringify(algorithms.get_alive))
  const is_prime = JSON.parse(JSON.stringify(algorithms.is_prime))
  const isPalindrome = JSON.parse(JSON.stringify(algorithms.isPalindrome))

  const intialStatsState = {
    wpm: 1,
    timeElapsed: 1,
    acc: 100,
    charsStats: {
      charsRight: 0,
      charsWrong: 0,
      charsTotal: 1
    }
  }

  const initialCaretPos = { posX: 0, posY: 1.5 }

  const intialRaceState = {
    test: isPalindrome,
    curLineIdx: 0
  }




  /* App states */
  const [start, setStart] = useState(false)
  const [race, setRace] = useState(intialRaceState);
  const [caret, setCaret] = useState(initialCaretPos);
  const [color, setColor] = useState("text-green-500");
  const [stats, setStats] = useState(intialStatsState);
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [charsRight, setCharsRight] = useState(0);
  const [charsWrong, setCharsWrong] = useState(0);
  const [charsTotal, setCharsTotal] = useState(0);
  const firstStart = useRef(true);
  /* const timeInSeconds = useRef(0); */
  const tick = useRef();

  /* gets the total chars of the provided tets */
  const getTotalChars = (test) => {
    let totChars = 0;
    test.forEach(element => {
      totChars += element.line.length
    });
    return totChars
  }


  // default: increase both right and cur
  // if i am deleting and cur > right then don't decrease cur
  // only decrease right when Backspace if right == cur
  // I need to keep track of the first wrong char
  // wordRightSoFar oh no Wrong word
  // |______________||___________|
  //       right   wrong         cur

  /* test handling */
  const handleBackSpace = (key) => {
    clickingSound.play();
    const newLine = race.test[race.curLineIdx];
    if (newLine.right == newLine.current) {
      newLine.current = Math.max(0, newLine.current - 1);
      newLine.right = Math.max(0, newLine.right - 1);
    } else {
      newLine.current = Math.max(0, newLine.current - 1);
    }
    const newLines = race;
    newLines.test[race.curLineIdx].right = newLine.right;
    const newCaretPos = (key == " ") ? { posX: Math.max(caret.posX - 0.85, 0), posY: caret.posY } : { posX: Math.max(caret.posX - 0.88, 0), posY: caret.posY }
    setCaret({ ...newCaretPos })
    setRace({ ...newLines });
  }

  const handleWrongInput = (key) => {
    if (key != "Shift") {
      const newLine = race.test[race.curLineIdx];
      newLine.current++;
      const newLines = race;
      newLines.test[race.curLineIdx].line = newLine.line
      setRace({ ...newLines });
      const newCaretPos = (key == " ") ? { posX: caret.posX + 0.85, posY: caret.posY } : { posX: caret.posX + 0.88, posY: caret.posY }
      setCaret({ ...newCaretPos })
      setCharsWrong((ch) => ch + 1)
      setRace({ ...race, })
    }
  }

  const handleCorrectInput = (key) => {
    if (firstStart) {
      setStart(true)
    }
    clickingSound.play();
    setCharsRight((ch) => ch + 1)

    setColor("text-green-500")

    const newCaretPos = (key == " ") ? { posX: caret.posX + 0.85, posY: caret.posY } : { posX: caret.posX + 0.88, posY: caret.posY }
    setCaret({ ...newCaretPos })

    const newLine = race.test[race.curLineIdx];
    newLine.right++;
    newLine.current = newLine.right;

    const newLines = race;
    newLines.test[race.curLineIdx].line = newLine.line

    setRace({ ...newLines });
  }

  const handleUpdateToNextLine = () => {
    console.log(race)
    setRace({ ...race, curLineIdx: race.curLineIdx + 1 })
    const newCaretPos = { posX: race.test[race.curLineIdx + 1].indent * 2.5, posY: caret.posY + 2 }
    setCaret({ ...newCaretPos })
  }

  const handleTest = (e) => {
    setCharsTotal((ch) => ch + 1)
    if (race.test[race.curLineIdx].current < race.test[race.curLineIdx].line.length) {
      const curLine = race.test[race.curLineIdx]
      if (e.key == curLine.line[curLine.current] && curLine.current == curLine.right) {
        handleCorrectInput(e.key)
      } else if (e.key == "Backspace") {
        handleBackSpace(e.key)
      } else {
        handleWrongInput(e.key)
      }
    } else {
      handleUpdateToNextLine()
    }
  }


  /* Restarting the app to its intial state */
  const restart = () => {
    setStart(false)
    setRace(intialRaceState)
    setStats(intialStatsState)
    setCaret(initialCaretPos)
    setCharsRight(0)
    setCharsWrong(0)
    setCharsTotal(0)
    setTimeInSeconds(0)
  }

  /* Buttons for different tests*/
  const onIsPrimeClick = () => {
    setRace({ ...intialRaceState, test: is_prime })
    setCaret({ ...initialCaretPos })
  }

  const onNormalTextClick = () => {
    setRace({ ...intialRaceState, test: generateARandomTest(topThousandWords, 3, 11) })
    setCaret({ ...initialCaretPos })
  }

  const onGetAliveClick = () => {
    setRace({ ...intialRaceState, test: get_alive })
    setCaret({ ...initialCaretPos })
  }


  // adding event handling for keys
  useEffect(() => {
    window.addEventListener('keydown', handleTest);

    return () => {
      window.removeEventListener('keydown', handleTest)
    };
  }, [race]);




  // Timer for the test
  useEffect(() => {
    if (firstStart.current) {
      firstStart.current = !firstStart.current;
      return;
    }

    if (start) {
      tick.current = setInterval(() => {
        setTimeInSeconds((t) => t + 1)
      }, 1000);
    } else {
      clearInterval(tick.current)
    }

    return () => {
      clearInterval(tick.current);
    };
  }, [start])



  // Providing live statstics
  useEffect(() => {
    setStats({
      ...stats,
      timeElapsed: timeInSeconds,
      wpm: Math.floor((((charsRight / WORD_AVERAGE) * 60) / timeInSeconds)),
      acc: Math.floor(100 - (charsWrong / charsTotal) * 100)
    })

    return () => {
    };
  }, [timeInSeconds])



  /* Checking if user finished the test */
  useEffect(() => {
    setStats({
      ...stats,
      wpm: Math.floor((((charsRight / WORD_AVERAGE) * 60) / timeInSeconds)),
      acc: Math.floor(100 - (charsWrong / charsTotal) * 100)
    })
    if (charsRight == getTotalChars(race.test)) {
      setStart(false)
    }
  }, [charsRight, charsWrong])


  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <main className="main flex justify-around mt-10">
        <AlgorithmsMenu onPrimeClick={onIsPrimeClick} onNormalTextClick={onNormalTextClick} onGetAliveCLick={onGetAliveClick} />
        <RaceContext.Provider value={race}>
          <CaretContext.Provider value={caret}>
            <ColorContext.Provider value={color}>
              <TypingCanvas />
            </ColorContext.Provider>
          </CaretContext.Provider>
        </RaceContext.Provider>
        <StatsContext.Provider value={stats}>
          <Statistics />
        </StatsContext.Provider>
      </main>
      <div className='text-center mt-5'>
        <Restart onClick={restart} />
      </div>
    </div>
  )
}

export default App
