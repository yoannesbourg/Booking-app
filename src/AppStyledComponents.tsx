import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    height: 100vh;
    margin: 0 auto;
    margin-top: 60px;
`;

export const Paragraph = styled.p`
    margin-top: 16px;
`;

export const CardList = styled.div`
    margin-top: 16px;
`;

export const ButtonsWrapper = styled.div`
    padding: 32px 0;
    display: flex;
    justify-content: center;
`;

export const Button = styled.button`
    background: white;
    border: 1px solid #eceff1;
    box-shadow: 0px 0px 2px #2222224d;
    width: 40px;
    height: 32px;
    cursor: pointer;
    transition: ease-in-out 0.1s;
    &:hover {
        opacity: 0.8;
    }
`;

export const PrevButton = styled(Button)``;

export const NextButton = styled(Button)``;
