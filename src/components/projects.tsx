import { ExternalLink, Github, Zap, BarChart3, Flag } from 'lucide-react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { ImageWithFallback } from './ui/ImageWithFallback'

export function Projects() {
  const featuredProject = {
    title: 'Specialty Coffee Log',
    description: 'AI-powered tasting insights for coffee lovers.',
    longDescription: 'A comprehensive coffee tracking application that uses machine learning to analyze tasting notes, brewing methods, and personal preferences to provide personalized recommendations.',
    image: 'https://images.unsplash.com/photo-1661246625079-b6a5c6802c46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBhcHAlMjBtb2JpbGUlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5NjU0NDEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'AWS', 'AI/ML'],
    liveUrl: 'https://coffee-log-demo.com',
    githubUrl: 'https://github.com/Pieter-OHearn/global-grounds',
    tabs: {
      overview: {
        features: [
          'Smart coffee bean recommendation engine',
          'Brewing method optimization tracking',
          'Community tasting notes and reviews',
          'Personal flavor profile analysis',
          'Integration with popular coffee roasters'
        ],
        metrics: [
          { label: 'Active Users', value: '12,000+' },
          { label: 'Coffee Reviews', value: '45,000+' },
          { label: 'Avg. Session', value: '8.5 min' },
          { label: 'User Rating', value: '4.8/5' }
        ]
      },
      architecture: {
        frontend: ['Next.js 14 with App Router', 'TypeScript', 'Tailwind CSS', 'React Query', 'Zustand state management'],
        backend: ['NestJS with TypeScript', 'PostgreSQL with Prisma ORM', 'Redis for caching', 'JWT authentication', 'Rate limiting & validation'],
        infrastructure: ['AWS ECS for containerized deployment', 'RDS for PostgreSQL', 'ElastiCache for Redis', 'CloudFront CDN', 'Route 53 DNS'],
        ai: ['OpenAI GPT-4 for tasting note analysis', 'Custom ML model for flavor profiling', 'Vector embeddings for similarity search', 'Real-time recommendation engine']
      }
    }
  }

  const otherProjects = [
    {
      title: 'API Cost Dashboard',
      description: 'Real-time monitoring and cost optimization for microservices APIs with predictive analytics.',
      image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU5NTgyMTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React', 'D3.js', 'Node.js', 'InfluxDB', 'Docker'],
      githubUrl: 'https://github.com/Pieter-OHearn/api-cost-dashboard',
      highlights: ['40% cost reduction', '99.9% uptime monitoring', 'Automated alerts']
    },
    {
      title: 'Minimal Feature Flags',
      description: 'Lightweight, developer-friendly feature flag service with zero-downtime deployments.',
      image: 'https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBzZXR1cHxlbnwxfHx8fDE3NTk2NTQ0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Go', 'Redis', 'React', 'WebSockets', 'Kubernetes'],
      githubUrl: 'https://github.com/Pieter-OHearn/minimal-feature-flags',
      highlights: ['<1ms response time', 'Real-time updates', 'Team collaboration']
    }
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A selection of projects that showcase my technical expertise and problem-solving approach.
            Each project demonstrates different aspects of full-stack development and system architecture.
          </p>
        </div>

        {/* Featured Project */}

        <Card className="mb-16 overflow-hidden border-2 border-teal-200 dark:border-teal-800">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-[4/3] md:aspect-auto">
              <ImageWithFallback
                src={featuredProject.image}
                alt={featuredProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-teal-600 text-white">Featured Project</Badge>
              </div>
            </div>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-medium mb-2">{featuredProject.title}</h3>
                  <p className="text-muted-foreground mb-4">{featuredProject.longDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button asChild>
                    <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </div>
          
          {/* Project Details Tabs */}
          <div className="border-t">
            <Tabs defaultValue="overview" className="p-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="architecture">Architecture</TabsTrigger>
                <TabsTrigger value="data">Data Flow</TabsTrigger>
                <TabsTrigger value="ai">AI Features</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      {featuredProject.tabs.overview.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <Zap className="h-4 w-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-4">Project Metrics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {featuredProject.tabs.overview.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-medium text-teal-600 dark:text-teal-400">{metric.value}</div>
                          <div className="text-sm text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="architecture" className="mt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium mb-4">Frontend</h4>
                    <ul className="space-y-2 mb-6">
                      {featuredProject.tabs.architecture.frontend.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm">{item}</li>
                      ))}
                    </ul>
                    <h4 className="font-medium mb-4">Backend</h4>
                    <ul className="space-y-2">
                      {featuredProject.tabs.architecture.backend.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm">{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-4">Infrastructure</h4>
                    <ul className="space-y-2 mb-6">
                      {featuredProject.tabs.architecture.infrastructure.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm">{item}</li>
                      ))}
                    </ul>
                    <h4 className="font-medium mb-4">AI/ML Stack</h4>
                    <ul className="space-y-2">
                      {featuredProject.tabs.architecture.ai.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="data" className="mt-6">
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    The application follows a microservices architecture with event-driven communication between services.
                    Data flows through a robust pipeline designed for scalability and real-time processing.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader className="pb-3">
                        <h4 className="font-medium">Data Ingestion</h4>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground">
                        User inputs and external coffee data are processed through validation layers and stored in PostgreSQL with automatic backup to S3.
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-3">
                        <h4 className="font-medium">Processing</h4>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground">
                        Background jobs analyze tasting notes using NLP, generate flavor profiles, and update recommendation models in real-time.
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-3">
                        <h4 className="font-medium">Delivery</h4>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground">
                        Processed insights are cached in Redis and delivered through optimized APIs with sub-100ms response times.
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="ai" className="mt-6">
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    Advanced AI features power the core recommendation engine and provide personalized insights 
                    that help users discover new coffee experiences tailored to their preferences.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-medium">Recommendation Engine</h4>
                      <p className="text-sm text-muted-foreground">
                        Uses collaborative filtering combined with content-based recommendations to suggest 
                        coffee beans, brewing methods, and flavor combinations.
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Cosine similarity for user preferences</li>
                        <li>• Matrix factorization for sparse data</li>
                        <li>• Real-time model updates</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">Natural Language Processing</h4>
                      <p className="text-sm text-muted-foreground">
                        Analyzes user-generated tasting notes to extract flavor profiles and 
                        brewing insights using state-of-the-art language models.
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Sentiment analysis on reviews</li>
                        <li>• Named entity recognition for flavors</li>
                        <li>• Automatic tagging and categorization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </Card>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-medium mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      {index === 0 ? <BarChart3 className="h-5 w-5 text-teal-600 dark:text-teal-400" /> : <Flag className="h-5 w-5 text-teal-600 dark:text-teal-400" />}
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Key Achievements:</div>
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 bg-teal-600 dark:bg-teal-400 rounded-full"></span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}