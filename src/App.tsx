import React from 'react'
import './index.css'
import backgroundImage from './assets/images/hitler.jpg'
import Hero from './components/Hero';
import Sidebar from './components/Sidebar'
const App = () => {
  return (
    <div>
      <Sidebar />
      <Hero backgroundImage={backgroundImage} />
    </div>
  )
}

export default App