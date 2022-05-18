import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/New.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Jeisel.dev</title>
                <meta name="description" content="Página pessoal do dev Jeisel Dias" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className={styles.Menu}>
                <div className={styles.Logo}>
                    <img src='./logo.png' alt='Jeisel Dev Logo' width={'125px'} height={'auto'} />
                </div>

                <div className={styles.Links}>
                    <ul>
                        <li>Sobre</li>
                        <li>Skills</li>
                        <li>Portfólio</li>
                        <li>Contato</li>
                    </ul>
                </div>

                <div className={styles.Shortcuts}>
                    <FontAwesomeIcon icon={faLinkedin} />
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
            </section>

            <section className={styles.Infos}></section>

            <section className={styles.Assistant}></section>
        </div>
  )
}
