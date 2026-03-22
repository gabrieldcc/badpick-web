import type { LanguageCode } from '../i18n'

interface LanguageSwitcherProps {
  currentLanguage: LanguageCode
  languageLabel: string
  onChange: (language: LanguageCode) => void
}

const languageOptions: Array<{ code: LanguageCode; label: string }> = [
  { code: 'pt-BR', label: 'PT-BR' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
]

export function LanguageSwitcher({
  currentLanguage,
  languageLabel,
  onChange,
}: LanguageSwitcherProps) {
  return (
    <label className="language-switcher">
      <span>{languageLabel}</span>
      <select
        value={currentLanguage}
        onChange={(event) => onChange(event.target.value as LanguageCode)}
        aria-label={languageLabel}
      >
        {languageOptions.map((option) => (
          <option key={option.code} value={option.code}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}
