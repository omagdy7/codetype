import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

const Settings = () => {
  return (
    <button className="rounded-3xl bg-green-500 w-9 h-9 flex justify-center items-center">
        <FontAwesomeIcon className="text-slate-900 text-2xl" icon={ faGear } />
    </button>
  )
}

export default Settings;
