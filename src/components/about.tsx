import { Calendar, MapPin, Award, Download } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

export function About() {
  const experiences = [
    {
      title: 'Senior Full-Stack Engineer',
      company: 'Datakeeper',
      period: '2024 - Present',
      location: 'Utrecht, Netherlands',
      highlights: [
        'Develop and maintain native app frameworks, SDKs, and backend systems for a digital ID wallet platform.',
        'Build scalable, secure solutions ensuring seamless integration between Angular mobile apps and backend services.',
        'Uphold strong privacy and security standards, delivering a reliable, user-centric identity experience.',
      ]
    },
    {
      title: 'Senior Full-Stack Engineer',
      company: 'Service NSW',
      period: '2023 - 2024',
      location: 'Sydney, Australia',
      highlights: [
        'Led mobile development for the Service NSW app, serving 4M+ users across iOS and Android.',
        'Delivered new features, including a digital government inbox and seamless native transaction experiences.',
        'Maintained high security and privacy standards, ensuring compliance with WCAG 2.1 accessibility guidelines.',
      ]
    },
    {
      title: 'Full-Stack Developer',
      company: 'Service NSW',
      period: '2022 - 2023',
      location: 'Sydney, Australia',
      highlights: [
        'Designed a phased migration strategy, enabling smooth, low-risk transition to microservices.',
        'Implemented observability and monitoring, reducing incidents and improving API performance by up to 60%.',
        'Enhanced system scalability and developer velocity, supporting faster feature delivery and easier maintenance.',
      ]
    },
    {
      title: 'Junior Full-Stack Developer',
      company: 'Service NSW',
      period: '2021 - 2022',
      location: 'Sydney, Australia',
      highlights: [
        'Built and optimised REST APIs for a high-traffic notifications platform, ensuring reliability and scalability.',
        'Worked with cross-functional teams to deliver smooth integrations between backend services and frontend interfaces.',
        'Improved frontend performance and accessibility, achieving faster load times and better UX scores.',
      ]
    }
  ]

  const skills: Record<string, string[]> = {
    "Frontend": ["TypeScript", "React", "React Native","Angular", "Ionic"],
    "Backend": ["Java", "Spring Boot", "Node.js", "Kotlin", "Microservices"],
    "Database": [ "MongoDB", "SQL", "Redis", "DynamoDB"],
    "Cloud & DevOps": [ "AWS", "CI/CD", "Docker", "OpenTelemetry"],
    "Tools & Other": [ "Digital Identity", "Verifiable Credentials", "OAuth2 / OpenID Connect", "WCAG 2.2 AA"]
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With over 5 years of experience, I specialise in building scalable web applications 
            and leading technical initiatives that drive business growth. I'm passionate about 
            clean code, user experience, and mentoring the next generation of developers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Skills */}
          <div>
            <h3 className="text-xl font-medium mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="font-medium mb-3 text-teal-600 dark:text-teal-400">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="text-xl font-medium mb-6">Education & Certifications</h3>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-1" />
                    <div>
                      <h4 className="font-medium">Bachelor of Science, Computer Science</h4>
                      <p className="text-sm text-muted-foreground">University of Sydney, Australia</p>
                      <p className="text-sm text-muted-foreground">2016 - 2022</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-1" />
                    <div>
                      <h4 className="font-medium">Bachelor of Engineering Honours, Software Engineering</h4>
                      <p className="text-sm text-muted-foreground">University of Sydney, Australia</p>
                      <p className="text-sm text-muted-foreground">2017 - 2022</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button variant="outline" className="mt-6" asChild>
              <a href="/Pieter-OHearn-CV.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Full CV
              </a>
            </Button>
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h3 className="text-xl font-medium mb-8">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h4 className="font-medium text-lg">{exp.title}</h4>
                      <p className="text-teal-600 dark:text-teal-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}