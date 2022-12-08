import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKeyboard } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <button className='rounded-3xl bg-red-500 w-9 h-9 flex justify-center items-center'>
        <FontAwesomeIcon className="text-slate-900 text-2xl" icon={ faKeyboard } />
    </button>
  )
}

export default Home;
