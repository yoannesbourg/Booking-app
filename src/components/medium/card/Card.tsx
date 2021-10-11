import React from 'react';
import { useDispatch } from 'react-redux';

import { updateCouple, deleteCouple } from '../../../service/bookedByCouples/actions';

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
        if (!value || !totalValue) {
            return 0;
        }
        return Math.round((value / totalValue) * 100);
    };

    const formatDate = (date: number) => {
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const constructedDate = new Date(date);
        return `${constructedDate.getDate()} ${
            monthNames[constructedDate.getMonth()]
        } ${constructedDate.getFullYear()}`;
    };

    const getDifferenceBetwwenDates = (date: number) => {
        const oneDay = 1000 * 60 * 60 * 24;
        const now = new Date().getTime();
        return Math.round((now - date) / oneDay);
    };

    return (
        <CardWrapper>
            <LeftColumn>
                <Photo image={props.profilePhoto}></Photo>
                <Infos>
                    <h4>{props.weddingDate ? formatDate(props.weddingDate) : 'No date yet'}</h4>
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
                        <p>Added {getDifferenceBetwwenDates(props.createdAt)} days ago</p>
                        <p>Checklist Completion {getPercentage(props.tasksDone, props.tasksTotal)}%</p>
                        <ProgressBackground>
                            <ProgressBar percent={getPercentage(props.tasksDone, props.tasksTotal)} />
                        </ProgressBackground>
                    </Details>
                </>
            )}
        </CardWrapper>
    );
};
export default Card;
