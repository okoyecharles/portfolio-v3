import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Okoye Charles | Frontend Developer',
    short_name: 'Okoye Charles',
    description: "Hey! I'm Charles, A developer with experience in website and systems development. Learn everything about my skills, experience, and journey as a programmer.",
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    icons: [
      {
        src: '/pwa/logo-circle-2.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/pwa/logo-2.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/pwa/logo-circle.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/pwa/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
    ],
  }
}