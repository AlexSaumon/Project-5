/** Page de test pour la création des fiches de logement */

import { useState } from 'react'
import BannerIMG from '../../assets/BannerIMG2.png'
import viteLogo from '/vite.svg'
import '../../Styles/App.scss'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import DropDown from '../../Components/DropDown'
import Carousel from '../../Components/Carrousel'
import Description from '../../Components/Description'
import Tags from '../../Components/Tag'
import Rating from '../../Components/Rating'


import logements from '../../Data/logements.json';

/** filtre basique de l'ID */

const selection = logements.filter(id =>
  id.id === 'c67ab8a7'
);

const selectedLogement = selection[0]; 

/** generation des descriptions */

const data = [
  {
    name: 'Description',
    description: selectedLogement.description, 
  },
  {
    name: 'Équipements',
    description: (
      <ul className="equipments-list">
        {selectedLogement.equipments.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ),
  },
];
function Fiche() {
  
  return (
    <>
      <Header />
      <div className='Main'>
          <div className="carrouselContainer">
          {selection.map(item => <Carousel logement={item} key={item.id} />)}
          
          </div>
            <div className='description-parent'>
               {selection.map(item => <Description logement={item} key={item.id} />)}
            </div>
            <div className='tag-parent'>
              {selection.map(item => <Tags logement={item} key={item.id} />)}<Rating logement={selectedLogement} />
              </div>
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
