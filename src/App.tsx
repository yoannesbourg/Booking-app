import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchAllCouples } from './service/bookedByCouples/actions';

import { Container, Paragraph } from './AppStyledComponents';

const App = (): JSX.Element => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllCouples());
    }, []);
    return (
        <Container>
            <h3>Your Bookings</h3>
            <Paragraph>
                If a booking is missing, ask your couple to mark your venue as booked in the Bridebook app,and they will
                appear below automatically.
            </Paragraph>
        </Container>
    );
};
export default App;
