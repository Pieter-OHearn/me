import { Coffee, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} Pieter OHearn</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="h-4 w-4 text-red-500 fill-current" aria-hidden />
              and an irresponsible amount of
              <Coffee className="h-4 w-4" aria-label="coffee" />
            </span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            {/* <a 
              href="/privacy" 
              className="hover:text-foreground transition-colors"
            >
              Privacy
            </a>
            <a 
              href="/terms" 
              className="hover:text-foreground transition-colors"
            >
              Terms
            </a> */}
            <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">
              Available for hire
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}