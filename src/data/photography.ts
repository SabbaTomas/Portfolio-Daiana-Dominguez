import type { PhotoProject } from '../types'

const dir = '/images/photography'
const thumbDir = `${dir}/miniaturas`

const photoIds = [
  'photo-01', 'photo-02', 'photo-03', 'photo-04', 'photo-05',
  'photo-06', 'photo-07', 'photo-08', 'photo-09', 'photo-10',
  'photo-11', 'photo-12', 'photo-13', 'photo-14',
  'photo-15', 'photo-16',
]

export const photos: PhotoProject[] = photoIds.map((id, i) => ({
  id,
  src: id === 'photo-11' ? `${dir}/${id}.png` : `${dir}/${id}.webp`,
  thumb: id === 'photo-11' ? `${thumbDir}/${id}.webp` : `${thumbDir}/${id}.webp`,
  alt: `Fotografía ${i + 1}`,
}))

export function getPhotosByCategory(category?: string): PhotoProject[] {
  if (!category) return photos
  return photos.filter((p) => p.category === category)
}
