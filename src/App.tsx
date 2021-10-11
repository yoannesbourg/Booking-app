import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import { fetchAllCouples } from './service/bookedByCouples/actions';
import Card from './components/medium/card/Card';
import { Container, Paragraph, CardList } from './AppStyledComponents';

import { StoreState } from './service/StoreInterface';

const App = (props: StoreState): JSX.Element => {
    const dispatch = useDispatch();
    const couplesList = props.CouplesReducer.data;
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
            <CardList>
                {couplesList &&
                    couplesList
                        .sort((value) => (value.collaborating ? 1 : -1))
                        .map((couple) => {
                            return <Card key={couple.id} {...couple} />;
                        })}
            </CardList>
        </Container>
    );
};
const mapStateToProps = (state: StoreState) => ({
    CouplesReducer: state.CouplesReducer,
});

export default connect(mapStateToProps)(App);
