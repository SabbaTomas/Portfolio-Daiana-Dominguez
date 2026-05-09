import { photos } from '../data/photography'

export default function PhotographyGallery() {
  if (photos.length === 0) {
    return (
      <div
        className="rounded-xl border-2 border-dashed p-12 text-center"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          Agregá tus fotos en <code className="text-xs opacity-70">public/images/photography/</code> y completá los datos en{' '}
          <code className="text-xs opacity-70">src/data/photography.ts</code>
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {photos.map((photo) => (
        <a
          key={photo.id}
          href={photo.src}
          target="_blank"
          rel="noopener noreferrer"
          className="group aspect-square rounded-lg overflow-hidden border transition-transform hover:scale-[1.02]"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              const target = e.currentTarget
              target.style.display = 'none'
              const parent = target.parentElement
              if (parent) {
                parent.style.display = 'flex'
                parent.style.alignItems = 'center'
                parent.style.justifyContent = 'center'
                parent.style.backgroundColor = 'var(--color-bg)'
                parent.innerHTML = '<span style="color: var(--color-text-secondary); font-size: 0.75rem;">Sin imagen</span>'
              }
            }}
          />
        </a>
      ))}
    </div>
  )
}
