import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Jeisel.dev</title>
                <meta name="description" content="Página pessoal do dev Jeisel Dias" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className={styles.Logo}>
                <Image src='/logo.png' alt='Logo jeisel.dev' width={125} height={125} />
            </section>

            <section className={styles.SocialMedia}>
                <ul>
                    <li>
                        <a href='https://www.linkedin.com/in/jeisel/' target='_blank' rel='noopener'>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>

                    <li>
                        <a href='https://github.com/jeiseldias' target='_blank' rel='noopener'>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>

                    <li>
                        <a href='https://www.instagram.com/jeiselsilva/' target='_blank' rel='noopener'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                </ul>
            </section>
        </div>
  )
}
