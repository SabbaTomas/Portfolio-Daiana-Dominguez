import type { SecondaryRoleItem } from '../types'

export const secondaryRoles: SecondaryRoleItem[] = [
  {
    id: 'edicion-tranvia',
    role: 'Edición',
    media: { type: 'video', src: '/videos/Tranvia.mp4' },
  },
  {
    id: 'instagram-enerc',
    role: 'Operadora de Cámara',
    selections: ['FICDH', 'FIEC'],
    media: {
      type: 'instagram',
      url: 'https://www.instagram.com/p/DM8UA5ysWlZ/',
      cover: '/images/OtroTrabajos/InstagramEnerc.jpg',
      handle: 'enerc_cine',
      alt: 'Una Casa — póster de selección en el Festival Internacional de Escuelas de Cine',
    },
  },
  {
    id: 'cartelera-uno',
    role: 'Foquista',
    project: 'Eso que todxs hacemos',
    selections: ['BAFICI 2026'],
    media: { type: 'image', src: '/images/OtroTrabajos/CarteleraUno.jpeg' },
  },
  {
    id: 'cartelera-dos',
    role: '2 AC',
    project: 'Dieciocho',
    selections: ['Festival de Cine de Girona 2026'],
    media: { type: 'image', src: '/images/OtroTrabajos/CarteleraDos.jpeg' },
  },
]
