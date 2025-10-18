import type { ComponentType } from 'react'
import { useTranslations } from '@/i18n/I18nProvider'
import {
  BadgeCheck,
  Bot,
  Coffee,
  Flag,
  Github,
  Sparkles,
  Terminal,
} from 'lucide-react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { ImageWithFallback } from './ui/ImageWithFallback'
import computerScreenCode from '@/assets/computer-screen-code.jpg'

export function Projects() {
  const { projects } = useTranslations()
  const { featured } = projects

  const iconComponents: Record<string, ComponentType<{ className?: string }>> = {
    coffee: Coffee,
    flag: Flag,
    sparkles: Sparkles,
    terminal: Terminal,
    bot: Bot,
    'badge-check': BadgeCheck,
  }

  const projectImages: Record<string, string> = {
    'computer-screen-code.jpg': computerScreenCode,
  }
  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            {projects.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {projects.description}
          </p>
        </div>

        {/* Featured Project */}

        {/* <Card className="mb-16 overflow-hidden border-2 border-teal-200 dark:border-teal-800">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-[4/3] md:aspect-auto">
              <ImageWithFallback
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-teal-600 text-white">
                  {projects.featuredBadge}
                </Badge>
              </div>
            </div>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-medium mb-2">{featured.title}</h3>
                  <p className="text-muted-foreground mb-3">
                    {featured.description}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {featured.longDescription}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {featured.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {featured.liveUrl && (
                    <Button asChild>
                      <a
                        href={featured.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {projects.buttons.liveDemo}
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" asChild>
                    <a
                      href={featured.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      {projects.buttons.code}
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </div>

          <div className="border-t">
            <Tabs defaultValue="overview" className="p-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">
                  {featured.tabs.labels.overview}
                </TabsTrigger>
                <TabsTrigger value="architecture">
                  {featured.tabs.labels.architecture}
                </TabsTrigger>
                <TabsTrigger value="data">
                  {featured.tabs.labels.data}
                </TabsTrigger>
                <TabsTrigger value="ai">
                  {featured.tabs.labels.ai}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium mb-4">
                      {featured.tabs.overview.keyFeaturesTitle}
                    </h4>
                    <ul className="space-y-2">
                      {featured.tabs.overview.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <Zap className="h-4 w-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-4">
                      {featured.tabs.overview.projectMetricsTitle}
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {featured.tabs.overview.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-medium text-teal-600 dark:text-teal-400">
                            {metric.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="architecture" className="mt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium mb-4">
                      {featured.tabs.architecture.frontendTitle}
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {featured.tabs.architecture.frontend.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <h4 className="font-medium mb-4">
                      {featured.tabs.architecture.backendTitle}
                    </h4>
                    <ul className="space-y-2">
                      {featured.tabs.architecture.backend.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-4">
                      {featured.tabs.architecture.infrastructureTitle}
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {featured.tabs.architecture.infrastructure.map(
                        (item, idx) => (
                          <li
                            key={idx}
                            className="text-muted-foreground text-sm"
                          >
                            {item}
                          </li>
                        ),
                      )}
                    </ul>
                    <h4 className="font-medium mb-4">
                      {featured.tabs.architecture.aiTitle}
                    </h4>
                    <ul className="space-y-2">
                      {featured.tabs.architecture.ai.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="data" className="mt-6">
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    {featured.tabs.data.intro}
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    {featured.tabs.data.cards.map((card, idx) => (
                      <Card key={idx}>
                        <CardHeader className="pb-3">
                          <h4 className="font-medium">{card.title}</h4>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                          {card.description}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="ai" className="mt-6">
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    {featured.tabs.ai.intro}
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    {featured.tabs.ai.sections.map((section, idx) => (
                      <div key={idx} className="space-y-4">
                        <h4 className="font-medium">{section.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {section.description}
                        </p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {section.highlights.map((highlight, highlightIdx) => (
                            <li key={highlightIdx}>• {highlight}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </Card> */}

        {/* Other Projects */}
        <div>
          {/* <h3 className="text-2xl font-medium mb-8">
            {projects.otherProjectsTitle}
          </h3> */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.otherProjects.map((project) => {
              const Icon = iconComponents[project.icon ?? 'badge-check'] ?? BadgeCheck
              const imageSrc = project.image
                ? projectImages[project.image] ?? project.image
                : computerScreenCode
              return (
                <Card
                  key={project.title}
                  className="overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <ImageWithFallback
                      src={imageSrc}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <Icon className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-medium">
                        {projects.highlightHeading}
                      </div>
                      {project.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <span className="w-1 h-1 bg-teal-600 dark:bg-teal-400 rounded-full"></span>
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        {projects.buttons.viewCode}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
