import { useState } from 'react'
import BannerIMG from '../../assets/BannerIMG2.png'
import viteLogo from '/vite.svg'
import '../../Styles/App.scss'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Banner from '../../Components/Banner'
import DropDown from '../../Components/DropDown'
import ErrorIMG from '../../assets/404.svg';

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

function Error() {
  return (
    <>
      <Header />
      <div>
            <img src={ErrorIMG} className='Error-img' alt="Banner picture" />
      </div>
      <Footer />
    </>
  );
}

export default Error;
