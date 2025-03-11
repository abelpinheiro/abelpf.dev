import { cn } from "../lib/utils";

export function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-16">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-center">
            <div className="inline-block animate-fade-in">
              <div className="px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground mb-6">
                Software Developer
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-slide-in-bottom">
              Creating <span className="text-primary">cool things</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-in-bottom [animation-delay:200ms]">
            I'm a software engineer passionate about designing scalable systems, crafting high-quality software, and exploring the intersection of technology, science, and engineering.            </p>
            <div className="pt-4 flex justify-center gap-4 animate-slide-in-bottom [animation-delay:400ms]">
              <a
                href="#projects"
                className={cn(
                  "inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors",
                  "hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20"
                )}
              >
                View My Work
              </a>
              <a
                href="#contact"
                className={cn(
                  "inline-flex h-11 items-center justify-center rounded-md border border-input bg-transparent px-8 text-sm font-medium shadow-sm transition-colors",
                  "hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/20"
                )}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
