import { cn } from "@/lib/utils";

export default function AboutSection() {
  const skills = [
    "C#", ".NET", "Java", "Spring",
    "SQL", "AWS", "Redis", "Docker", 
    "CI/CD", "RabbitMQ", "Elasticsearch"
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            Here you'll find more information about me, what I do, and my current skills in terms of programming and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-4">Get to know me!</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                As a <strong>Backend Developer</strong> and <strong>Computer Engineer</strong>, I specialize in architecting robust and efficient systems with .NET maintaining several projects. My approach to software is deeply influenced by my passion for complex problem-solving, which I'm currently exploring further through a Master's degree in <strong>Autonomous Robotics</strong>.
              </p>
              <p>
                I'm open to <strong>Job opportunities</strong> where I can contribute, learn, and grow. If you have an opportunity that matches my skills and experience, don't hesitate to <strong>contact me</strong>.  
              </p>
              <p>
                I thrive on bringing ideas to life, whether it's a personal electronics project or a large-scale distributed system. Outside of technology, my interests are diverse: I enjoy playing the violin, going to the gym, and studying math or physics.
              </p>
            </div>
            <div className="pt-4">
              <a 
                href="#contact" 
                className={cn(
                  "inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors",
                  "hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20"
                )}
              >
                Contact Me
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-background rounded-md text-sm font-medium border border-border/50 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
