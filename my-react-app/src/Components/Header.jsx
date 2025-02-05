import '../Styles/Header.scss';
import kasaLogo from '../assets/Logo.svg';

function Header() {
    return (
      <header>
        <img src={kasaLogo} className="LOGO" alt="Kasa logo" />
        <nav>
          <a href="/" className="Acceuil">Acceuil</a>
          <a href="/Apropos" className="APropos">A propos</a>
        </nav>
      </header>
    );
}

export default Header;

  
