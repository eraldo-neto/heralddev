import React from 'react';
import Logo from '../../assets/Logo.png';
import './Header.css'
//import ButtonLink from './components/ButtonLink';
import Button from '../Button'

function Header() {
    return (
        <header className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Heralddev Logo" />
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </header>
    );
}

export default Header;