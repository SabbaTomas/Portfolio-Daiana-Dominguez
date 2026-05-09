import { useState, useCallback } from 'react'

export function useImageGallery() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [images, setImages] = useState<string[]>([])

  const open = useCallback((index: number, allImages: string[]) => {
    setCurrentIndex(index)
    setImages(allImages)
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  return { isOpen, currentIndex, images, open, close, goNext, goPrev }
}
