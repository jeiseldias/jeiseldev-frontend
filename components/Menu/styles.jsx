import styled from "styled-components"

export const MenuContainer = styled.div`
    width: 135px;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: var(--shadow);
`

export const Logo = styled.div`
    width: 135px;
    height: 180px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--black);
`

export const Links = styled.div`
    padding: 5vw 0;

    > ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    > ul li {
        cursor: pointer;

        border-top: 1px solid var(--border);

        display: flex;
        justify-content: center;
        align-items: center;

        padding: 1em 0;

        color: var(--gray);
    }

    > ul li:hover {
        color: var(--blue);
    }

    > ul li:last-child {
        border-top: 1px solid var(--border);
        border-bottom: 1px solid var(--border);

        display: flex;
        justify-content: center;
        align-items: center;

        padding: 1em 0;
    }
`

export const Shortcuts= styled.div`
    display: flex;
    justify-content: space-around;

    padding: 0 20px 20vh 20px;
    
    color: var(--gray);
`