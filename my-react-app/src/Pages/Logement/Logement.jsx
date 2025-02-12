import { useParams, Navigate } from 'react-router-dom';
import logements from '../../Data/logements.json';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import DropDown from '../../Components/DropDown';
import Carousel from '../../Components/Carrousel';
import Description from '../../Components/Description';
import Tags from '../../Components/Tag';
import Rating from '../../Components/Rating'
import '../../Styles/App.scss'

function Fiche() {
  const { id } = useParams(); // récupère l'id de l'url
  const selectedLogement = logements.find(logement => logement.id === id);

  if (!selectedLogement) {
    return <Navigate to="/Error" />; 
  }

  const data = [
    /** generation des descriptions */
    {
      name: 'Description',
      description: <p>{selectedLogement.description}</p>
    },
    {
      name: 'Équipements',
      description: (
        <ul className="equipments-list">
          {selectedLogement.equipments.map((item, index) => (
            <li key={index}><p>{item}</p></li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <>
      <Header />
      <div className='Main'>
        <div className="carrouselContainer">
          <Carousel logement={selectedLogement} />
        </div>
        <div className='description-parent'>
          <Description logement={selectedLogement} />
        </div>
        <div className='tag-parent'>
          <Tags logement={selectedLogement} />
          <Rating logement={selectedLogement} />
        </div>
        <div className='DropDownContainer-Fiche'>
          {data.map((item, index) => (
            <DropDown name={item.name} description={item.description} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Fiche;
