export interface Project {
  id: string
  title: string
  category: 'films' | 'documentaries' | 'Videoclips'
  youtubeId: string
  description: string
  year: string
  role: string
  selections?: string[]
  frames: string[]
  thumbnail: string
}

export type SecondaryRoleMedia =
  | { type: 'youtube'; youtubeId: string }
  | { type: 'video'; src: string }
  | {
      type: 'instagram'
      url: string
      cover: string
      handle?: string
      alt?: string
    }
  | { type: 'image'; src: string }

export interface SecondaryRoleItem {
  id: string
  role?: string
  project?: string
  production?: string
  year?: string
  selections?: string[]
  task?: string
  media: SecondaryRoleMedia
}

export interface PhotoProject {
  id: string
  src: string
  thumb: string
  alt: string
  category?: string
}


export interface SocialLink {
  name: string
  url: string
  icon: string
}


