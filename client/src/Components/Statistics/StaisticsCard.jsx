import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglass, faBullseye, faKeyboard } from '@fortawesome/free-solid-svg-icons'


const StatisticsCard = ({ wpm, timeElapsed, acc }) => {
  return (
    <div className="stats stats-vertical shadow lg:w-1/5 md:w-[50%] mt-auto mb-auto border-white border-2 sm:h-[25vh] md:h-[35vh] lg:h-[50vh]">
      
      <div className="stat place-items-start bg-gradient-to-r from-slate-700 to-neutral">
        <div className="stat-figure text-primary">
          <FontAwesomeIcon className="text-white lg:text-4xl md:text-xl" icon={ faKeyboard } />
        </div>
        <div className="stat-title text-white">WPM</div>
        <div className="stat-value text-7xl text-white">{wpm}</div>
        <div className="stat-desc text-white">Words per minute</div>
      </div>
      <div className="stat place-items-start text-white bg-gradient-to-r from-slate-700 to-neutral">
        <div className="stat-figure text-primary">
          <FontAwesomeIcon className="text-white text-4xl" icon={ faHourglass } />
        </div>
        <div className="stat-title text-white">Time elapsed</div>
        <div className="stat-value text-7xl text-white">{timeElapsed}</div>
        <div className="stat-desc text-white">time in seconds</div>
      </div>
      <div className="stat place-items-start text-white bg-gradient-to-r from-slate-700 to-neutral">
        <div className="stat-figure text-primary">
          <FontAwesomeIcon className="text-white text-4xl" icon={ faBullseye } />
        </div>
        <div className="stat-title text-white">Acc</div>
        <div className="stat-value text-7xl text-white">{acc}%</div>
        <div className="stat-desc text-white">Accuracy</div>
      </div>
      
    </div>
  )
}

export default StatisticsCard;

