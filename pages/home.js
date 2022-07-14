import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/New.module.css'

import { GoogleMap, useLoadScript, InfoBox } from '@react-google-maps/api'

export default function Home() {
    const { isLoaded } = useLoadScript({ 
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    const MapCenter = {lat:-22.732, lng: -45.114};
    const MapOptions = {
        disableDefaultUI: true,
        disableDoubleClickZoom: true,
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": "-100"
                    },
                    {
                        "lightness": "30"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "gamma": "0.00"
                    },
                    {
                        "lightness": "74"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "all",
                "stylers": [
                    {
                        "lightness": "3"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            }
        ]
    };

    if (!isLoaded) return <div>Loading</div>;

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

                        <p>Sou um desenvolvedor brasileiro. Tenho paixão pela área de desenvolvimento de um modo geral. Iniciei meus estudos através do Visual Basic no final da década de 90 e de lá pra cá tive contato com as mais diversas tecnologias.</p>

                        <p>Sou uma pessoa organizada com um bom raciocínio lógico e muita curiosidade em aprender coisas novas. Sou um fã de futebol, séries, filmes, livros e jogos. Um cara familiar e pai de três filhas.</p>

                        <p>Interessado em projetos full stack JavaScript e em trabalhar em projetos ambiciosos e pessoas positivas.</p>

                        <p><span>Vamos criar algo especial juntos?</span></p>
                    </div>

                    <div className={styles.ColumnImage}>
                        <img src="./images/eu.png" alt="" />
                    </div>
                </div>

                <div className={styles.Skills}>
                    <div className={styles.ColumnResume}>
                        <h2>Habilidades & <br />Experiência</h2>

                        <p>Em meu ambiente profissional tenho atuado mais na área gerencial da Tecnologia da Informação, deixando a alguns anos o desenvolvimento somente como objetivo de estudo e para projetos pessoais.</p>
                        
                        <p>Porém, a partid início de 2022 tenho desprendido um esforço maior em meus estudos como DEV na tentativa de conseguir novas oportunidades, principalmente como Freelancer.</p>

                        <p>Sendo assim tenho focado bastante meus estudos na Full Stack JavaScript e em todas as tecnologias que podem ser importantes no processo de trabalho de um DEV, por exemplo, Git, Docker, bancos de dados não relacionais, etc.</p>

                        <p>Visite meu perfil no <span>GitHub</span> para mais detalhes ou entre em <span>contato</span> comigo.</p>
                    </div>

                    <div className={styles.ColumnData}>
                        <p>HTML</p>
                        <div className={styles.ProgressBar}>
                            <div className={styles.Progress} style={{width: '100%', backgroundColor: 'var(--brown)'}}></div>
                        </div>

                        <p>CSS</p>
                        <div className={styles.ProgressBar}>
                            <div className={styles.Progress} style={{width: '100%', backgroundColor: 'var(--red)'}}></div>
                        </div>

                        <p>React</p>
                        <div className={styles.ProgressBar}>
                            <div className={styles.Progress} style={{width: '70%', backgroundColor: 'var(--yellow)'}}></div>
                        </div>

                        <p>Node</p>
                        <div className={styles.ProgressBar}>
                            <div className={styles.Progress} style={{width: '90%', backgroundColor: 'var(--pink)'}}></div>
                        </div>

                        <p>Git</p>
                        <div className={styles.ProgressBar}>
                            <div className={styles.Progress} style={{width: '60%', backgroundColor: 'var(--purple)'}}></div>
                        </div>

                        <p>Docker</p>
                        <div className={styles.ProgressBar}>
                            <div className={styles.Progress} style={{width: '0', backgroundColor: 'var(--green)'}}></div>
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

                        <p>Estou a procura de novas oportunidades como Freelancer, mas caso você outra proposta ou pergunta, não hesite em utilizar o formulário abaixo</p>

                        <input type={"text"} placeholder="Nome" />
                        <input type={"text"} placeholder="E-mail" />
                        <input type={"text"} placeholder="Assunto" />
                        <textarea placeholder='Mensagem' rows={10}></textarea>
                        <button>Enviar mensagem</button>
                    </div>

                    <div className={styles.ColumnData}>
                        <GoogleMap 
                            zoom={18} 
                            center={MapCenter} 
                            clickableIcons={false}
                            options={MapOptions}
                            mapContainerClassName="map-container"
                        ></GoogleMap>
                    </div>
                </div>
            </section>
        </div>
  )
}
