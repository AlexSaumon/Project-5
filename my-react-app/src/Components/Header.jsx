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
            <NavLink to="/logement/46d178c5" >Test Error</NavLink>
            <NavLink to="/logement/46254432535358c5" >Test Error 2</NavLink>
          </nav> 
      </header>
    );
}

export default Header;

  
