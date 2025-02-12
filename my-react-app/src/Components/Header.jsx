import '../Styles/Header.scss';
import kasaLogo from '../assets/Logo.svg';
import { NavLink } from 'react-router';

function Header() {
    return (
      <header>
          <img src={kasaLogo} className="LOGO" alt="Kasa logo" />
          <nav>
            <NavLink to="/" >Acceuil</NavLink>
            <NavLink to="/Apropos" >A propos</NavLink>
          </nav> 
      </header>
    );
}

export default Header;

  
