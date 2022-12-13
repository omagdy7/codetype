import StatisticsCard from "./StaisticsCard"
import { StatsContext } from "../../Contexts/Contexts";
import { useContext } from "react";

const Statistics = () => {

  const stats = useContext(StatsContext)
  
  return (
    <StatisticsCard wpm={stats.wpm} timeElapsed={stats.timeElapsed} acc={stats.acc}/>
  )
}

export default Statistics;
