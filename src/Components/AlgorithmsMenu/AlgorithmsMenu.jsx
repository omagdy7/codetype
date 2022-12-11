/* import AlgorithmCard from "./AlgorithmCard"; */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const AlgorithmsMenu = ({ onPrimeClick, onGetAliveCLick, onNormalTextClick}) => {
  return (
    <div className="btn-group btn-group-vertical mb-auto mt-auto w-1/5 h-[50vh]">
      <div className="btn-group">
        <button className="btn btn-active w-1/3">Python</button>
        <button className="btn w-1/3">C++</button>
        <button className="btn w-1/3">Rust</button>
      </div>
      <button className="btn btn-lg btn-outline bg-teal-700 bg-gradient-to-r from-neutral to-slate-800 border-2" onClick={onNormalTextClick} >Random Test</button>
      <button className="btn btn-lg btn-outline bg-gradient-to-r from-neutral to-slate-800 border-2" onClick={onPrimeClick} >is_prime</button>
      <button className="btn btn-lg btn-outline bg-teal-700 bg-gradient-to-r from-neutral to-slate-800 border-2" onClick={onGetAliveCLick} >get_alive</button>
      <button className="btn btn-lg btn-outline bg-teal-700 bg-gradient-to-r from-neutral to-slate-800 border-2">DFS</button>
      <button className="btn btn-lg btn-outline bg-teal-700 bg-gradient-to-r from-neutral to-slate-800 border-2">BFS</button>
      <button className="btn btn-lg btn-outline bg-teal-700 bg-gradient-to-r from-neutral to-slate-800 border-2">Quick Sort</button>
      <button className="btn btn-lg btn-outline bg-teal-700 bg-gradient-to-r from-neutral to-slate-800 border-2">Insertion Sort</button>
    </div>
  )
}

export default AlgorithmsMenu;
