const Caret = ({ caret }) => {
  const style = "block w-0.5 h-6 bg-white relative";
  return (
    <div id="caret" className={style} style={{left: caret.posX+ "rem", top: caret.posY + "rem"}}></div>
  )
}

export default Caret;
