import { useState } from 'react'
import BannerIMG from '../../assets/BannerIMG2.png'
import viteLogo from '/vite.svg'
import '../../Styles/App.scss'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import DropDown from '../../Components/DropDown'
import Carousel from '../../Components/Carrousel'

import logements from '../../Data/logements.json';

const data = [
  {
    name: 'Description',
    description: 'chat'
  },
  {
    name: 'Equipements',
    description: 'chien'
  },
];

const selection = logements.filter(id =>
  id.id === 'c67ab8a7'
);

function Fiche() {
  return (
    <>
      <Header />
      <div className='Main'>
          <div className="galleryContainer">
          {selection.map(item => <Carousel logement={item} key={item.id} />)}
          </div>
            <div><h2>Nom, Location Placeholder</h2></div>
            <div><h3>Tag placeholder</h3></div>
            <div className='DropDownContainer-Fiche'>
              {data.map((item, index) => (
                <DropDown name={item.name} description={item.description} key={index} />
              ))}
            </div>
      </div>
      <Footer />
    </>
  );
}

export default Fiche; 

