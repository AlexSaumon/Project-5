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
    description: 'chat'
  },
  {
    name: 'Respect',
    description: 'chien'
  },
  {
    name: 'Service',
    description: 'cheval'
  },
  {
    name: 'Sécurité',
    description: 'cochon'
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

