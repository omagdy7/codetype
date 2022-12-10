const StatisticsCard = ({ wpm, timeElapsed, acc }) => {
  return (
    <div className="stats stats-vertical shadow h-[50vh] w-1/5 mt-auto mb-auto">
      
      <div className="stat h-1/5 place-items-center">
        <div className="stat-title text-yellow-400">WPM</div>
        {/* <div class="stat-figure text-primary"> */}
        {/*   <span></span> */}
        {/* </div> */}
        <div className="stat-value text-7xl text-yellow-400">{wpm}</div>
        <div className="stat-desc text-yellow-400">Words per minute</div>
      </div>
      
      <div className="stat h-1/5 place-items-center text-yellow-400">
        <div className="stat-title text-yellow-400">Time elapsed</div>
        <div className="stat-value text-7xl text-yellow-400">{timeElapsed}</div>
        <div className="stat-desc text-yellow-400">time in seconds</div>
      </div>
      
      <div className="stat h-1/5 place-items-center text-yellow-400">
        <div className="stat-title text-yellow-400">Acc</div>
        <div className="stat-value text-7xl text-yellow-400">{acc}%</div>
        <div className="stat-desc text-yellow-400">Accuracy</div>
      </div>
      
    </div>
  )
}

export default StatisticsCard;
