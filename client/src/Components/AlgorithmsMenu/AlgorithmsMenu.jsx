/* import AlgorithmCard from "./AlgorithmCard"; */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const AlgorithmsMenu = ({ onPrimeClick, onGetAliveCLick, onNormalTextClick}) => {
  return (
    <div className="btn-group btn-group-vertical mb-auto mt-auto w-1/5 h-[50vh]">
      <button className="btn btn-lg btn-outline bg-teal-700 bg-gradient-to-r from-neutral to-slate-800 border-2" onClick={onNormalTextClick} >English words</button>
      <button className="btn btn-lg btn-outline bg-gradient-to-r from-neutral to-slate-800 border-2" onClick={onPrimeClick} >Code Snippets</button>
    </div>
  )
}

export default AlgorithmsMenu;
