
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import styles from './App.module.css'

import fundo from './assets/stars-background.jpg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
      </header>

      <body>
        <section className={styles.secaoInicial}>
          <div className={styles.containerFundo}>
            <div className={styles.imagemFundo}>
              <img src={fundo}
                className={styles.fundo}
              />
            </div>

            <div className={styles.sombra} />



          </div>

          <div className={styles.chamada}>
            <h1 className={styles.titulo}>As Maiores Estrelas Nasceram de Pequenas Poeiras</h1>

            <h2 className={styles.subTitulo}>Dê uma oportunidade a um estagiário!</h2>

            <h3 className={styles.destinatario}>De: Vinícius</h3>
            <h3 className={styles.destinatario}>Para: Contratante</h3>
          </div>

        </section>

        <section>

          <h1 className={styles.chamadaHabilidades}>Minhas Habilidades</h1>

          <div className={styles.cards}>
            
            <div className={styles.card}>
              <h1 className={styles.textoCard}>Item 1</h1>
            </div>

            <div className={styles.card}>
              <h1 className={styles.textoCard}>Item 2</h1>
            </div>

            <div className={styles.card}>
              <h1 className={styles.textoCard}>Item 3</h1>
            </div>

          </div>
        </section>
      </body>

    </>
  )
}

export default App
