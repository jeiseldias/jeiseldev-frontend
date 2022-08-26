import styled from "styled-components"

export const SkillsContainer = styled.div`
    width: calc((100vw - 235px));
    height: calc(100vh - 100px);

    margin-bottom: 50px;

    display: flex;
    justify-content: center;

    flex-direction: row-reverse;
`

export const ColumnResume = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;

    > h2 {
        font-size: 4rem;
        line-height: 4rem;
        color: var(--green);
        margin: 0;
        margin-bottom: 50px;
        padding: 0;

        font-family: 'Bebas Neue', cursive;
        font-weight: bolder;
        letter-spacing: 5px;
    }
`

export const ColumnData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;

    margin-left: 20px;
    margin-right: 20px;
`

export const ProgressBar = styled.div`
    width: 100%;
    height: 5px;

    border-radius: 5px;
    margin-bottom: 30px;

    background-color: var(--gray);
`

export const Progress = styled.div`
    height: 5px;
    border-radius: 5px;
`
