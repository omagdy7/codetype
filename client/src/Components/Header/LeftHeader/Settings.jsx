import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Settings = () => {
  return (
    <button className="rounded-3xl bg-green-500 w-9 h-9 flex justify-center items-center">
      <Link to={"/settings"}>
        <FontAwesomeIcon className="text-slate-900 text-2xl" icon={ faGear } />
      </Link>
    </button>
  )
}

export default Settings;
