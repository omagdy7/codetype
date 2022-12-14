import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const ThreeBarButton = () => {
  return (
    <button className='btn btn-md border-white border-2'>
        <FontAwesomeIcon className="text-white text-2xl" icon={ faBars } />
    </button>
  )
}

export default ThreeBarButton;
