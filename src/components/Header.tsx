import type { LanguageCode } from '../i18n'
import { LanguageSwitcher } from './LanguageSwitcher'

interface HeaderProps {
  appName: string
  language: LanguageCode
  languageLabel: string
  onLanguageChange: (language: LanguageCode) => void
}

export function Header({
  appName,
  language,
  languageLabel,
  onLanguageChange,
}: HeaderProps) {
  return (
    <header className="header" id="top">
      <div className="brand-block">
        <p className="brand-eyebrow">Privacy</p>
        <strong>{appName}</strong>
      </div>
      <LanguageSwitcher
        currentLanguage={language}
        languageLabel={languageLabel}
        onChange={onLanguageChange}
      />
    </header>
  )
}
