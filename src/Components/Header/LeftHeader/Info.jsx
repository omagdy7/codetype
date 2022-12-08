import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'

const Info = () => {
  return (
    <button className="rounded-3xl bg-blue-500 w-9 h-9 flex justify-center items-center">
        <FontAwesomeIcon className="text-slate-900 text-2xl" icon={ faInfo } />
    </button>
  )
}

export default Info;
