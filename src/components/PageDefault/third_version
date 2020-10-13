import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import styled from 'styled-components'

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

function PageDefault({ children }) {
    return (
        <>
            <Header />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    );
}

export default PageDefault;

/*
Basicamente iremos deixar tudo padronizado então vamos usar nosso novo amigo styled components
const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

apos isso vamos remover a div que engloba o pageDefault pois não é necessario mais
e utilizaremos o que é chamado de fragmento <> </> que é basicamente uma tag morta

Agora vamos criar o cadastro de categoria
então basicamente vamos copiar o cadastro de video nesse momento

*** criar nova pasta de cadastro de categoria ****
*/