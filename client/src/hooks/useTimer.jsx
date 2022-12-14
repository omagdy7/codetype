import { useState, useEffect, useRef } from 'react'

export const useTimer = (start) => {

  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const tick = useRef();

  // Timer for the test
  useEffect(() => {
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

  return timeInSeconds;

}
