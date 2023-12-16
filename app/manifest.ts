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
        src: '/apple-icon1.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon1.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-icon2.png',
        sizes: '384x384',
        type: 'image/png',
      },
      {
        src: '/apple-icon2.png',
        sizes: '384x384',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-icon3.png',
        sizes: '256x256',
        type: 'image/png',
      },
      {
        src: '/apple-icon3.png',
        sizes: '256x256',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-icon4.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/apple-icon4.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-icon5.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: '/apple-icon5.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-icon6.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/apple-icon6.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-icon7.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: '/apple-icon7.png',
        sizes: '72x72',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-icon8.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/apple-icon8.png',
        sizes: '48x48',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}