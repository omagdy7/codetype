const Tab = ({ indent }) => {
  const tabs = [];
  for (let i = 0; i < indent; i++) {
    tabs.push((<span className="tab" >&ensp;</span>));
  }
  return (
    tabs.map((tab) => (
      tab
    ))
  )
}

export default Tab;
