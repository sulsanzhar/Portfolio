import { Header } from '../Header/Header.jsx'
import { Promo } from '../Promo/Promo.jsx'
import { Education } from '../Education/Education.jsx'
import { Skills } from '../Skills/Skills.jsx'
import { Projects } from '../Projects/Projects.jsx'
import './App.sass'

function App() {
  return (
    <div className='App'>
      <Header/>
      <Promo/>
      <Education/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App
