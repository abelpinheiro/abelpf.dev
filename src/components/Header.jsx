import { Link } from "react-router-dom";
import { useState } from "react"
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }


  return (
    <header className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ${isDarkMode ? 'dark:bg-black dark:text-white' : 'bg-white text-black'}`}>
      <div className="font-poppins text-3xl">
        <h1>abelpf.dev</h1>
      </div>

      {/* Hamburguer button */}
      <button 
        onClick={handleToggleMenu}
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-white bg-orange-500 hover:bg-orange-600 focus:ring-orange-300 dark:focus:ring-orange-700"
        aria-controls="navbar-default"
        aria-expanded={isMenuOpen ? "true" : "false"}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
      </button>

      <nav className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
        <ul className="text-xl flex flex-col font-medium p-4 md:p-0 mt-4 border border-orange-200 rounded-lg bg-orange-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-orange-700">
          <li>
            <Link to="/"  aria-label="Go to the homepage" className="font-poppins block py-2 px-3 text-white bg-orange-500 rounded-sm md:bg-transparent md:text-orange-500 md:p-0 dark:text-white dark:bg-orange-500 md:dark:bg-transparent">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" aria-label="Learn more about me" className="font-poppins block py-2 px-3 text-black rounded-sm hover:bg-orange-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-orange-800 md:dark:hover:bg-transparent">
              About
            </Link>
          </li>
          <li>
            <Link to="/experience"aria-label="My professional experience" className="font-poppins block py-2 px-3 text-black rounded-sm hover:bg-orange-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-orange-800 md:dark:hover:bg-transparent">
              Experience
            </Link>
          </li>
          <li>
            <Link to="/projects" aria-label="My personal projects" className="font-poppins block py-2 px-3 text-black rounded-sm hover:bg-orange-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-orange-800 md:dark:hover:bg-transparent">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/resume" aria-label="Read my resume" className="font-poppins block py-2 px-3 text-black rounded-sm hover:bg-orange-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-orange-800 md:dark:hover:bg-transparent">
              Resume
            </Link>
          </li>
          <li>
            <Link to="blogs" aria-label="Go to my blogs" className="font-poppins block py-2 px-3 text-black rounded-sm hover:bg-orange-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-orange-800 md:dark:hover:bg-transparent">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>

      <div>

      {/* Botão de Toggle do Tema */}
      <button
        onClick={toggleTheme}
        className="text-gray-700 dark:text-gray-200 hover:text-indigo-800 dark:hover:text-white focus:outline-none transition-colors duration-300"
      >
        {isDarkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>
      </div>
    </header>
  )
}