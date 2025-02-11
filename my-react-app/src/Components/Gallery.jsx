import '../Styles/Gallery.scss'

function Gallery({ logement }) {
    return (
        <div className='gallery'>
            <img src={logement.cover} alt="drger" />
            <p>{logement.title}</p>
        </div>

    );
  }
  
  export default Gallery;