import { SkillsContainer, ColumnResume, ColumnData, ProgressBar, Progress } from './styles'

function Skills() {
    return (
        <SkillsContainer>
            <ColumnResume>
                <h2>Habilidades & <br />Experiência</h2>

                <p>Em meu ambiente profissional tenho atuado mais na área gerencial da Tecnologia da Informação, deixando a alguns anos o desenvolvimento somente como objetivo de estudo e para projetos pessoais.</p>
                
                <p>Porém, a partid início de 2022 tenho desprendido um esforço maior em meus estudos como DEV na tentativa de conseguir novas oportunidades, principalmente como Freelancer.</p>

                <p>Sendo assim tenho focado bastante meus estudos na Full Stack JavaScript e em todas as tecnologias que podem ser importantes no processo de trabalho de um DEV, por exemplo, Git, Docker, bancos de dados não relacionais, etc.</p>

                <p>Visite meu perfil no <span>GitHub</span> para mais detalhes ou entre em <span>contato</span> comigo.</p>
            </ColumnResume>

            <ColumnData>
                <p>HTML</p>
                <ProgressBar>
                    <Progress style={{width: '100%', backgroundColor: 'var(--brown)'}} />
                </ProgressBar>

                <p>CSS</p>
                <ProgressBar>
                    <Progress style={{width: '90%', backgroundColor: 'var(--purple)'}} />
                </ProgressBar>

                <p>React</p>
                <ProgressBar>
                    <Progress style={{width: '70%', backgroundColor: 'var(--yellow)'}} />
                </ProgressBar>

                <p>Node</p>
                <ProgressBar>
                    <Progress style={{width: '90%', backgroundColor: 'var(--pink)'}} />
                </ProgressBar>

                <p>Git</p>
                <ProgressBar>
                    <Progress style={{width: '60%', backgroundColor: 'var(--red)'}} />
                </ProgressBar>

                <p>Docker</p>
                <ProgressBar>
                    <Progress style={{width: '20%', backgroundColor: 'var(--blue)'}} />
                </ProgressBar>
            </ColumnData>
        </SkillsContainer>
    );
}

export default Skills;