import styled from "styled-components"

export const PortfolioContainer = styled.div`
    width: calc((100vw - 235px));
    height: auto;

    margin-bottom: 100px;
    
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

export const Projects = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const Work = styled.div`
    max-width: calc(25% - 10px);
    height: 260px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-basis: calc(25% - 10px);
    flex-grow: 1;

    margin: 5px;

    background-color: var(--shadow);

    padding: 20px;
`

export const WorkButtons = styled.div`
    display: flex;
    justify-content: space-between;

    > a {
        width: 120px;

        padding: 8px 16px;
        border-radius: 8px;

        text-align: center;
        font-size: 14px;
        font-family: "Space Mono";
        color: var(--shadow);

        background-color: var(--gray);
    }

    > a:hover {
        background-color: var(--blue);
        color: var(--white);
    }

    > a:active {
        background-color: var(--blue);
        color: var(--white);
    }
`

export const WorkInfos = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:start;

    > h3 {
        text-transform:uppercase;
        font-size: 22px;
        margin: 0;
        margin-bottom:4px;
    }

    > span, p {
        font-size: 14px;
        font-family: "Space Mono";
        line-height: 18px;
        color: var(--gray);
    }
`
