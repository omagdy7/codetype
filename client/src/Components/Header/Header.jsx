import ThreeBarButton from './LeftHeader/ThreeBarButton'
import Logo from './LeftHeader/Logo'
import Home from './LeftHeader/Home'
import Settings from './LeftHeader/Settings'
import Info from './LeftHeader/Info'
import Avatar from './RightHeader/Avatar'
import Login from './RightHeader/Login'
import AlgorithmsMenu from '../AlgorithmsMenu/AlgorithmsMenu'

const Header = () => {
  return (
    <div className="ml-20 flex justify-between gap-3 mt-5 mr-20">
      <div className="flex justify-items-center gap-3 items-center mr-40">
        <ThreeBarButton />
        <div id="LeftHeader" className="border-white rounded-md border-2 flex justify-items-center gap-3 items-center mr-40 h-12 p-2">
          <Logo />
          <Home />
          <Settings />
          <Info />
        </div>
      </div>
      <div id="RightHeader" className="border-white rounded-md border-2 flex gap-1 items-center ml-40 mr-0 h-12 p-2">
        <Avatar />
        <Login />
      </div>
    </div>
  )
}

export default Header;
