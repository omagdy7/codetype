const Space = ({ ch }) => {
  return (
    ch == ' ' ? (<span>&nbsp;&nbsp;&nbsp;</span>) : <span></span>
  )
}

export default Space;
