import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useState } from 'react'

const SettingsPage = () => {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight mb-4 text-gray-800">Settings</h1>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <button
            className={`col-span-1 rounded-full py-2 px-4 ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-700'
              } ${theme === 'light' ? 'text-gray-800' : 'text-gray-100'}`}
            onClick={() => handleThemeChange('light')}
          >
            Light
          </button>
          <button
            className={`col-span-1 rounded-full py-2 px-4 ${theme === 'dark' ? 'bg-gray-300' : 'bg-gray-700'
              } ${theme === 'dark' ? 'text-gray-800' : 'text-gray-100'}`}
            onClick={() => handleThemeChange('dark')}
          >
            Dark
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SettingsPage;
