import './App.css'
import Galleta from './components/Galleta'
import phrases from './data/phrases.json'
import { useState } from 'react'

function App() {
  const backgroungImages = [
    "fondo1.jpg","fondo2.jpg","fondo3.jpg","fondo4.jpg","fondo1.png","fondo2.png","fondo3.png","fondo4.png",
  ];

  const [change, setChange] = useState(0);
  const [index, setIndex] = useState(0);
  const changeImage = () => {
    if (change < backgroungImages.length - 1) {
      setChange(change + 1);
    } else {
      setChange(0);
    }
  };

  const random = () => {
    const randomPhrase = Math.floor(Math.random() * phrases.length - 1) + 1;
    setIndex(randomPhrase) 
      }
      const changeImageButton = () => {
        changeImage();
        random();
      };

  document.body.style = `background-image: url(${backgroungImages[change]})`;

  return (
    <>
  <article className='container'>

    <hi>GALLETAS DE LA FORTUNA</hi>
    
    <Galleta data={phrases[index]} />

    <div className='btn_phrase'>    
      <button onClick={changeImageButton}>
        <img src="/cookie.png" alt="img-cookie" />
      </button>
    </div>


  </article>


    </>
  );
}

export default App
