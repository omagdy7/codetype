const Space = ({ ch }) => {
  return (
    ch == ' ' ? (<span className="space">&nbsp;&nbsp;&nbsp;</span>) : <span className="empty"></span>
  )
}

export default Space;
