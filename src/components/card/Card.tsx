import React from 'react';

import { Couple as CoupleInteface } from '../../service/StoreInterface';

import { CardWrapper, LeftColumn, RightColumn, Photo, Infos, Couple, CTAs } from './Styled.components';

const Card = (props: CoupleInteface): JSX.Element => {
    const formatCoupleName = (partnersArr: string[]) => {
        const coupleNamesSplited = partnersArr.map((partner) => partner.split(' '));
        const firstNames = coupleNamesSplited.map((arr: string[]) => (arr.length > 2 ? `${arr[0]} ${arr[1]}` : arr[0]));
        return firstNames.join(' & ');
    };

    return (
        <CardWrapper>
            <LeftColumn>
                <Photo image={props.profilePhoto}></Photo>
                <Infos>
                    <h4>{props.weddingDate}</h4>
                    <p>{props.guestsInitialTarget ? props.guestsInitialTarget : 0} guests</p>
                </Infos>
                <Couple>
                    <h4>{formatCoupleName(props.partners)}</h4>
                    <p>{props.users.find((user) => user.contacts.email.length > 0)?.contacts.email}</p>
                </Couple>
            </LeftColumn>
            <RightColumn>
                <CTAs>CTAs</CTAs>
            </RightColumn>
        </CardWrapper>
    );
};
export default Card;
