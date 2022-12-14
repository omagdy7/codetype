import { Link } from "react-router-dom";

const Avatar = () => {
  return (
    <>
      <Link to={"/profile"}>
        <div className="avatar placeholder ml-2">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
            <span className="text-xl">O</span>
          </div>
        </div>
      </Link>
      <Link to={"/profile"}>
        <span className="text-xl">omagdy7</span>
      </Link>
    </>
  )
}

export default Avatar;
