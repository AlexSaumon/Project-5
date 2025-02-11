import { useState } from 'react'
import BannerIMG from '../../assets/BannerIMG.svg'
import viteLogo from '/vite.svg'
import '../../Styles/App.scss'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Banner from '../../Components/Banner'
import Gallery from '../../Components/Gallery'
import kasaLogo from '../../assets/Logo.svg';

import logements from '../../Data/logements.json';

const dataTest = [
  {
    name: 'test',
  },
  {
    name: 'toto',

  },
  {
    name: 'titi',
  }
]

function App() {
  return (
    <>
      <Header />
      <div>
      <Banner>
				<img src={BannerIMG} className="IMG" alt="Banner picture" />
        <h1>Chez vous, partout et ailleurs</h1>
			</Banner>
        <div className="galleryContainer">
          {logements.map(item => <Gallery logement={item} key={item.id} />)}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
