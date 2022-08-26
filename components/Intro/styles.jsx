import styled from "styled-components"

export const IntroContainer = styled.div`
    width: calc((100vw - 235px));
    height: calc(100vh - 100px);

    margin-bottom: 50px;

    display: flex;
    align-items: center;

    > h1 {
        font-size: 8rem;
        line-height: 7.5rem;
        color: var(--white);
        margin: 0;
        padding: 0;

        font-family: 'Bebas Neue', cursive;
        font-weight: bolder;
        letter-spacing: 5px;
    }

    > h1 span {
        color: var(--green);
    }

    > h1 strong {
        color: var(--blue);
    }
`