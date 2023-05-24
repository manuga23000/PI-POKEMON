import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getPokemons,
    orderPokemon,
    getTypes,
    filterByType,
    clearTypeFilter,
    getAllPokemons,
} from '../../redux/actions';
import Filters from '../../components/Filters/Filters';
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import { Container } from './StyleHome';

const Home = () => {
    const dispatch = useDispatch();
    const [sortOrder, setSortOrder] = useState(null);
    const types = useSelector((state) => state.types);
    const [selectedType, setSelectedType] = useState('');

    useEffect(() => {
        dispatch(getPokemons());
        dispatch(getTypes());
        dispatch(getAllPokemons());
    }, [dispatch]);

    const handleSortOrderChange = (order) => {
        setSortOrder(order);
        dispatch(orderPokemon(order));
        dispatch(clearTypeFilter());
    };

    const handleTypeChange = (type) => {
        setSelectedType(type);
        dispatch(filterByType(type));
    };

    const handleClearFilter = () => {
        setSelectedType('');
        dispatch(clearTypeFilter());
        dispatch(getPokemons());
    };

    return (
        <Container>
            <Filters
                onSortOrderChange={handleSortOrderChange}
                types={types}
                selectedType={selectedType}
                onTypeChange={handleTypeChange}
                onClearFilter={handleClearFilter}
            />
            <CardsContainer sortOrder={sortOrder} selectedType={selectedType} />
        </Container>
    );
};

export default Home;
