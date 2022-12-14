import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Info = () => {
  return (
    <button className="rounded-3xl bg-blue-500 w-9 h-9 flex justify-center items-center">
      <Link to={"/about"}>
        <FontAwesomeIcon className="text-slate-900 text-2xl" icon={ faInfo } />
      </Link>
    </button>
  )
}

export default Info;
