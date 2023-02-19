import {FaBars, FaTimes} from 'react-icons/fa';
import { useRef } from 'react';

function Nav() {

    const navRef = useRef();

    return (
      <header>
        <h3>Logo</h3>
        <nav ref={navRef}>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Service</a>
            <a href="">Contact</a>
            <button>
                <FaTimes />
            </button>
        </nav>
        <button>
                <FaBars />
            </button>
      </header>
    );
}

export default Nav;