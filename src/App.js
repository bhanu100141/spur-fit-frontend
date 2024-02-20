import React from 'react'
import Navbar from './Navbar'
import Maincontent from './Maincontent'
import Footer from './Footer'

const App = () => {
  return (
    <div className='web-container'>
      <Navbar/>
      <Maincontent/>
      <Footer/>
    </div>
  )
}

export default App
