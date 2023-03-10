import { PortfolioContainer, Projects, Work, WorkButtons, WorkInfos } from './styles'

function Portfolio() {
    return (
        <PortfolioContainer>
            <h2>Portfólio</h2>
            
            <Projects>
                <Work>
                    <WorkInfos>
                        <h3>Travely</h3>
                        <span>2023</span>
                        <p>Um projeto montado com propósito de estudo de frontend. O intuíto era estudar a utilização de componentes em uma aplicação react com styled-components.</p>
                    </WorkInfos>

                    <WorkButtons>
                        <a href='https://travely.jeisel.dev' target='_blank' rel="noreferrer">visitar</a>
                        <a href='https://github.com/jeiseldias/travely' target='_blank' rel="noreferrer">repositório</a>
                    </WorkButtons>
                </Work>

                <Work>
                    <WorkInfos>
                        <h3>Opções</h3>
                        <span>2023</span>
                        <p>Um gerador de gráficos de payoff de estratégias com opções no mercado financeiro.</p>
                    </WorkInfos>

                    <WorkButtons>
                        <a href='https://opcoes.jeisel.dev' target='_blank' rel="noreferrer">visitar</a>
                        <a href='https://github.com/jeiseldias/opcoes' target='_blank' rel="noreferrer">repositório</a>
                    </WorkButtons>
                </Work>

                <Work>
                    <WorkInfos>
                        <h3>Pomodoro</h3>
                        <span>2022</span>
                        <p>Um cronômetro para gerenciamento de tempo através da utilização da técnica de pomodoro.</p>
                    </WorkInfos>

                    <WorkButtons>
                        <a href='https://pomodoro.jeisel.dev' target='_blank' rel="noreferrer">visitar</a>
                        <a href='https://github.com/jeiseldias/Pomodoro' target='_blank' rel="noreferrer">repositório</a>
                    </WorkButtons>
                </Work>

                <Work>
                    <WorkInfos>
                        <h3>Rachaê</h3>
                        <span>2022</span>
                        <p>Uma calculadora para divisão de contas em restaurantes.</p>
                    </WorkInfos>

                    <WorkButtons>
                        <a href='https://rachae.jeisel.dev' target='_blank' rel="noreferrer">visitar</a>
                        <a href='https://github.com/jeiseldias/rachae' target='_blank' rel="noreferrer">repositório</a>
                    </WorkButtons>
                </Work>

                <Work>
                    <WorkInfos>
                        <h3>Fezinha</h3>
                        <span>2022</span>
                        <p>Um gerador de palpites para jogos da Mega Sena.</p>
                    </WorkInfos>

                    <WorkButtons>
                        <a href='https://fezinha.com.br' target='_blank' rel="noreferrer">visitar</a>
                        <a href='https://github.com/jeiseldias/fezinha' target='_blank' rel="noreferrer">repositório</a>
                    </WorkButtons>
                </Work>

                <Work>
                    <WorkInfos>
                        <h3>Mercado magic</h3>
                        <span>2022</span>
                        <p>Um site para comercialização de cartas do jogo Magic the Gathering.</p>
                    </WorkInfos>

                    <WorkButtons>
                        <a href='https://mercadomagic.com.br' target='_blank' rel="noreferrer">visitar</a>
                        <a href='https://github.com/jeiseldias/mercadomagic-frontend' target='_blank' rel="noreferrer">repositório</a>
                    </WorkButtons>
                </Work>

            </Projects>
        </PortfolioContainer>
    );
}

export default Portfolio;