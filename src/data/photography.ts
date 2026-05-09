import type { PhotoProject } from '../types'

const dir = '/images/photography'

export const photos: PhotoProject[] = Array.from({ length: 33 }, (_, i) => ({
  id: `photo-${String(i + 1).padStart(2, '0')}`,
  src: `${dir}/photo-${String(i + 1).padStart(2, '0')}.webp`,
  alt: `Fotografía ${i + 1}`,
}))

export function getPhotosByCategory(category?: string): PhotoProject[] {
  if (!category) return photos
  return photos.filter((p) => p.category === category)
}
