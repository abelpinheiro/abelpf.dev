export default function Header() {
  return (
    <header className="flex justify-between p-4">
      <div className="logo">
        <h1>abelpf.dev</h1>
      </div>
      <nav className="nav ml-auto">
        <ul className="flex space-x-4">
          <li><a href="/" aria-label="Go to the homepage">Home</a></li>
          <li><a href="/about" aria-label="Learn more about me">About</a></li>
          <li><a href="/experience" aria-label="My professional experience">Experience</a></li>
          <li><a href="/projects" aria-label="My personal projects">Projects</a></li>
          <li><a href="/resume" aria-label="Read my resume">Resume</a></li>
          <li><a href="/blog" aria-label="Go to my blogs">Blogs</a></li>
        </ul>
      </nav>
    </header>
  )
}
