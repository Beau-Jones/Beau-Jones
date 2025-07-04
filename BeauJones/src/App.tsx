import Panel from './components/Panel'
import Header from './components/Header'
import AboutPanel from './components/About'

function App() {

  return (
    <>
    <Header />
      <Panel className="h-180 bg-black fade-top -mt-30">
        <AboutPanel />
      </Panel>

      <Panel className="bg-gray-500">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p>This is the projects panel.</p>
      </Panel>

      <Panel className="bg-white">
        <h1 className="text-3xl font-bold">Skills</h1>
        <p>This is the skills panel.</p>
      </Panel>

      <Panel className="bg-gray-500">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p>This is the contact panel.</p>
      </Panel>
    </>
  )
}

export default App
