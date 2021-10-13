import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import { fetchAllCouples } from './service/bookedByCouples/actions';

import Card from './components/medium/card/Card';
import Searchbar from './components/small/Searchbar/Searchbar';
import { Container, Paragraph, CardList, PrevButton, NextButton, ButtonsWrapper } from './AppStyledComponents';

import { StoreState } from './service/StoreInterface';
import { filters } from './interfaces/Filters';

const App = (props: StoreState): JSX.Element => {
    const dispatch = useDispatch();
    const couplesList = props.CouplesReducer.data;

    const [filters, setLfilters] = useState<filters>({
        search: '',
        pagination: {
            currentpage: 1,
            itemsPerPage: 7,
            itemListLength: 0,
        },
    });

    const { currentpage, itemsPerPage, itemListLength } = filters.pagination;
    const { search } = filters;

    const handleSearch = (value: string) => {
        setLfilters((prevFilters) => ({
            ...prevFilters,
            search: value.toLowerCase(),
        }));
    };

    const handlePagination = (prev: boolean) => {
        setLfilters((prevFilters) => ({
            ...prevFilters,
            pagination: {
                ...prevFilters.pagination,
                currentpage: prev ? prevFilters.pagination.currentpage - 1 : prevFilters.pagination.currentpage + 1,
            },
        }));
    };

    useEffect(() => {
        dispatch(fetchAllCouples());
    }, []);

    useEffect(() => {
        setLfilters((prevFilters) => ({
            ...prevFilters,
            pagination: {
                ...prevFilters.pagination,
                itemListLength: couplesList.length,
            },
        }));
    }, [couplesList]);

    const filteredList = couplesList
        .sort((couple) => (couple.collaborating ? 1 : -1))
        .filter((couple) => {
            return couple.partners.join(' ').toLowerCase().includes(filters.search);
        })
        .filter((couple, i) => {
            if (search.length < 1) {
                return (
                    i <= filters.pagination.currentpage * filters.pagination.itemsPerPage &&
                    i >
                        filters.pagination.currentpage * filters.pagination.itemsPerPage -
                            filters.pagination.itemsPerPage
                );
            } else {
                return couple;
            }
        })
        .map((couple) => {
            return <Card key={couple.id} {...couple} />;
        });

    return (
        <Container>
            <Searchbar handleSearch={handleSearch} />
            <h3>Your Bookings</h3>
            <Paragraph>
                If a booking is missing, ask your couple to mark your venue as booked in the Bridebook app,and they will
                appear below automatically.
            </Paragraph>
            <CardList>{couplesList ? filteredList : <p>Loading</p>}</CardList>
            {/* Pagination */}
            {search.length < 1 && (
                <ButtonsWrapper>
                    {currentpage > 1 && <PrevButton onClick={() => handlePagination(true)}>Prev</PrevButton>}
                    {!(currentpage * itemsPerPage > itemListLength) && (
                        <NextButton onClick={() => handlePagination(false)}>Next</NextButton>
                    )}
                </ButtonsWrapper>
            )}
        </Container>
    );
};
const mapStateToProps = (state: StoreState) => ({
    CouplesReducer: state.CouplesReducer,
});

export default connect(mapStateToProps)(App);
