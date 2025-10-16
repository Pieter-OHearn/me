import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Handle for submit
    // Reset form
    setFormData({ name: '', email: '', message: '' })
    alert('Thanks for your message! I\'ll get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having 
            a conversation about technology and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-teal-100 dark:bg-teal-900 rounded-lg">
                        <Mail className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                      </div>
                      <div>
                        <div className="font-medium">Email</div>
                        <a 
                          href="mailto:pieter.ohearn@gmail.com" 
                          className="text-teal-600 dark:text-teal-400 hover:underline"
                        >
                          pieter.ohearn@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-teal-100 dark:bg-teal-900 rounded-lg">
                        <Github className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                      </div>
                      <div>
                        <div className="font-medium">GitHub</div>
                        <a 
                          href="https://github.com/Pieter-OHearn"
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-teal-600 dark:text-teal-400 hover:underline"
                        >
                          github.com/Pieter-OHearn
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-teal-100 dark:bg-teal-900 rounded-lg">
                        <Linkedin className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                      </div>
                      <div>
                        <div className="font-medium">LinkedIn</div>
                        <a 
                          href="https://linkedin.com/in/pieter-o-hearn" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-teal-600 dark:text-teal-400 hover:underline"
                        >
                          linkedin.com/in/pieter-o-hearn
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-teal-100 dark:bg-teal-900 rounded-lg">
                        <MapPin className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                      </div>
                      <div>
                        <div className="font-medium">Location</div>
                        <div className="text-muted-foreground">Amsterdam, Netherlands</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Currently Open To</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Full-Stack Engineer roles
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  Freelance/Consulting projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Open source collaborations
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-1"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}