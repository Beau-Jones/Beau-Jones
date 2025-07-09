import Panel from './components/Panel'
import Header from './components/Header'
import AboutPanel from './components/About'
import ProjectsCarousel from './components/ProjectCarousel'
import ContactMe from './components/ContactMe'

function App() {

  return (
    <div className="bg-black">
    <Header />
      <Panel className="h-140 bg-black fade-top -mt-30">
        <AboutPanel />
      </Panel>

      <Panel className="h-160 bg-black fade-top pt-40 fade-bottom" backgroundImage='/purp_planet2.jpg'>
        <ProjectsCarousel />
      </Panel>

      <Panel className="h-80 fade-top">
        <ContactMe />
      </Panel>
    </div>
  )
}

export default App
