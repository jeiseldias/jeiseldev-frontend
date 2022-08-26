import styled from "styled-components"

export const AboutContainer = styled.div`
    width: calc((100vw - 235px));
    height: calc(100vh - 100px);

    margin-bottom: 50px;

    display: flex;
    justify-content: center;
`

export const ColumnResume = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;

    > p span {
        color: var(--blue);
    }

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

export const ColumnImage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;

    align-items: center;

    > img {
        max-width: 70%;
        border-radius: 50%;
    }
`