import React from 'react';
import Logo from '../../assets/Logo.png';
import './Header.css'
import { Link } from 'react-router-dom'
//import ButtonLink from './components/ButtonLink';
import Button from '../Button'

function Header() {
    return (
        <header className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Heralddev Logo" />
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </header>
    );
}

/*
Apos a troca para Utilizar Router ****


Alterar tag button com href para /cadastro/video
ainda sim estara com o comportamento default do navegador e nao o route fake que fizemos de  SPA

importar o react router dom
import { Link } from 'react-router-dom'

alterar o button e o A que utiliza o Logo para utilizar o Link em vez de a
as={Link} e agora usaremos em vez de href usaremos o to
to=

agora finalmente estaremos utilizando o SPA

Agora seguiremos para a criação das outras paginas
Reparando que no projeto final o menu e o footer estão em todas as paginas 
o q q podemos fazer para termos isso de forma mais pratica nas novas paginas
Para isso iremos criar um novo component afinal tudo é um component então vamos fazer o PageDefault
*/

export default Header;