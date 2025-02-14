import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-white text-black dark:bg-black dark:text-white">
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
          <li><a href="/" aria-label="Go to the homepage" className="font-poppins block py-2 px-3 text-white bg-orange-500 rounded-sm md:bg-transparent md:text-orange-500 md:p-0 dark:text-white dark:bg-orange-500 md:dark:bg-transparent">Home</a></li>
          <li><a href="/about" aria-label="Learn more about me" className="font-poppins block py-2 px-3 text-black rounded-sm hover:bg-orange-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-orange-800 md:dark:hover:bg-transparent">About</a></li>
          <li><a href="/experience" aria-label="My professional experience" className="font-poppins block py-2 px-3 text-black rounded-sm hover:bg-orange-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-orange-800 md:dark:hover:bg-transparent">Experience</a></li>
          <li><a href="/projects" aria-label="My personal projects" className="font-poppins block py-2 px-3 text-black rounded-sm hover:bg-orange-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-orange-800 md:dark:hover:bg-transparent">Projects</a></li>
          <li><a href="/resume" aria-label="Read my resume" className="font-poppins block py-2 px-3 text-black rounded-sm hover:bg-orange-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-orange-800 md:dark:hover:bg-transparent">Resume</a></li>
          <li><a href="/blog" aria-label="Go to my blogs" className="font-poppins block py-2 px-3 text-black rounded-sm hover:bg-orange-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-orange-800 md:dark:hover:bg-transparent">Blogs</a></li>
        </ul>
      </nav>
    </header>
  )
}