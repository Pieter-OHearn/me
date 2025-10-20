import { Github, Linkedin, Mail, Moon, Sun } from 'lucide-react'
import { useTheme } from './theme-provider'
import { Button } from './ui/button'
import { useTranslations } from '@/i18n/I18nProvider'
import { Logo } from './logo'

const socialIcons = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
} as const

export function Header() {
  const { theme, setTheme } = useTheme()
  const { header } = useTranslations()

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 font-medium">
            <Logo className="h-8 w-8 text-teal-600 dark:text-teal-400" />
            <span>{header.logo}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {header.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {header.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {header.nav.contact}
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2">
            {header.socialLinks.map(({ type, href }) => {
              const Icon =
                socialIcons[type as keyof typeof socialIcons] ?? socialIcons.email
              const ariaLabel =
                header.ariaLabels[type as keyof typeof header.ariaLabels] ?? type
              const externalProps =
                type === 'email'
                  ? {}
                  : { target: '_blank', rel: 'noopener noreferrer' as const }

              return (
                <Button variant="ghost" size="sm" asChild key={type}>
                  <a href={href} aria-label={ariaLabel} {...externalProps}>
                    <Icon className="h-4 w-4" />
                  </a>
                </Button>
              )
            })}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label={header.ariaLabels.themeToggle}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>
    </header>
  )
}
