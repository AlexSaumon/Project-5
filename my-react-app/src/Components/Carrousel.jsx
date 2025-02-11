import '../Styles/Gallery.scss'

function Carousel({ logement }) {
    return (
        <div className='carousell'>
            <img src={logement.pictures} alt="drger" />
        </div>

    );
  }
  
  export default Carousel;