import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { useTranslations } from '@/i18n/I18nProvider'

const methodIcons = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
  location: MapPin,
} as const

const availabilityColors: Record<string, string> = {
  available: 'bg-green-500',
  limited: 'bg-yellow-500',
}

export function Contact() {
  const { contact } = useTranslations()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const emailRecipient =
    contact.contactMethods.find((method) => method.type === 'email')?.value ??
    'pieter.ohearn@gmail.com'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const sanitized = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    }

    const fillTemplate = (template: string) =>
      template
        .replace(/{{name}}/g, sanitized.name)
        .replace(/{{email}}/g, sanitized.email)
        .replace(/{{message}}/g, sanitized.message)

    const subject = encodeURIComponent(
      fillTemplate(contact.form.subjectTemplate),
    )
    const body = encodeURIComponent(fillTemplate(contact.form.bodyTemplate))

    window.location.href = `mailto:${emailRecipient}?subject=${subject}&body=${body}`

    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            {contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {contact.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-6">{contact.infoHeading}</h3>
              <div className="space-y-4">
                {contact.contactMethods.map((method) => {
                  const Icon =
                    methodIcons[method.type as keyof typeof methodIcons] ?? Mail

                  return (
                    <Card key={method.type}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-teal-100 dark:bg-teal-900 rounded-lg">
                            <Icon className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                          </div>
                          <div>
                            <div className="font-medium">{method.label}</div>
                            {method.href ? (
                              <a
                                href={method.href}
                                target={
                                  method.type === 'email' ? undefined : '_blank'
                                }
                                rel={
                                  method.type === 'email'
                                    ? undefined
                                    : 'noopener noreferrer'
                                }
                                className="text-teal-600 dark:text-teal-400 hover:underline"
                              >
                                {method.value}
                              </a>
                            ) : (
                              <div className="text-muted-foreground">
                                {method.value}
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">{contact.openToHeading}</h4>
              <ul className="space-y-2 text-muted-foreground">
                {contact.openTo.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${availabilityColors[item.status] ?? 'bg-green-500'}`}
                    ></span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-6">{contact.form.title}</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">{contact.form.nameLabel}</Label>
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
                  <Label htmlFor="email">{contact.form.emailLabel}</Label>
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
                  <Label htmlFor="message">{contact.form.messageLabel}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-1"
                    placeholder={contact.form.messagePlaceholder}
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  {contact.form.submit}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
