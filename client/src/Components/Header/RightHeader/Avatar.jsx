import { Link } from "react-router-dom";

const Avatar = ({username}) => {
  return (
    <>
      <Link to={"/profile"}>
        <div className="avatar placeholder ml-2">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
            <span className="text-xl">{username? username[0] : ""}</span>
          </div>
        </div>
      </Link>
      <Link to={"/profile"}>
        <span className="text-xl">{username? username : ""}</span>
      </Link>
    </>
  )
}

export default Avatar;
