import './App.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/index.esm'
import Header from './components/Header'
import Introduction from './pages/Introduction'
import About from './pages/About'
import Problem from './pages/Problem'
import Impacts from './pages/Impacts'
import Solution from './pages/Solution'
import Arduino from './pages/Arduino'
import Application from './pages/Application'
import Footer from './components/Footer'
import { ZipCodeSearch } from './pages/ZipCodeSearch'


function App() {

  return (
    <>
      <Header />
      <main>
        <Introduction />
        <About />
        <Problem />
        <Impacts />
        <Solution />
        <Arduino />
        <Application />
        <ZipCodeSearch />
      </main>
      <Footer />
    </>
  )
}

export default App
