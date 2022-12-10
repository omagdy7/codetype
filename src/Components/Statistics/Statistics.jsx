import StatisticsCard from "./StaisticsCard"

const Statistics = ({wpm, timeElapsed, acc}) => {
  return (
    <StatisticsCard wpm={wpm} timeElapsed={timeElapsed} acc={acc}/>
  )
}

export default Statistics;
