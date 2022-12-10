import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons'

const Restart = ({onClick}) => {
  return (
    <button className="btn rounded-md border-white border-2" onClick={onClick}>
        <FontAwesomeIcon className="text-white text-4xl" icon={ faArrowRotateRight } />
    </button>
  )
}

export default Restart;
