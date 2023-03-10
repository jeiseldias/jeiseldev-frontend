import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/New.module.css'

import { GoogleMap, useLoadScript, InfoBox } from '@react-google-maps/api'

import Menu from '../components/Menu'
import Intro from '../components/Intro'
import About from '../components/About'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Jeisel.dev</title>
                <meta name="description" content="Página pessoal do dev Jeisel Dias" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Menu />

            <section className={styles.Infos}>
                <Intro />
                <About />
                <Skills />
                <Portfolio />
                
            </section>
        </div>
  )
}
