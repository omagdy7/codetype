/* import AlgorithmCard from "./AlgorithmCard"; */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const AlgorithmsMenu = ({ onPrimeClick, onGetAliveCLick, onNormalTextClick}) => {
  return (
    <div className="btn-group btn-group-vertical mb-auto mt-auto w-1/5 h-[50vh]">
      <button className="btn btn-lg bg-slate-800" onClick={onPrimeClick} >is_prime</button>
      <button className="btn btn-lg bg-slate-800" onClick={onGetAliveCLick} >get_alive</button>
      <button className="btn btn-lg bg-slate-800" onClick={onNormalTextClick} >normal-text</button>
      <button className="btn btn-lg bg-slate-800">DFS</button>
      <button className="btn btn-lg bg-slate-800">BFS</button>
      <button className="btn btn-lg bg-slate-800">Quick Sort</button>
      <button className="btn btn-lg bg-slate-800">Insertion Sort</button>
    </div>
  )
}

export default AlgorithmsMenu;
