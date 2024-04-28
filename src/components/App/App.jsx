import { useState } from 'react'
import './App.sass'
import { Header } from '../Header/Header.jsx'
import { Promo } from '../Promo/Promo.jsx'
import { Education } from '../Education/Education.jsx'
import { Skills } from '../Skills/Skills.jsx'
import { Projects } from '../Projects/Projects.jsx'

function App() {
  return (
    <>
      <Header/>
      <Promo/>
      <Education/>
      <Skills/>
      <Projects/>
    </>
  )
}

export default App
