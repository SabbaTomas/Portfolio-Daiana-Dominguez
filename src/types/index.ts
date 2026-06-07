export interface Project {
  id: string
  title: string
  category: 'films' | 'documentaries' | 'Videoclips'
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
  thumb: string
  alt: string
  category?: string
}


export interface SocialLink {
  name: string
  url: string
  icon: string
}


