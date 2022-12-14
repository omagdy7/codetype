const AlgorithmsMenu = ({ onRandomEnglishTestClick, onRandomCodeSnippetClick }) => {
  return (
    <div className="btn-group btn-group-vertical mb-auto mt-auto w-1/5 h-[30vh]">
      <button className="btn btn-lg text-black btn-outline bg-gradient-to-r from-red-600 to-red-800 border-2" onClick={onRandomEnglishTestClick} >English words</button>
      <button className="btn btn-lg text-black btn-outline bg-gradient-to-r from-red-600 to-red-800 border-2" onClick={onRandomCodeSnippetClick} >Code Snippets</button>
    </div>
  )
}

export default AlgorithmsMenu;
