import { useEffect, useState, useRef } from 'react'
import Header from './Components/Header/Header';
import TypingCanvas from './Components/TypingCanvas/TypingCanvas';
import Statistics from './Components/Statistics/Statistics';
import Restart from './Components/Buttons/Restart';
import AlgorithmsMenu from './Components/AlgorithmsMenu/AlgorithmsMenu';
import Footer from './Components/Footer/Footer';
import { RaceContext } from './Contexts/Contexts';
import { ColorContext } from './Contexts/Contexts';
import { CaretContext } from './Contexts/Contexts';
import { StatsContext } from './Contexts/Contexts';
import { useActiveElement } from './hooks/useActiveElement'
import { generateRandomTest } from './utils/generateRandomTest';
import './App.css'

const TEST_TYPE = {
  "CODE": 0,
  "ENGLISH": 1,
}

const App = () => {
  const clickingSound = new Audio("/src/assets/audios/nkCream.wav")

  const [race, setRace] = useState([{}]);
  const [races, setRaces] = useState([{}])


  const WORD_AVERAGE = 5;

  const intialStatsState = {
    wpm: 0,
    timeElapsed: 0,
    acc: 100,
  }

  const initialCaretPos = { posX: 0, posY: 1.5 }

  /* App states */
  const [start, setStart] = useState(false)
  const [testType, setTestType] = useState(TEST_TYPE.CODE)
  const activeElement = useActiveElement()
  const [isTypingCanvasFocused, setIsTypingCanvasFocused] = useState(true)
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
    if (test) {
      let totChars = 0;
      test.forEach(element => {
        totChars += element.content.length
      });
      return totChars
    }
    return 0;
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
    const newLine = race.lines[race.cur_line_idx];
    if (newLine.correct_so_far == newLine.current) {
      newLine.current_idx = Math.max(0, newLine.current_idx - 1);
      newLine.correct_so_far = Math.max(0, newLine.correct_so_far - 1);
    } else {
      newLine.current_idx = Math.max(0, newLine.current_idx - 1);
    }
    const newLines = race;
    newLines.lines[race.cur_line_idx].correct_so_far = newLine.correct_so_far;
    const newCaretPos = (key == " ") ? { posX: Math.max(caret.posX - 0.85, 0), posY: caret.posY } : { posX: Math.max(caret.posX - 0.88, 0), posY: caret.posY }
    setCaret({ ...newCaretPos })
    setRace({ ...newLines });
  }

  const handleWrongInput = (key) => {
    if (key != "Shift") {
      clickingSound.play();
      const newLine = race.lines[race.cur_line_idx];
      newLine.current_idx++;
      const newLines = race;
      newLines.lines[race.cur_line_idx].contents = newLine.content
      setRace({ ...newLines });
      const newCaretPos = (key == " ") ? { posX: caret.posX + 0.85, posY: caret.posY } : { posX: caret.posX + 0.88, posY: caret.posY }
      setCaret({ ...newCaretPos })
      setCharsWrong((ch) => ch + 1)
      setRace({ ...race })
    }
  }

  const handleCorrectInput = (key) => {
    clickingSound.play();
    if (firstStart) {
      setStart(true)
    }

    if (key == "Tab") {
      return
    }

    setCharsRight((ch) => ch + 1)

    setColor("text-green-500")

    console.log(caret)
    const newCaretPos = (key == " ") ? { posX: caret.posX + 0.85, posY: caret.posY } : { posX: caret.posX + 0.88, posY: caret.posY }
    console.log(newCaretPos)
    setCaret({ ...newCaretPos })

    const newLine = race.lines[race.cur_line_idx];
    newLine.correct_so_far++;
    newLine.current_idx = newLine.correct_so_far;

    const newLines = race;
    newLines.lines[race.cur_line_idx].content = newLine.content

    setRace({ ...newLines });
  }


  const handleUpdateToNextLine = () => {
    setRace({ ...race, cur_line_idx: race.cur_line_idx + 1 })
    const newCaretPos = { posX: race.lines[race.cur_line_idx + 1].indent * 2.5, posY: caret.posY + 2 }
    setCaret({ ...newCaretPos })
  }

  const handleTest = (e) => {
    setCharsTotal((ch) => ch + 1)
    const curLine = race.lines[race.cur_line_idx]
    // prevent spacebar from scrolling down when the typing canvas is focused
    if(e.key == " " && e.target.id == "typing-canvas") {
      console.log(e.target)
      e.preventDefault();
    }
    if (curLine.current_idx < curLine.content.length) {
      if (e.key == curLine.content[curLine.current_idx] && curLine.current_idx == curLine.correct_so_far) {
        console.log("I am correct")
        handleCorrectInput(e.key)
      } else if (e.key == "Backspace") {
        console.log("I am deleting")
        handleBackSpace(e.key)
      } else {
        console.log("I am wrong")
        handleWrongInput(e.key)
      }
    } else {
      handleUpdateToNextLine()
    }
  }


  /* Restarting the app to its intial state */
  const restart = () => {
    if (testType == TEST_TYPE.ENGLISH) {
      getRandomEnglishTest()
    } else {
      getRandomCodeSnippet()
    }
    setStart(false)
    setStats(intialStatsState)
    setCaret(initialCaretPos)
    setCharsRight(0)
    setCharsWrong(0)
    setCharsTotal(0)
    setTimeInSeconds(0)
    setIsTypingCanvasFocused(true)
  }

  /* Buttons for different tests*/
  const getRandomEnglishTest = () => {
    setRace({ lines: generateRandomTest(3, 11), cur_line_idx: 0 })
    setTestType(TEST_TYPE.ENGLISH)
    setCaret({ ...initialCaretPos })
    setIsTypingCanvasFocused(true)
  }

  const getRandomCodeSnippet = () => {
    setTestType(TEST_TYPE.CODE)
    const randIdx = Math.floor(Math.random() * races.length);
    setRace({ ...races[randIdx], cur_line_idx: 0 })
    setCaret({ ...initialCaretPos })
    setIsTypingCanvasFocused(true)
  }

  // adding event handling for keys
  useEffect(() => {
    if (activeElement.id == "typing-canvas") {
      window.addEventListener('keydown', handleTest);
    }

    return () => {
      window.removeEventListener('keydown', handleTest)
    };
  }, [activeElement, race]);

  useEffect(() => {
    setIsTypingCanvasFocused(activeElement.id == "typing-canvas")

  }, [activeElement])




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
      /* wpm: Math.floor((((charsRight / WORD_AVERAGE) * 60) / timeInSeconds)), */
      /* acc: Math.floor(100 - (charsWrong / charsTotal) * 100) */
    })

    return () => {
    };
  }, [timeInSeconds])



  /* Checking if user finished the test */
  useEffect(() => {
    if (timeInSeconds > 0) {
      setStats({
        ...stats,
        wpm: Math.floor((((charsRight / WORD_AVERAGE) * 60) / timeInSeconds)),
        acc: Math.floor(100 - (charsWrong / charsTotal) * 100)
      })
    }
    if (charsRight == getTotalChars(race.lines)) {
      setStart(false)
    }
  }, [charsRight, charsWrong])



  // get races from database
  useEffect(() => {
    async function fetchRace() {
      const respone = await fetch("http://localhost:5000/")
      const newRaces = await respone.json()
      setRaces(newRaces)
      setRace(newRaces[Math.floor(Math.random() * newRaces.length)])
    }
    fetchRace()
  }, [])


  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <main className="main flex justify-around mt-10">
        <AlgorithmsMenu onRandomEnglishTestClick={getRandomEnglishTest} onRandomCodeSnippetClick={getRandomCodeSnippet}/>
        <RaceContext.Provider value={race}>
          <CaretContext.Provider value={caret}>
            <ColorContext.Provider value={color}>
              {race.lines ? (<TypingCanvas isFocused={isTypingCanvasFocused} />) : (<div>Loading</div>)}
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
      <Footer />
    </div>
  )
}

export default App
