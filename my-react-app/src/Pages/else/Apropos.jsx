import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import '../../Styles/App.scss'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Banner from '../../Components/Banner'
import DropDown from '../../Components/DropDown'

function Apropos() {
  return (
    <>
      <Header />
      <div>
        <Banner />
        <DropDown />
      </div>
      <Footer />
    </>
  )
}


export default Apropos
