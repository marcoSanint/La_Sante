import React from 'react';
import BarraCabeza from './components/Barra_cabeza';
import logo from './images/logo.png';
import imagen1 from './images/imagen1.png';
import imagen2 from './images/imagen2.png';
import imagen3 from './images/imagen3.png';
import card11 from './images/card11.png';
import card12 from './images/card12.png';
import card13 from './images/card13.png';
import card14 from './images/card14.png';
import card15 from './images/card15.png';
import card21 from './images/card21.png';
import card22 from './images/card22.png';
import card23 from './images/card23.png';
import Card1 from './components/Card_1';
import Card2 from './components/Card_2';
import Card3 from './components/Card_3';
import Imagen_grande from './components/Imagen_grande';
import SubtituloResaltado from './components/Sub_titulo';
import './App.css';

function App() {
  return (
    <div className="app">
      <BarraCabeza backgroundImageUrl={logo} />
      <main className="main-content">
        <Imagen_grande imageUrl={imagen1}/> 
        <div className="texto-centralizado">
          <h2>Contamos con un portafolio especializado</h2> 
          <h2>para cualquier tipo de necesidad ¡Conócelo!</h2>
        </div>
        <div className="cards-container">
        <Card1
            image={card11}
          />
          <Card1
            image={card12}
          />
          <Card1
            image={card13} 
          />
          <Card1
            image={card14} 
          />
          <Card1
            image={card15}
          />
        </div>
        <Imagen_grande imageUrl={imagen2}/> 
        <SubtituloResaltado texto="Conoce algunos de nuestros productos" />
        <div className="imagen-centrada">
          <img src={imagen3} alt='centrada' />
        </div>
        <div className="cards-container">
          <Card2 title="Infecciones virales" imageUrl={card21} />
          <Card2 title="Bacterias" imageUrl={card22} />
          <Card2 title="Prevencion covid" imageUrl={card23} />
        </div>
        <SubtituloResaltado texto="Subtítulo resaltado o en burbuja" />
        <div className="cards-container">
        <Card3
            image="url_del_rectangulo_verde.jpg"
          />
          <Card3
            image="url_del_rectangulo_verde.jpg"
          />
          <Card3
            image="url_del_rectangulo_verde.jpg"
          />
          <Card3
            image="url_del_rectangulo_verde.jpg"
          />
          <Card3
            image="url_del_rectangulo_verde.jpg"
          />
          <Card3
            image="url_del_rectangulo_verde.jpg"
          />
          <Card3
            image="url_del_rectangulo_verde.jpg"
          />
          <Card3
            image="url_del_rectangulo_verde.jpg"
          />
          <Card3
            image="url_del_rectangulo_verde.jpg"
          />
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
