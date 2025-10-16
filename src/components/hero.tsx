import { ArrowDown, Download, Github } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <Badge variant="outline" className="bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950 dark:text-teal-300 dark:border-teal-800">
            Available for new opportunities
          </Badge>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight">
            Pieter O'Hearn
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground">
            Senior Full-Stack Software Engineer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I build reliable products end-to-end, from clean APIs to crisp UIs. 
            Passionate about creating scalable solutions that users love.
          </p>
        </div>

        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={scrollToProjects}
            className="bg-teal-600 hover:bg-teal-700 text-white"
          >
            View Projects
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/Pieter-OHearn-CV.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
        </div> */}

        <div className="pt-8">
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {['TypeScript', 'React', 'Node.js', 'Spring', 'AWS', 'PostgreSQL', 'Docker', 'Digital Identity'].map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}