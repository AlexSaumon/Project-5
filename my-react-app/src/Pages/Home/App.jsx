import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import '../../Styles/App.scss'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Banner from '../../Components/Banner'
import Gallery from '../../Components/Gallery'

function App() {
  return (
    <>
      <Header />
      <div>
        <Banner />
        <Gallery />
      </div>
      <Footer />
    </>
  )
}

export default App
