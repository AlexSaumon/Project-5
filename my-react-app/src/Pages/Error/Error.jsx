import { useState } from 'react'
import BannerIMG from '../../assets/BannerIMG2.png'
import viteLogo from '/vite.svg'
import '../../Styles/App.scss'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import ErrorIMG from '../../assets/404.svg';
import { NavLink } from 'react-router';


function Error() {
  return (
    <>
      <Header />
      <div>
            <img src={ErrorIMG} className='Error-img' alt="Banner picture" />
            <p className='Big-msg'>Oups! La page que vous demandez n'existe pas</p>
            <NavLink to="/" ><p className='Redirect'>Retourner sur la page d'acceuil</p></NavLink>
      </div>
      <Footer />
    </>
  );
}

export default Error;
