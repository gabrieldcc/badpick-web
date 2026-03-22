import { SITE_CONFIG } from '../config/site'
import { translations, type LanguageCode, type TranslationContent } from './translations'

const STORAGE_KEY = 'privacy-site-language'
const SUPPORTED_LANGUAGES: LanguageCode[] = ['pt-BR', 'en', 'es']

const normalizeBrowserLanguage = (language: string): LanguageCode | null => {
  const value = language.toLowerCase()

  if (value.startsWith('pt')) {
    return 'pt-BR'
  }

  if (value.startsWith('es')) {
    return 'es'
  }

  if (value.startsWith('en')) {
    return 'en'
  }

  return null
}

export const getInitialLanguage = (): LanguageCode => {
  const stored = localStorage.getItem(STORAGE_KEY)

  if (stored && SUPPORTED_LANGUAGES.includes(stored as LanguageCode)) {
    return stored as LanguageCode
  }

  const browserLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language]

  for (const browserLanguage of browserLanguages) {
    const mapped = normalizeBrowserLanguage(browserLanguage)

    if (mapped) {
      return mapped
    }
  }

  return 'en'
}

export const persistLanguage = (language: LanguageCode): void => {
  localStorage.setItem(STORAGE_KEY, language)
}

const replacePlaceholders = (text: string): string =>
  text
    .replaceAll('{appName}', SITE_CONFIG.appName)
    .replaceAll('{legalEntityName}', SITE_CONFIG.legalEntityName)
    .replaceAll('{privacyEmail}', SITE_CONFIG.privacyEmail)
    .replaceAll('{country}', SITE_CONFIG.country)

export const resolveTranslation = (language: LanguageCode): TranslationContent => {
  const source = translations[language]

  return {
    ...source,
    seoTitle: replacePlaceholders(source.seoTitle),
    seoDescription: replacePlaceholders(source.seoDescription),
    hero: {
      ...source.hero,
      title: replacePlaceholders(source.hero.title),
      subtitle: replacePlaceholders(source.hero.subtitle),
    },
    policySections: source.policySections.map((section) => ({
      ...section,
      title: replacePlaceholders(section.title),
      subtitle: section.subtitle ? replacePlaceholders(section.subtitle) : undefined,
      blocks: section.blocks.map((block) => {
        if (block.type === 'list') {
          return {
            ...block,
            items: block.items.map(replacePlaceholders),
          }
        }

        return {
          ...block,
          text: replacePlaceholders(block.text),
        }
      }),
    })),
  }
}

export { STORAGE_KEY, SUPPORTED_LANGUAGES }
export type { LanguageCode }
