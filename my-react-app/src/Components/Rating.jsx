import staroff from '../assets/staroff.svg';
import staron from '../assets/staron.svg';
import '../Styles/Tag.scss';

function Rating({ logement }) {
    const maxStars = 5;
    const rating = parseInt(logement.rating, 10); // fallait convertire les string en nombre
    const stars = Array.from({ length: maxStars }, (_, index) => index + 1); // génére la list de nomdre d'étoile pour le mapping

    return (
        <div className="rating">
            {stars.map((star, index) => (
                <img 
                    key={index} 
                    src={star <= rating ? staron : staroff} // comparaison du nombre d'étoile avec les données
                    alt={star <= rating ? 'étoile rouge' : 'étoile blanche'} 
                    className="star-icon"
                />
            ))}
        </div>
    );
}

export default Rating;
