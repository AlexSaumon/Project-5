import '../Styles/Gallery.scss'
import { Link } from 'react-router-dom';

function Gallery({ logement }) {
    return (
        <div key={logement.id} className='gallery'>
            <Link to={`/logement/${logement.id}`}><img src={logement.cover} alt="drger" /></Link>
            <p>{logement.title}</p>
        </div>
    );
  }
  
  export default Gallery;