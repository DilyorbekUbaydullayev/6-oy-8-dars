import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../App';

const Home = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [lang,setLang] = useState('uz');
  const {theme, setTheme} = useContext(ThemeContext);
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);


  return (
    <div className={`min-h-screen bg-gray-100 ${theme === 'light'? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-2xl font-bold">{t('Hello')}</h2>
          <div className='flex gap-4'>
          <select
            onChange={(e) => setLang(e.target.value)}
            value={lang}
            className="mt-4 p-2 border rounded"
          >
            <option >uz</option>
            <option >ru</option>
            <option >en</option>
          </select>
          <button
            onClick={() => setTheme(theme === 'light'? 'dark' : 'light')}
            className={`mt-4 p-2 border rounded `}
          >
            {theme === 'light'? 'Dark' : 'Light'}
          </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
