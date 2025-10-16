import { ThemeProvider } from './components/theme-provider'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { About } from './components/about'
import { Projects } from './components/projects'
import { Contact } from './components/contact'
import { Footer } from './components/footer'

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          {/* <Projects /> */}
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}