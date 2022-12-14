const Space = ({ ch , color}) => {
  let newColor = ""
  if (color.includes("red")) {
    newColor = "underline decoration-red-500"
  }
  return (
    ch == ' ' ? (<span className={"space " +  newColor}>&nbsp;&nbsp;&nbsp;</span>) : <span className="empty"></span>
  )
}

export default Space;
