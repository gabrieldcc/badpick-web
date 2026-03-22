interface BackToTopButtonProps {
  label: string
}

export function BackToTopButton({ label }: BackToTopButtonProps) {
  return (
    <a className="back-to-top" href="#top">
      {label}
    </a>
  )
}
