interface FooterProps {
  appName: string
  legalEntityName: string
  privacyEmail: string
  country: string
  contactLabel: string
  countryLabel: string
  emailLabel: string
  rightsLabel: string
}

export function Footer({
  appName,
  legalEntityName,
  privacyEmail,
  country,
  contactLabel,
  countryLabel,
  emailLabel,
  rightsLabel,
}: FooterProps) {
  return (
    <footer className="footer">
      <div>
        <h2>{contactLabel}</h2>
        <p>{legalEntityName}</p>
      </div>
      <p>
        {emailLabel}:{' '}
        <a href={`mailto:${privacyEmail}`}>
          {privacyEmail}
        </a>
      </p>
      <p>
        {countryLabel}: {country}
      </p>
      <p>{appName} - {rightsLabel}</p>
    </footer>
  )
}
