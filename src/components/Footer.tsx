export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-8 px-4"
      style={{
        backgroundColor: 'var(--color-dark)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
          &copy; {year} Daiana Dominguez
        </p>
      </div>
    </footer>
  )
}
