import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    filterByType,
    clearTypeFilter,
    filterByCreate,
} from '../../redux/actions';
import { Select, FilterContainer } from './StyleFilters';

const Filters = ({ onSortOrderChange, types }) => {
    const dispatch = useDispatch();
    const [selectOrder, setSelectOrder] = useState('');

    const handleOrderChange = (event) => {
        const order = event.target.value;
        onSortOrderChange(order);
        setSelectOrder(order);
    };

    const handleTypeChange = (type) => {
        dispatch(filterByType(type));
        if (type === '') {
            dispatch(clearTypeFilter());
        }
    };

    const handleCreated = (event) => {
        dispatch(filterByCreate(event.target.value));
        onSortOrderChange(0);
    };

    return (
        <FilterContainer>
            <Select onChange={handleOrderChange} value={selectOrder}>
                <option value="alph">Sort Alphabetically</option>
                <option value="asc">Ascending (A-Z)</option>
                <option value="desc">Descending (Z-A)</option>
            </Select>
            <Select onChange={handleOrderChange} value={selectOrder}>
                <option value="attack">Sort by Attack</option>
                <option value="more">More (+)</option>
                <option value="less">Less (-)</option>
            </Select>
            <Select onChange={handleCreated}>
                <option value="Origin">Filter by Origin</option>
                <option value="all">All Pokemons</option>
                <option value="created">Created</option>
                <option value="api">Api</option>
            </Select>
            <Select onChange={(e) => handleTypeChange(e.target.value)}>
                <option value="Types">Filter by Types</option>
                {types.map((type) => (
                    <option key={type.id} value={type.name}>
                        {type.name}
                    </option>
                ))}
            </Select>
        </FilterContainer>
    );
};

export default Filters;
