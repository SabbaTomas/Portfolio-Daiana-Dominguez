import { useRef, useEffect } from 'react'

interface Props {
  youtubeId: string
  title: string
}

export default function VideoPlayer({ youtubeId, title }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&rel=0&controls=1`
    iframe.src = src
  }, [youtubeId])

  return (
    <div className="aspect-video rounded-xl overflow-hidden">
      <iframe
        ref={iframeRef}
        title={title}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
