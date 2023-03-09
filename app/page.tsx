import LandingPage from './landingpage'
import About from './aboutme'
import Contact from './contact'
import Work from './work'

export default function Home() {
  return (
    <main className='snap-y snap-mandatory h-screen w-screen overflow-x-hidden overflow-y-scroll scroll-smooth'>
      <LandingPage />
      <About />
      <Work />
      <Contact />
    </main>
  )
}
