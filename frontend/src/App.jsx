import './App.css'
import MenuHeader from './components/header'
import Hero from './components/heropage'
import About from './components/about'
import Experience from './components/experience'
import Work from './components/work'
import Contact from './components/contact'
import Footer from './components/footer'
import { usePortfolioContent } from './usePortfolioContent'

function App() {
  const { data, error, loading } = usePortfolioContent()

  if (loading) {
    return <div style={statusStyle}>Loading…</div>
  }

  if (error) {
    return <div style={statusStyle}>Couldn't load content right now. Please try again shortly.</div>
  }

  return (
    <>
      <MenuHeader/>
      <Hero hero={data.hero} contact={data.contact} />
      <About about={data.about} />
      <Experience experience={data.experience} />
      <Work work={data.work} />
      <Contact contact={data.contact} />
      <Footer contact={data.contact} />
    </>
  )
}

const statusStyle = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Poppins, sans-serif',
  color: '#6D6A7C',
}

export default App
