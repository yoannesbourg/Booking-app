import styled from 'styled-components';

export const Input = styled.input`
    border: 1px solid #2222224d;
    width: 240px;
    padding: 0.4em;
    border-radius: 4px;
    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px #2222224d;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;
