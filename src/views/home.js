import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>New Project</title>
        <meta property="og:title" content="New Project" />
      </Helmet>
      <div className={styles['container01']}>
        <iframe
          src="https://discord.com/widget?id=750093094371852470&amp;theme=dark"
          className={styles['iframe']}
        ></iframe>
      </div>
      <div className={styles['container02']}>
        <span className={styles['text']}>
          <span></span>
          <br></br>
          <span>Pagina en progreso.</span>
        </span>
      </div>
      <div className={styles['container03']}>
        <span className={styles['text03']}>
          <span></span>
          <br></br>
          <span>Â¿Por quÃ© aquÃ­?</span>
          <br></br>
          <span></span>
        </span>
      </div>
      <div className={styles['container04']}>
        <img
          alt="image"
          src="https://cdn.discordapp.com/avatars/696481341566615664/3056917b0bd0a4419b106d821bba98aa.webp?size=80"
          className={styles['image']}
        />
      </div>
      <div className={styles['container05']}>
        <span className={styles['text08']}>
          <span></span>
          <br></br>
          <span>
            Estoy constantemente ideando y creando software relacionado a
            servidores de videojuegos, acciendo a este servicio, tambien acceden
            a una gran libreria de software diseÃ±ado por mi con el fin de
            facilitar el manejamiento de servidores o aÃ±adiendo mecanicas de
            juego nuevas.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            Conste que siempre y cuando ande de buen humor, inclusive puedo
            darles una mano creando cosas para ustedes.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
      </div>
      <div className={styles['container06']}>
        <div className={styles['container07']}></div>
        <img
          alt="image"
          src="https://cdn.discordapp.com/attachments/925819476669255740/926046795698675732/794b7efe5d4114ad41e4f27cea1f04f9.png"
          className={styles['image1']}
        />
        <img
          alt="image"
          src="https://cdn.discordapp.com/attachments/925819476669255740/926046795501551656/R_28.png"
          className={styles['image2']}
        />
        <img
          alt="image"
          src="https://cdn.discordapp.com/attachments/925819476669255740/926046795983892480/thumb_205161.png"
          className={styles['image3']}
        />
      </div>
      <div className={styles['container08']}>
        <span className={styles['text13']}>
          <span>
            Es muy sencillo, no hay truco. Yo no obtengo ninguna ganancia de
            esto, menos lo hago con fin de lucrar.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span></span>
          <span>
            Los servidores son de buena calidad y para siempre. sÃ­, para siempre
            y cuando hagas un buen uso de ellos ye mantengas un comportamiento
            apropiado.
          </span>
          <span></span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            Conste y reitero, al ser un servicio gratis esta sujeto a quedar
            inutilizable por periodos de tiempo cortos, como puede ser 24hs para
            actualizaciones, cambios, etc.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            Cualquier duda es tan fÃ¡cil como contactar a Hath.#0975
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            mediante discord, para una version mas detallada de como acceder y
            utilizar este servicio.
          </span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div className={styles['container09']}>
        <button className={` ${styles['button']} ${projectStyles['button']} `}>
          Novedades
        </button>
        <a
          href="https://www.paypal.me/lautarodelapuente"
          target="_blank"
          rel="noreferrer noopener"
          className={` ${styles['link']} ${projectStyles['button']} `}
        >
          Donar
        </a>
        <a
          href="https://prueba.hath.dev"
          target="_blank"
          rel="noreferrer noopener"
          className={` ${styles['link1']} ${projectStyles['button']} `}
        >
          Panel
        </a>
        <a
          href="https://discord.com/invite/aEMv4m6UHk"
          target="_blank"
          rel="noreferrer noopener"
          className={` ${styles['link2']} ${projectStyles['button']} `}
        >
          Discord
        </a>
      </div>
      <div className={styles['container10']}>
        <span className={styles['text27']}>
          <span>Â¿Cual es el truco?</span>
          <br></br>
          <span></span>
        </span>
      </div>
      <span className={styles['text31']}>
        <span className={styles['text32']}>Hath Hosting</span>
        <span className={styles['text33']}></span>
      </span>
      <img
        alt="image"
        src="https://cdn.discordapp.com/attachments/925819476669255740/926042675046678608/unknown.png"
        loading="lazy"
        className={styles['image4']}
      />
      <div className={styles['container11']}>
        <img
          alt="image"
          src="https://cdn.discordapp.com/avatars/696481341566615664/3056917b0bd0a4419b106d821bba98aa.webp?size=80"
          className={styles['image5']}
        />
        <span className={styles['text34']}>
          CEO de Hath Hosting
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className={styles['text35']}>Hath.#0975</span>
      </div>
      <a
        href="https://github.com/LautaroDeLaPuente"
        target="_blank"
        rel="noreferrer noopener"
        className={styles['link3']}
      >
        <img
          alt="image"
          src="https://th.bing.com/th/id/R.724794164fb289dd2f7d69dde7ac3bc0?rik=0Ubh3aP6JzCPcw&amp;riu=http%3a%2f%2fpngimg.com%2fuploads%2fgithub%2fgithub_PNG40.png&amp;ehk=vDH1g6b2G5qphfQR7RsUJ7HmqSSwIMycien%2fvBj03ZU%3d&amp;risl=&amp;pid=ImgRaw&amp;r=0"
          className={styles['image6']}
        />
      </a>
      <a
        href="https://www.youtube.com/channel/UCxC9S011S2pPRd7-jHZhZoQ"
        target="_blank"
        rel="noreferrer noopener"
        className={styles['link4']}
      >
        <img
          alt="image"
          src="https://th.bing.com/th/id/R.2404bf5d731e3a315597cf1a27990f97?rik=9KXtMKrH199Gkg&amp;riu=http%3a%2f%2fpngimg.com%2fuploads%2fyoutube%2fyoutube_PNG15.png&amp;ehk=sD%2bRn%2ff1F0Eu5VHYQYfg7UotTt%2blz3MFtm8%2bkXmSzpc%3d&amp;risl=&amp;pid=ImgRaw&amp;r=0"
          className={styles['image7']}
        />
      </a>
    </div>
  )
}

export default Home
