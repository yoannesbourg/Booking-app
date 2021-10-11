import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import { fetchAllCouples } from './service/bookedByCouples/actions';

import Card from './components/medium/card/Card';
import Searchbar from './components/small/Searchbar/Searchbar';
import { Container, Paragraph, CardList } from './AppStyledComponents';

import { StoreState } from './service/StoreInterface';
import { filters } from './interfaces/Filters';

const App = (props: StoreState): JSX.Element => {
    const dispatch = useDispatch();
    const couplesList = props.CouplesReducer.data;

    const [filters, setLfilters] = useState<filters>({
        search: '',
    });

    const search = (value: string) => {
        setLfilters((prevFilters) => ({
            ...prevFilters,
            search: value.toLowerCase(),
        }));
    };

    useEffect(() => {
        dispatch(fetchAllCouples());
    }, []);
    return (
        <Container>
            <Searchbar handleSearch={search} />
            <h3>Your Bookings</h3>
            <Paragraph>
                If a booking is missing, ask your couple to mark your venue as booked in the Bridebook app,and they will
                appear below automatically.
            </Paragraph>
            <CardList>
                {couplesList &&
                    couplesList
                        .sort((couple) => (couple.collaborating ? 1 : -1))
                        .filter((couple) => couple.partners.join(' ').toLowerCase().includes(filters.search))
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
