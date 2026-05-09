export interface Project {
  id: string
  title: string
  category: 'films' | 'documentaries'
  youtubeId: string
  description: string
  year: string
  role: string
  frames: string[]
  thumbnail: string
}

export interface PhotoProject {
  id: string
  src: string
  alt: string
  category?: string
}

export interface Palette {
  id: string
  name: string
  colors: Record<string, string>
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export type ThemeId = 'scorsese' | 'wes-anderson' | 'matrix' | 'film-noir'
