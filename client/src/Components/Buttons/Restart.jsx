import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons'

const Restart = ({onClick}) => {
  return (
    <button className="btn rounded-md border-white border-2 focus:bg-white focus:text-black text-4xl" onClick={onClick}>
        <FontAwesomeIcon icon={ faArrowRotateRight } />
    </button>
  )
}

export default Restart;
