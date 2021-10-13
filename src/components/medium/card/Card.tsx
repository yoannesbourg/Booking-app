import React from 'react';
import { useDispatch } from 'react-redux';

import { updateCouple, deleteCouple } from '../../../service/bookedByCouples/actions';

import {
    formatCoupleName,
    calculatePercentage,
    formatEpochDate,
    calculateDifferenceBetwwenDateAndNow,
} from '../../../utils/utils';

import { Couple as CoupleInteface } from '../../../service/StoreInterface';

import PrimaryButton from '../../small/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../small/SecondaryButton/SecondaryButton';
import {
    CardWrapper,
    LeftColumn,
    RightColumn,
    Photo,
    Infos,
    Couple,
    DeleteButton,
    Details,
    ProgressBackground,
    ProgressBar,
} from './Styled.components';

const Card = (props: CoupleInteface): JSX.Element => {
    const dispatch = useDispatch();

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

    return (
        <CardWrapper>
            <LeftColumn>
                <Photo image={props.profilePhoto}></Photo>
                <Infos>
                    <h4>{props.weddingDate ? formatEpochDate(props.weddingDate) : 'No date yet'}</h4>
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
                        <p>Added {calculateDifferenceBetwwenDateAndNow(props.createdAt)} days ago</p>
                        <p>Checklist Completion {calculatePercentage(props.tasksDone, props.tasksTotal)}%</p>
                        <ProgressBackground>
                            <ProgressBar percent={calculatePercentage(props.tasksDone, props.tasksTotal)} />
                        </ProgressBackground>
                    </Details>
                </>
            )}
        </CardWrapper>
    );
};
export default Card;
