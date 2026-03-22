import type { ContentBlock } from '../i18n/translations'

interface PolicySectionProps {
  id: string
  title: string
  subtitle?: string
  blocks: ContentBlock[]
}

export function PolicySection({ id, title, subtitle, blocks }: PolicySectionProps) {
  return (
    <section id={id} className="policy-section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}

      {blocks.map((block, index) => {
        if (block.type === 'list') {
          return (
            <ul key={`${id}-${index}`}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )
        }

        if (block.type === 'notice') {
          return (
            <p key={`${id}-${index}`} className="policy-notice" role="note">
              {block.text}
            </p>
          )
        }

        return <p key={`${id}-${index}`}>{block.text}</p>
      })}
    </section>
  )
}
