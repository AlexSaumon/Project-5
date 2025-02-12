import { useState } from 'react';
import '../Styles/DropDown.scss';
import arrowdown from '../assets/arrowdown.svg';
import arrowup from '../assets/arrowup.svg';

function DropDown({ name, description }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div >
            <details
                onToggle={(e) => setIsOpen(e.target.open)} // Detection ouverture fermeture
                open={isOpen}
            >
                <summary className="dropDown">
                    <h3>{name}</h3>
                    {isOpen ? <img src={arrowdown} className="IMG" alt="Banner picture" /> : <img src={arrowup} className="IMG" alt="Banner picture" />} {/* swap entre ▲ et ▼ */}
                </summary>
                <div className="dropDown-descripton">
                    {description}
                </div>
            </details>
        </div>
    );
}

export default DropDown;
