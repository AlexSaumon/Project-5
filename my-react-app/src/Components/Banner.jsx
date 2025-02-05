import '../Styles/Banner.scss';
import BannerIMG from '../assets/BannerIMG.svg';

function Header() {
    return (
      <div className='BannerContainer'>
        <img src={BannerIMG} className="IMG" alt="Banner picture" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    );
}

export default Header;