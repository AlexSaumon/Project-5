import { useState, useRef } from 'react';
import '../Styles/DropDown.scss';
import arrowdown from '../assets/arrowdown.svg';
import arrowup from '../assets/arrowup.svg';

function DropDown({ name, description }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    // Toggle dropdown and animate height
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`; // Expand
        } else {
            contentRef.current.style.maxHeight = "0px"; // Collapse
        }
    };

    return (
        <div className="dropdown">
            <button className="dropDown" onClick={toggleDropdown}>
                <h3>{name}</h3>
                <img src={isOpen ? arrowup : arrowdown} className="IMG" alt="Arrow icon" />
            </button>
            <div ref={contentRef} className={`dropDown-description ${isOpen ? "open" : ""}`}>
                {description}
            </div>
        </div>
    );
}

export default DropDown;
