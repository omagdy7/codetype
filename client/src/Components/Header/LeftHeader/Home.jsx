import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKeyboard } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <button className='rounded-3xl bg-red-500 w-9 h-9 flex justify-center items-center'>
      <Link to={"/"}>
        <FontAwesomeIcon className="text-slate-900 text-2xl" icon={faKeyboard} />
      </Link>
    </button>
  )
}

export default Home;
