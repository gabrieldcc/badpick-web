interface SectionLink {
  id: string
  title: string
}

interface TableOfContentsProps {
  title: string
  sections: SectionLink[]
}

export function TableOfContents({ title, sections }: TableOfContentsProps) {
  return (
    <nav className="toc" aria-label={title}>
      <h2>{title}</h2>
      <ol>
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`}>{section.title}</a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
