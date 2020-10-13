/*
Este arquivo inicializa o react para nozes
ele pega o nosso root e renderizando o react dentro do root
*/


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  //explicar sobre o SPA slide de referencia

  // apagar para usar o BrowserRouter

  // importar o react-router-dom com o BrowserRouter
  //import { BrowserRouter } from 'react-router-dom';

    /*
  Nossa aplicação ficará inteira dentro desse roteamento então
  basicamente o react router dom prove um componente chamado BrowserRouter
  ele ficará em volta de tudo
  basicamente agora precisamos decidir qual pagina ira carregar 

  */


  // <BrowserRouter>

  //   Para fazer essa troca de pagina dentro do react teriamos que fazer um if
  //   Como sabemos qual é a url certa ?
  //   Por meio do javaScript conseguimos com window.location.href

  //   Mas Já que estamos usando uma lib não vamos ter que fazer isso na mão
  //   e para fazer isso chamaremos alguns componentes dessa lib para fazer esse processo sendo eles o SWitch e o Router
  //   if() {
  //     <App />
  //   }
  //   <App />

  //   {/* <CadastroVideo />
  //   <CadastroCategoria /> */}
  // </BrowserRouter>,

  // apagar e usar o switch e o route agora

  /*
  Colocar o codigo com o Switch em volta

  O switch faz aqueles ifs que queriamos utilizar na mão fazendo toda a
  logica de verificar qual é a rota
  E a ideia dele é mapear as rotas possiveis
  
  O router é como iremos declarar cada pagina que temos.
  apagar o <App />

  adicionar o Route
  <Route path="/" component={App} />

  Vamos fazer um pequeno teste criando um novo component 
  Como eu havia mostrado teremos o cadastro video

  então vamos fazer acima do ReactDOM.render(

  function CadastroVideo() {
    return (
      <div>
        Página de cadastro de video
      </div>
    )
  }

  Copiar a linha do router
  <Route path="/" component={App} />
  e alterar para utilizar
  <Route path="/cadastro/video" component={CadastroVideo} />
  muito importante nesse momento ela ficar acima do 
  <Route path="/" component={App} />
  A ideia é um fake route como se pegassemos o que o browser faz
  e fazendo isso na mão então
  quando batemos na url /cadastro/video
  estamos pegando o component CadastroVideo e mostrando ele em vez de recarregar a pagina

  **** Mostrar funcionalidade ****

  Agora se colocarmos na url /cadastro/sndaisadad
  O React trara a home 
  Porquer ?
  Toda vez que digitamos '/' alguma coisa exite a barra que é o que o route da home expera
  Ficou faltando o exact 

  Adicionar o exat
  <Route path="/" component={App} exact />

  Agora provavelmente se digitarmos '/' alguma coisa vamos ser jogado para uma pagina em branco
  porque agora estamos sendo mais exigente na url
  antes permitiamos se tiver a '/' ta suave
  Agora se vc não tem exatamente a '/' vai dar ruim
  A ordem dos route influencia em quem vai ser chamado se tivessemos um '/cadastro' antes do cadastro video
  ele seria chamado primeiro

  para resolvermos isso iremos criar a 404
  se apagarmos o path do route e deixamos ele como ultimo componente
  se ele não achar nenhum outra rota ele será carregado
  <Route component={404} />

  No react todos os componentes são uma função então podemos fazer algo meio duvidoso
  e criar dentro do retorno uma arrow function
  <Route component={() => (<div>Página 404</div>)} />

  As vezes no react vc só quer fazer um teste e essa sintaxe aqui vai conseguir te ajudar a fazer esse teste mais rapido

  ***** Mostrar o 404 *****

  Agora vamos separar os componentes vamos remover a função que faz a criação do cadastroVideo
  ***** Remover função do cadastro video *****

  para deixar mais organizado iremos criar dentro da pasta src uma pasta pages

  ****** criar pasta pages dentro da pasta src  ******
  ****** criar index.js dentro da pasta *******
  ***** abrir aqui o arquivo index.js da pasta para seguir *****
  */

  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/" component={Home} exact />
      <Route component={() => (<div>Página 404</div>)} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);