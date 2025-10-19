import { ThemeProvider } from './components/theme-provider'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { About } from './components/about'
import { Projects } from './components/projects'
import { Contact } from './components/contact'
import { Footer } from './components/footer'
import { I18nProvider } from './i18n/I18nProvider'

export default function App() {
  return (
    <I18nProvider>
      <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </I18nProvider>
  )
}
