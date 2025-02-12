import { useState } from 'react'
import BannerIMG from '../../assets/BannerIMG2.png'
import viteLogo from '/vite.svg'
import '../../Styles/App.scss'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Banner from '../../Components/Banner'
import DropDown from '../../Components/DropDown'
import kasaLogo from '../../assets/Logo.svg';

const data = [
  {
    name: 'Fiabilité',
    description: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
  },
  {
    name: 'Respect',
    description: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  },
  {
    name: 'Service',
    description: 'La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.'
  },
  {
    name: 'Sécurité',
    description: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l hôte qu au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
  }
];

function Apropos() {
  return (
    <>
      <Header />
      <div className='Main'>
      <Banner>
				<img src={BannerIMG} className="IMG" alt="Banner picture" />
			</Banner>
        <div className='DropDownContainer'>
          {data.map((item, index) => (
            <DropDown name={item.name} description={item.description} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Apropos;

