import staroff from '../assets/staroff.svg';
import staron from '../assets/staron.svg';
import '../Styles/Tag.scss';

function Rating({ logement }) {
    const maxStars = 5;
    const rating = parseInt(logement.rating, 10); // Convert rating from string to number
    const stars = Array.from({ length: maxStars }, (_, index) => index + 1);

    return (
        <div className="rating">
            {stars.map((star, index) => (
                <img 
                    key={index} // Use index since stars don't have unique IDs
                    src={star <= rating ? staron : staroff} // Compare star number with rating
                    alt={star <= rating ? 'Red Star' : 'White Star'} 
                    className="star-icon"
                />
            ))}
        </div>
    );
}

export default Rating;
