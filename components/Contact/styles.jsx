import styled from "styled-components"

export const ContactContainer = styled.div`
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

    > input, textarea {
        border: none;
        border-bottom: 3px solid var(--lightgray);
        padding: 18px;
        margin-bottom: 16px;

        font-size: 16px;
        color: var(--white);

        background-color: var(--lightgray);
    }

    > input:focus, textarea:focus {
        outline: none;
        border-bottom: 3px solid var(--blue);
    }

    > button {
        width: 180px;

        padding: 8px 16px;
        border: none;
        border-radius: 8px;

        text-align: center;
        font-size: 14px;
        font-family: "Space Mono";
        color: var(--shadow);

        background-color: var(--gray);
    }

    > button:hover {
        background-color: var(--blue);
    }

    > button:active {
        background-color: var(--gray);
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
