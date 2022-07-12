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

            <section className={styles.Infos}>
                <div className={styles.Intro}>
                    <h1>
                        Olá, <br />
                        Eu sou o <span>Jeisel</span>, <br />
                        <strong>full stack</strong> developer
                    </h1>
                </div>

                <div className={styles.About}>
                    <div className={styles.ColumnResume}>
                        <h2>Sobre</h2>

                        <p>I’m a Front-End Developer located in Poland. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>

                        <p>Well-organised person, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor activities, TV series and English literature. A family person and father of two fractious boys,</p>

                        <p>Interested in the entire frontend spectrum and working on ambitious projects with positive people.</p>

                        <p><span>Let's make something special.</span></p>
                    </div>

                    <div className={styles.ColumnImage}>
                        <img src="./images/eu.png" alt="" />
                    </div>
                </div>

                <div className={styles.Skills}>
                    <div className={styles.ColumnResume}>
                        <h2>Habilidades & <br />Experiência</h2>

                        <p>Since beginning my journey as a freelance developer nearly 10 years ago, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use.</p>
                        
                        <p>I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.</p>

                        <p>I also have full-stack developer experience with popular open-source CMS like (WordPress, Drupal, Magento, Keystone.js and others) .</p>

                        <p>Visit my <span>LinkedIn</span> profile for more details or just <span>contact</span> me.</p>
                    </div>

                    <div className={styles.ColumnData}>
                        <p>Front-end</p>
                        <div className={styles.ProgressBar}>
                            <div className={styles.Progress} style={{width: '50%', backgroundColor: 'var(--brown)'}}></div>
                        </div>

                        <p>Front-end</p>
                        <div className={styles.ProgressBar}>
                            <div className={styles.Progress} style={{width: '50%', backgroundColor: 'var(--red)'}}></div>
                        </div>

                        <p>Front-end</p>
                        <div className={styles.ProgressBar}>
                            <div className={styles.Progress} style={{width: '50%', backgroundColor: 'var(--yellow)'}}></div>
                        </div>

                        <p>Front-end</p>
                        <div className={styles.ProgressBar}>
                            <div className={styles.Progress} style={{width: '50%', backgroundColor: 'var(--pink)'}}></div>
                        </div>
                    </div>
                </div>

                <div className={styles.Portfolio}>
                    <h2>Portfólio</h2>
                    
                    <div className={styles.Projects}>
                        <div className={styles.Work}>
                            <h3>Nome do projeto</h3>
                            <span>2022</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sem massa. Nulla tincidunt, quam at mollis aliquam, quam erat porttitor nunc, non dictum dui est id ligula.</p>

                            <div className={styles.WorkButtons}>
                                <a href='https://github.com/jeiseldias' target='_blank'>visitar</a>
                                <a href='https://github.com/jeiseldias' target='_blank'>repositório</a>
                            </div>
                        </div>

                        <div className={styles.Work}>
                            <h3>Nome do projeto</h3>
                            <span>2022</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sem massa. Nulla tincidunt, quam at mollis aliquam, quam erat porttitor nunc, non dictum dui est id ligula.</p>

                            <div className={styles.WorkButtons}>
                                <a href='https://github.com/jeiseldias' target='_blank'>visitar</a>
                                <a href='https://github.com/jeiseldias' target='_blank'>repositório</a>
                            </div>
                        </div>

                        <div className={styles.Work}>
                            <h3>Nome do projeto</h3>
                            <span>2022</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sem massa. Nulla tincidunt, quam at mollis aliquam, quam erat porttitor nunc, non dictum dui est id ligula.</p>

                            <div className={styles.WorkButtons}>
                                <a href='https://github.com/jeiseldias' target='_blank'>visitar</a>
                                <a href='https://github.com/jeiseldias' target='_blank'>repositório</a>
                            </div>
                        </div>

                        <div className={styles.Work}>
                            <h3>Nome do projeto</h3>
                            <span>2022</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sem massa. Nulla tincidunt, quam at mollis aliquam, quam erat porttitor nunc, non dictum dui est id ligula.</p>

                            <div className={styles.WorkButtons}>
                                <a href='https://github.com/jeiseldias' target='_blank'>visitar</a>
                                <a href='https://github.com/jeiseldias' target='_blank'>repositório</a>
                            </div>
                        </div>

                        <div className={styles.Work}>
                            <h3>Nome do projeto</h3>
                            <span>2022</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sem massa. Nulla tincidunt, quam at mollis aliquam, quam erat porttitor nunc, non dictum dui est id ligula.</p>

                            <div className={styles.WorkButtons}>
                                <a href='https://github.com/jeiseldias' target='_blank'>visitar</a>
                                <a href='https://github.com/jeiseldias' target='_blank'>repositório</a>
                            </div>
                        </div>

                        <div className={styles.Work}>
                            <h3>Nome do projeto</h3>
                            <span>2022</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sem massa. Nulla tincidunt, quam at mollis aliquam, quam erat porttitor nunc, non dictum dui est id ligula.</p>

                            <div className={styles.WorkButtons}>
                                <a href='https://github.com/jeiseldias' target='_blank'>visitar</a>
                                <a href='https://github.com/jeiseldias' target='_blank'>repositório</a>
                            </div>
                        </div>

                        <div className={styles.Work}>
                            <h3>Nome do projeto</h3>
                            <span>2022</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sem massa. Nulla tincidunt, quam at mollis aliquam, quam erat porttitor nunc, non dictum dui est id ligula.</p>

                            <div className={styles.WorkButtons}>
                                <a href='https://github.com/jeiseldias' target='_blank'>visitar</a>
                                <a href='https://github.com/jeiseldias' target='_blank'>repositório</a>
                            </div>
                        </div>

                        <div className={styles.Work}>
                            <h3>Nome do projeto</h3>
                            <span>2022</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sem massa. Nulla tincidunt, quam at mollis aliquam, quam erat porttitor nunc, non dictum dui est id ligula.</p>

                            <div className={styles.WorkButtons}>
                                <a href='https://github.com/jeiseldias' target='_blank'>visitar</a>
                                <a href='https://github.com/jeiseldias' target='_blank'>repositório</a>
                            </div>
                        </div>

                        <div className={styles.Work}>
                            <h3>Nome do projeto</h3>
                            <span>2022</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sem massa. Nulla tincidunt, quam at mollis aliquam, quam erat porttitor nunc, non dictum dui est id ligula.</p>

                            <div className={styles.WorkButtons}>
                                <a href='https://github.com/jeiseldias' target='_blank'>visitar</a>
                                <a href='https://github.com/jeiseldias' target='_blank'>repositório</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.Contact}>
                    <div className={styles.ColumnResume}>
                        <h2>Contato</h2>

                        <p>I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.</p>

                        <input type={"text"} placeholder="Nome" />
                        <input type={"text"} placeholder="E-mail" />
                        <input type={"text"} placeholder="Assunto" />
                        <textarea placeholder='Mensagem' rows={10}></textarea>
                        <button>Enviar mensagem</button>
                    </div>

                    <div className={styles.ColumnImage}>
                        MAPA
                    </div>
                </div>
            </section>
        </div>
  )
}
