import styled from 'styled-components';

export const SecondaryButtonStyling = styled.button`
    border: 1px solid #2ebaa7;
    color: #2ebaa7;
    background: transparent;
    padding: 8px 16px;
    border-radius: 16px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 10px;

    &:hover {
        border: 1px solid #da4f4f;
        color: #da4f4f;
        content: 'hello';
    }
`;
