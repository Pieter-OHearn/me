import {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
  type ReactNode,
} from 'react'
import en from './locales/en.json'
import nl from './locales/nl.json'
import de from './locales/de.json'
import fr from './locales/fr.json'
import es from './locales/es.json'

const dictionaries = {
  en,
  nl,
  de,
  fr,
  es,
} as const

export type Locale = keyof typeof dictionaries
export type Translations = typeof dictionaries.en
export const supportedLocales = Object.keys(dictionaries) as Locale[]

type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  translations: Translations
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined)

type I18nProviderProps = {
  children: ReactNode
  defaultLocale?: Locale
}

export function I18nProvider({
  children,
  defaultLocale = 'en',
}: I18nProviderProps) {
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (defaultLocale !== 'en') return
    if (locale !== defaultLocale) return

    const preferences =
      window.navigator.languages && window.navigator.languages.length > 0
        ? window.navigator.languages
        : [window.navigator.language]

    for (const candidate of preferences) {
      if (!candidate) continue
      const normalized = candidate.split('-')[0] as Locale
      if (normalized && normalized in dictionaries && normalized !== locale) {
        setLocale(normalized)
        break
      }
    }
  }, [defaultLocale, locale])

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      translations: dictionaries[locale],
    }),
    [locale],
  )

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)

  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }

  return context
}

export function useTranslations() {
  const { translations } = useI18n()
  return translations
}

export type { Locale, Translations }
