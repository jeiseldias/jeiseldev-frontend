import { AboutContainer, ColumnResume, ColumnImage } from './styles'

function About() {
    return (
        <AboutContainer>
            <ColumnResume>
                <h2>Sobre</h2>

                <p>Sou um desenvolvedor brasileiro. Tenho paixão pela área de desenvolvimento de um modo geral. Iniciei meus estudos através do Visual Basic no final da década de 90 e de lá pra cá tive contato com as mais diversas tecnologias.</p>

                <p>Sou uma pessoa organizada com um bom raciocínio lógico e muita curiosidade em aprender coisas novas. Sou um fã de futebol, séries, filmes, livros e jogos. Um cara familiar e pai de três filhas.</p>

                <p>Interessado em projetos full stack JavaScript e em trabalhar em projetos ambiciosos e pessoas positivas.</p>

                <p><span>Vamos criar algo especial juntos?</span></p>
            </ColumnResume>

            <ColumnImage>
                <img src="./images/eu.png" alt="" />
            </ColumnImage>
        </AboutContainer>
    );
}

export default About;