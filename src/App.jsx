import './App.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/index.esm'
import Header from './components/Header'
import Introduction from './components/Introduction'
import About from './components/About'
import Problem from './components/Problem'
import Impacts from './components/Impacts'
import Solution from './components/Solution'
import Arduino from './components/Arduino'
import Application from './components/Application'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <Header/>
    <main>
      <Introduction/>
      <About/>
      <Problem/>
      <Impacts/>
      <Solution/>
      <Arduino/>
      <Application/>
    </main>
    <Footer/>
    </>
  )
}

export default App
