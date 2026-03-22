import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { BackToTopButton } from './components/BackToTopButton'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { PolicySection } from './components/PolicySection'
import { TableOfContents } from './components/TableOfContents'
import { SITE_CONFIG } from './config/site'
import {
  getInitialLanguage,
  persistLanguage,
  resolveTranslation,
  type LanguageCode,
} from './i18n'

function App() {
  const [language, setLanguage] = useState<LanguageCode>(() => getInitialLanguage())
  const content = useMemo(() => resolveTranslation(language), [language])

  useEffect(() => {
    persistLanguage(language)
  }, [language])

  useEffect(() => {
    document.title = content.seoTitle

    const metaDescription =
      document.querySelector<HTMLMetaElement>('meta[name="description"]') ??
      document.createElement('meta')

    metaDescription.name = 'description'
    metaDescription.content = content.seoDescription

    if (!metaDescription.parentNode) {
      document.head.appendChild(metaDescription)
    }

    document.documentElement.lang = content.htmlLang
  }, [content])

  return (
    <div className="app-shell">
      <Header
        appName={SITE_CONFIG.appName}
        language={language}
        languageLabel={content.ui.languageLabel}
        onLanguageChange={setLanguage}
      />

      <main className="main-layout">
        <section className="hero-card" aria-labelledby="policy-title">
          <h1 id="policy-title">{content.hero.title}</h1>
          <p>{content.hero.subtitle}</p>
          <p className="last-updated">
            {content.ui.lastUpdatedLabel}: <strong>{SITE_CONFIG.lastUpdated}</strong>
          </p>
        </section>

        <div className="content-grid">
          <TableOfContents
            title={content.ui.tocTitle}
            sections={content.policySections.map((section) => ({
              id: section.id,
              title: section.title,
            }))}
          />

          <div className="policy-content">
            {content.policySections.map((section) => (
              <PolicySection
                key={section.id}
                id={section.id}
                title={section.title}
                subtitle={section.subtitle}
                blocks={section.blocks}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer
        appName={SITE_CONFIG.appName}
        legalEntityName={SITE_CONFIG.legalEntityName}
        privacyEmail={SITE_CONFIG.privacyEmail}
        country={SITE_CONFIG.country}
        contactLabel={content.ui.contactLabel}
        countryLabel={content.ui.countryLabel}
        emailLabel={content.ui.emailLabel}
        rightsLabel={content.ui.footerRights}
      />

      <BackToTopButton label={content.ui.backToTop} />
    </div>
  )
}

export default App
