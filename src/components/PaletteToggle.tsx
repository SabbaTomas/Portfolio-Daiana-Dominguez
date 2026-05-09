import { palettes } from '../data/palettes'
import type { ThemeId } from '../types'

interface Props {
  currentTheme: ThemeId
  onChange: (theme: ThemeId) => void
}

export default function PaletteToggle({ currentTheme, onChange }: Props) {
  return (
    <div className="flex gap-2">
      {palettes.map((p) => (
        <button
          key={p.id}
          onClick={() => onChange(p.id as ThemeId)}
          className="w-7 h-7 rounded-full border-2 transition-transform hover:scale-110"
          style={{
            backgroundColor: p.colors['--color-primary'],
            borderColor: currentTheme === p.id ? 'var(--color-text)' : 'transparent',
          }}
          title={p.name}
          aria-label={`Cambiar a tema ${p.name}`}
        />
      ))}
    </div>
  )
}
