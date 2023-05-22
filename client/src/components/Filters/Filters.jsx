import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    filterByType,
    clearTypeFilter,
    filterByCreate,
} from '../../redux/actions';
import { Button, Select, Div } from './StyleFilters';

const Filters = ({ onSortOrderChange, types }) => {
    const dispatch = useDispatch();
    const [isOpenSort, setIsOpenSort] = useState(false);
    const [isOpenFilters, setIsOpenFilters] = useState(false);
    const [selectOrder, setSelectOrder] = useState('');

    const handleOrderChange = (event) => {
        const order = event.target.value;
        dispatch(clearTypeFilter());
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

    const toggleSort = () => {
        setIsOpenSort(!isOpenSort);
        setIsOpenFilters(false);
    };

    const toggleFilters = () => {
        setIsOpenFilters(!isOpenFilters);
        setIsOpenSort(false);
    };

    return (
        <div>
            <Button onClick={toggleSort}>Sort</Button>
            <Button onClick={toggleFilters}>Filters</Button>
            {isOpenSort && (
                <Div>
                    <Select onChange={handleOrderChange} value={selectOrder}>
                        <option value="alph">Alphabetical</option>
                        <option value="asc">Ascending (A-Z)</option>
                        <option value="desc">Descending (Z-A)</option>
                    </Select>
                    <Select onChange={handleOrderChange} value={selectOrder}>
                        <option value="attack">Attack</option>
                        <option value="less">Less (-)</option>
                        <option value="more">More (+)</option>
                    </Select>
                </Div>
            )}
            {isOpenFilters && (
                <Div>
                    <Select onChange={handleCreated}>
                        <option value="all">All</option>
                        <option value="created">Created</option>
                        <option value="api">Api</option>
                    </Select>
                    <Select onChange={(e) => handleTypeChange(e.target.value)}>
                        <option value="">Types</option>
                        {types.map((type) => (
                            <option key={type.id} value={type.name}>
                                {type.name}
                            </option>
                        ))}
                    </Select>
                </Div>
            )}
        </div>
    );
};

export default Filters;
//s
