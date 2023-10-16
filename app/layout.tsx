import './globals.css'
import { Audiowide, Sulphur_Point } from "next/font/google"
import Head from 'next/head'

const audiowide = Audiowide({
    subsets: ['latin'],
    weight: "400",
    preload: false,
    variable: "--audiowide"
})

const sulphurPoint = Sulphur_Point({
    subsets: ['latin'],
    weight: "700",
    preload: false,
    variable: "--sulphurPoint"
})

export const metadata = {
  title: 'Wietse Vandeput',
  description: 'The web portfolio of Wietse Vandeput, a full-stack developer.',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${audiowide.variable} ${sulphurPoint.variable}`}>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta name="keywords" content="UI, UX, ui/ux, UI/UX, designer, web developer, fullstack, fullstack developer, software developer, portfolio, wietse vandeput, 
        wietse, vandeput, diverko, problem solver"/>
        <meta name="author" content="Wietse Vandeput"/>
        <meta name="google-site-verification" content="MjLmbtfMaWnRNEEIyYhwE4I5nrK2v7ka9hq0tPNimd8" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  )
}
