import React from 'react';
import { useDispatch } from 'react-redux';

import { updateCouple, deleteCouple } from '../../../service/bookedByCouples/actions';

import { Couple as CoupleInteface } from '../../../service/StoreInterface';

import PrimaryButton from '../../small/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../small/SecondaryButton/SecondaryButton';
import { CardWrapper, LeftColumn, RightColumn, Photo, Infos, Couple, DeleteButton, Details } from './Styled.components';

const Card = (props: CoupleInteface): JSX.Element => {
    const dispatch = useDispatch();

    const formatCoupleName = (partnersArr: string[]) => {
        const coupleNamesSplited = partnersArr.map((partner) => partner.split(' '));
        const firstNames = coupleNamesSplited.map((arr: string[]) => (arr.length > 2 ? `${arr[0]} ${arr[1]}` : arr[0]));
        return firstNames.join(' & ');
    };

    const handleConfirmBooking = () => {
        const updatedCouple = { ...props };
        updatedCouple.collaborating = true;
        dispatch(updateCouple(updatedCouple));
    };

    const handleDeleteCouple = () => {
        dispatch(deleteCouple(props.id));
    };

    const handleDisconnect = () => {
        const updatedCouple = { ...props };
        updatedCouple.collaborating = false;
        dispatch(updateCouple(updatedCouple));
    };

    const getPercentage = (value: number, totalValue: number) => {
        return (value / totalValue) * 100;
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
            {!props.collaborating ? (
                <RightColumn>
                    <PrimaryButton text="Confirm booking" action={handleConfirmBooking} />
                    <DeleteButton onClick={handleDeleteCouple}>Not my booking</DeleteButton>
                </RightColumn>
            ) : (
                <>
                    <SecondaryButton text="Connected" hoverText="Disconnect" action={handleDisconnect} />
                    <Details>
                        <p>Added {props.createdAt} days ago</p>
                        <p>Checklist Completion </p>
                        {props.tasksDone && props.tasksTotal
                            ? ' ' + getPercentage(props.tasksDone, props.tasksTotal)
                            : '0'}
                    </Details>
                </>
            )}
        </CardWrapper>
    );
};
export default Card;
