import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroVideo() {
    return (
        <PageDefault>
            <h1>Cadastro de video</h1>
            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo

/*
**** Voltar no index.js do projeto para adicionar o import ****
import CadastroVideo from './pages/cadastro/Video';
logo apos isso iremos alter o App para dentro da pasta pages dentro de uma pasta Home também e alterar o nome para index.js
o VSCode deve sugerir de alterar os importes do app 
apos isso ir no index.js da home alterar app para Home e fazer o mesmo dentro do index.js Geral

Vamos finamente mudar o botão do menu para utilizar a ideia de SPA

**** ir apra o component de menu ****

**** Logo Apos Criar o Page Default ****
Iremos importar ele
    <PageDefault>
        Página de cadastro de video
    </PageDefault>

Agora se acessarmos a pagina iremos ver que perdemos o Conteudo que existia 
'Página de cadastro de video'
então utilizaremos o children

**** Ir no pageDefault ****

Adicionaremos o Link para a pagina de categoria pois a pagina de cadastro de video depende do cadastro de categoria :D
Logo apos o texto...
<Link to="/cadastro/categoria">
    Cadastrar Categoria
</Link>

Agora que não é mais uma pagina de cadastro de video vamos alterar o texto para h1
<h1>Cadastro de video</h1>

**** Ir no pageDefault 3versão ****
*/