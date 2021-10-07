import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllCouples } from './service/bookedByCouples/actions';
import Card from './components/card/Card';
import { Container, Paragraph, CardList } from './AppStyledComponents';

import { StoreState } from './service/StoreInterface';

const App = (): JSX.Element => {
    const dispatch = useDispatch();

    const couplesList = useSelector((state: StoreState) => state.CouplesReducer.data);
    useEffect(() => {
        dispatch(fetchAllCouples());
        // console.log(couplesList);
    }, []);
    return (
        <Container>
            <h3>Your Bookings</h3>
            <Paragraph>
                If a booking is missing, ask your couple to mark your venue as booked in the Bridebook app,and they will
                appear below automatically.
            </Paragraph>
            <CardList>
                {couplesList &&
                    couplesList.map((couple) => {
                        return <Card key={couple.id} {...couple} />;
                    })}
            </CardList>
        </Container>
    );
};
export default App;
