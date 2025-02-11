import '../Styles/Banner.scss';


function Header({children}) {
    return (
      <div className='BannerContainer'>{children} </div>
    );
}

export default Header;