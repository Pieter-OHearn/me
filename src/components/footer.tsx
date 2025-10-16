import { Coffee, Heart } from 'lucide-react'
import { useI18n, useTranslations, supportedLocales } from '@/i18n/I18nProvider'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { footer, header } = useTranslations()
  const { locale, setLocale } = useI18n()

  const localeLabels: Record<string, string> = {
    en: 'English',
    nl: 'Nederlands',
    de: 'Deutsch',
    fr: 'Français',
    es: 'Español',
  }

  return (
    <footer className="border-t bg-background">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} {header.logo}</span>
            <span className="hidden lg:flex">•</span>
            <span className="hidden lg:flex items-center gap-1">
              {footer.builtWith}{' '}
              <Heart
                className="h-4 w-4 text-red-500 fill-current"
                aria-hidden
              />
              {footer.and} {footer.coffeePhrase}{' '}
              <Coffee className="h-4 w-4" aria-label={footer.coffee} />
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">
                {footer.availability}
              </span>
              <select
                id="locale-select"
                value={locale}
                onChange={(event) => setLocale(event.target.value as typeof locale)}
                className="h-8 rounded-md border border-input bg-transparent px-2 text-sm text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-ring"
                aria-label={footer.languageLabel}
              >
                {supportedLocales.map((code) => (
                  <option key={code} value={code}>
                    {localeLabels[code] ?? code.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
