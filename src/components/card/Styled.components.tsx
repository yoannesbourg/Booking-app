import styled from 'styled-components';

export const CardWrapper = styled.div`
    background-color: white;
    width: 100%;
    min-height: 100px;
    margin-top: 8px;
    border: 1px solid #eceff1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
`;

export const LeftColumn = styled.div`
    display: flex;
    position: relative;
`;

export const RightColumn = styled.div``;

export const CardElement = styled.div`
    margin-right: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Photo = styled(CardElement)`
    background-image: url(${(props: { image: string }) => props.image && props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 100px;
    display: flex;
    align-items: center;
    width: 100px;
`;

export const Infos = styled(CardElement)`
    min-height: 100px;
    width: 200px;
`;

export const Couple = styled(CardElement)`
    min-height: 100px;
    display: flex;
    align-items: start;
    text-align: left;
`;

export const CTAs = styled.div``;
