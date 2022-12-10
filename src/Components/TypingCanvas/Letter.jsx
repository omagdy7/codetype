const Letter = ({ letter , color }) => {
  let textShadow = ""
  if (color.includes("green")) {
    textShadow = "16_185_129_"
  } else {
    textShadow = "107_114_128_"
  }
  return (
    <span className={"letter font-code text-2xl [text-shadow:_0_2px_4px_rgb(" + textShadow + "/_100%)] " + color } > { letter } </span>
  )
}

export default Letter;
