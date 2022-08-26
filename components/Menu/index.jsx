import { MenuContainer, Logo, Links, Shortcuts } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

function Menu() {
    return (
        <MenuContainer>
            <Logo>
                <img src='./logo.png' alt='Jeisel Dev Logo' width={'125px'} height={'auto'} />
            </Logo>

            <Links>
                <ul>
                    <li>Sobre</li>
                    <li>Skills</li>
                    <li>Portfólio</li>
                    <li>Contato</li>
                </ul>
            </Links>

            <Shortcuts>
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faInstagram} />
            </Shortcuts>
        </MenuContainer>
    );
}

export default Menu;