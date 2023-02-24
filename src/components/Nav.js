import {FaBars, FaTimes} from 'react-icons/fa';
import { useRef } from 'react';
import '../styles/style.css';

function Nav() {

    const navRef = useRef();

    const showBar = () => {
        navRef.current.classList.toggle('responsive-nav');
    }
    return (
      <header>
        <h3>Logo</h3>
        <nav ref={navRef}>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Service</a>
            <a href="">Contact</a>
            <button className='nav-btn nav-close-btn' onClick={showBar}>
                <FaTimes />
            </button>
        </nav>
        <button className='nav-btn' onClick={showBar}>
            <FaBars />
        </button>
      </header>
    );
}

export default Nav;