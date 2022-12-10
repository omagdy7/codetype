import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglass, faBullseye, faKeyboard } from '@fortawesome/free-solid-svg-icons'


const StatisticsCard = ({ wpm, timeElapsed, acc }) => {
  return (
    <div className="stats stats-vertical shadow h-[50vh] w-1/5 mt-auto mb-auto">
      
      <div className="stat place-items-start bg-slate-800">
        <div className="stat-figure text-primary">
          <FontAwesomeIcon className="text-white text-4xl" icon={ faKeyboard } />
        </div>
        <div className="stat-title text-amber-400">WPM</div>
        <div className="stat-value text-7xl text-amber-400">{wpm}</div>
        <div className="stat-desc text-amber-400">Words per minute</div>
      </div>
      <div className="stat place-items-start text-amber-400 bg-slate-800">
        <div className="stat-figure text-primary">
          <FontAwesomeIcon className="text-white text-4xl" icon={ faHourglass } />
        </div>
        <div className="stat-title text-amber-400">Time elapsed</div>
        <div className="stat-value text-7xl text-amber-400">{timeElapsed}</div>
        <div className="stat-desc text-amber-400">time in seconds</div>
      </div>
      <div className="stat place-items-start text-amber-400 bg-slate-800">
        <div className="stat-figure text-primary">
          <FontAwesomeIcon className="text-white text-4xl" icon={ faBullseye } />
        </div>
        <div className="stat-title text-amber-400">Acc</div>
        <div className="stat-value text-7xl text-amber-400">{acc}%</div>
        <div className="stat-desc text-amber-400">Accuracy</div>
      </div>
      
    </div>
  )
}

export default StatisticsCard;
