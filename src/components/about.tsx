import { Calendar, MapPin, Award, Download } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useTranslations } from '@/i18n/I18nProvider'

export function About() {
  const { about } = useTranslations()

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">{about.title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {about.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Skills */}
          <div>
            <h3 className="text-xl font-medium mb-6">{about.skillsTitle}</h3>
            <div className="space-y-6">
              {Object.entries(about.skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="font-medium mb-3 text-teal-600 dark:text-teal-400">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="text-xl font-medium mb-6">{about.educationTitle}</h3>
            <div className="space-y-6">
              {about.education.map((item, index) => (
                <Card key={`${item.title}-${index}`}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-1" />
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.institution}</p>
                        <p className="text-sm text-muted-foreground">{item.period}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button variant="outline" className="mt-6" asChild>
              <a href="/Pieter-OHearn-CV.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                {about.cta.label}
              </a>
            </Button>
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h3 className="text-xl font-medium mb-8">{about.experienceTitle}</h3>
          <div className="space-y-8">
            {about.experience.map((exp, index) => (
              <Card key={`${exp.company}-${index}`} className="relative">
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
