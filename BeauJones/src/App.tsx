import Panel from './components/Panel'
import Header from './components/Header'
import AboutPanel from './components/About'
import ProjectsCarousel from './components/ProjectCarousel'

function App() {

  return (
    <div className="bg-black">
    <Header />
      <Panel className="h-140 bg-black fade-top -mt-30">
        <AboutPanel />
      </Panel>

      <Panel className="h-140 bg-black fade-top pt-25" backgroundImage='/purp_planet2.jpg'>
        <ProjectsCarousel />
      </Panel>

      <Panel className="h-140 bg-gray-500">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p>This is the contact panel.</p>
      </Panel>
    </div>
  )
}

export default App
