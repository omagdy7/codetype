import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useState } from 'react'

const SettingsPage = () => {
  const [theme, setTheme] = useState('dark');
  const [difficulty, setDifficulty] = useState('easy')

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight mb-4 text-gray-400 text-center">Settings</h1>
        <div className="text-2xl text-gray-200 mb-4">Theme</div>
        <div className="buttons flex flex-row gap-3 mb-4">
          <button className={"btn btn-xl text-2xl" + (theme == 'light' ? " bg-gray-100 text-black" : " bg-slate-800 text-white")} onClick={() => setTheme('light')}>Light</button>
          <button className={"btn btn-xl text-2xl" + (theme == 'dark' ? " bg-gray-100 text-black" : " bg-slate-800 text-white")} onClick={() => setTheme('dark')}>Dark</button>
        </div>
        <div className="text-2xl text-gray-200 mb-4">Difficulty</div>
        <div className="buttons flex flex-row gap-3 mb-4">
          <button className={"btn btn-xl text-2xl" + (difficulty == 'easy' ? " bg-gray-100 text-black" : " bg-slate-800 text-white")} onClick={() => setDifficulty('easy')}>Easy</button>
          <button className={"btn btn-xl text-2xl" + (difficulty == 'strict' ? " bg-gray-100 text-black" : " bg-slate-800 text-white")} onClick={() => setDifficulty('strict')}>Strict</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SettingsPage;
