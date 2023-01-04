const Caret = ({ caret }) => {
  const style = "block w-0.5 h-6 bg-white relative";
  return (
    <div id="caret" className={style} style={{left: caret.posX + "px", top: caret.posY + "rem"}}></div>
  )
}

export default Caret;
