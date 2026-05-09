import type { SocialLink } from '../types'

export const SITE_TITLE = 'Daiana Dominguez'
export const SITE_DESCRIPTION = 'Directora de Fotografía & Cineasta'

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/daiana-dominguez12/',
    icon: 'linkedin',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/daianadominguez.12/',
    icon: 'instagram',
  },
]

export const EMAIL = 'daidominguez1208@gmail.com'

export const NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Films', href: '#films' },
  { label: 'Documentales', href: '#documentales' },
  { label: 'Fotografía', href: '#fotografia' },
  { label: 'Contacto', href: '#contacto' },
] as const
