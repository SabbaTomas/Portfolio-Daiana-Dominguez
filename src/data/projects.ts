import type { Project } from '../types'

const filmDir = '/images/films'
const docDir = '/images/documentaries'

export const projects: Project[] = [
  {
    id: 'matar-al-cuco',
    title: 'Matar al Cuco',
    category: 'films',
    youtubeId: 'zllUsSke4xc',
    description: 'Largometraje de ficción.',
    year: '2024',
    role: 'Dirección de Fotografía',
    frames: Array.from({ length: 9 }, (_, i) =>
      `${filmDir}/matar-al-cuco/matar-al-cuco-${String(i + 1).padStart(2, '0')}.png`
    ),
    thumbnail: `${filmDir}/matar-al-cuco/matar-al-cuco-thumb.png`,
  },
  {
    id: 'vista-al-lago',
    title: 'Vista al Lago',
    category: 'films',
    youtubeId: 't4m-nWNq-Q0',
    description: 'Largometraje de ficción.',
    year: '2023',
    role: 'Dirección de Fotografía',
    frames: Array.from({ length: 8 }, (_, i) =>
      `${filmDir}/vista-al-lago/vista-al-lago-${String(i + 1).padStart(2, '0')}.png`
    ),
    thumbnail: `${filmDir}/vista-al-lago/vista-al-lago-thumb.png`,
  },
  {
    id: 'jesus-para-algunos',
    title: 'Jesús Para Algunos',
    category: 'documentaries',
    youtubeId: '7Y0VaCQBmvQ',
    description: 'Documental.',
    year: '2024',
    role: 'Dirección de Fotografía',
    frames: Array.from({ length: 8 }, (_, i) =>
      `${docDir}/jesus-para-algunos/jesus-para-algunos-${String(i + 1).padStart(2, '0')}.png`
    ),
    thumbnail: `${docDir}/jesus-para-algunos/jesus-para-algunos-thumb.png`,
  },
  {
    id: 'festin',
    title: 'Festín',
    category: 'documentaries',
    youtubeId: 'ggRWaFmsgkQ',
    description: 'Documental.',
    year: '2024',
    role: 'Dirección de Fotografía',
    frames: Array.from({ length: 8 }, (_, i) =>
      `${docDir}/festin/festin-${String(i + 1).padStart(2, '0')}.png`
    ),
    thumbnail: `${docDir}/festin/festin-thumb.png`,
  },
  {
    id: 'apuntes-sobre-la-memoria',
    title: 'Apuntes Sobre la Memoria',
    category: 'documentaries',
    youtubeId: '0R2QZB2m2cc',
    description: 'Documental.',
    year: '2023',
    role: 'Dirección de Fotografía',
    frames: Array.from({ length: 10 }, (_, i) =>
      `${docDir}/apuntes-sobre-la-memoria/apuntes-sobre-la-memoria-${String(i + 1).padStart(2, '0')}.png`
    ),
    thumbnail: `${docDir}/apuntes-sobre-la-memoria/apuntes-sobre-la-memoria-thumb.png`,
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}

export function getProjectsByCategory(category: 'films' | 'documentaries'): Project[] {
  return projects.filter((p) => p.category === category)
}
