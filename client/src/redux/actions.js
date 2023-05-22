// actions.js
import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_BY_NAME = 'GET_BY_NAME';
export const GET_BY_ID = 'GET_BY_ID';
export const GET_TYPES = 'GET_TYPES';
export const POST_POKEMONS = 'POST_POKEMONS';
export const ORDER_ASCENDING = 'ORDER_ASCENDING';
export const ORDER_DESCENDING = 'ORDER_DESCENDING';
export const ORDER_ATTACK_ASCENDING = 'ORDER_ATTACK_ASCENDING';
export const ORDER_ATTACK_DESCENDING = 'ORDER_ATTACK_DESCENDING';
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE';
export const ORDER_POKEMON = 'ORDER_POKEMON';
export const CLEAR_TYPE_FILTER = 'CLEAR_TYPE_FILTER';
export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const FILTER_BY_CREATE = 'FILTER_BY_CREATE';

export const filterByCreate = (payload) => {
    return {
        type: FILTER_BY_CREATE,
        payload,
    };
};

export function getAllPokemons() {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:3001/pokemons');
        return dispatch({
            type: GET_ALL_POKEMONS,
            payload: json.data,
        });
    };
}

export const clearTypeFilter = () => {
    return {
        type: CLEAR_TYPE_FILTER,
    };
};

export const filterByType = (type) => {
    return {
        type: FILTER_BY_TYPE,
        payload: type,
    };
};

export const orderPokemon = (sortOrder) => {
    return async function (dispatch, getState) {
        const { pokemons } = getState();
        let sortedPokemons = [...pokemons];

        if (sortOrder === 'asc') {
            sortedPokemons = sortedPokemons.sort((a, b) =>
                a.name.localeCompare(b.name)
            );
        } else if (sortOrder === 'desc') {
            sortedPokemons = sortedPokemons.sort((a, b) =>
                b.name.localeCompare(a.name)
            );
        } else if (sortOrder === 'less') {
            sortedPokemons = sortedPokemons.sort((a, b) => a.attack - b.attack);
        } else if (sortOrder === 'more') {
            sortedPokemons = sortedPokemons.sort((a, b) => b.attack - a.attack);
        }

        dispatch({
            type: ORDER_POKEMON,
            payload: {
                filteredPokemons: sortedPokemons,
            },
        });
    };
};

export function getPokemons() {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:3001/pokemons');
        return dispatch({
            type: GET_POKEMONS,
            payload: json.data,
        });
    };
}

export function getPokemonsByName(name) {
    return async function (dispatch) {
        var json = await axios.get(
            `http://localhost:3001/pokemons?name=${name}`
        );
        return dispatch({
            type: GET_BY_NAME,
            payload: json.data,
        });
    };
}

export function getPokemonsById(id) {
    return async function (dispatch) {
        var json = await axios.get(`http://localhost:3001/pokemons/${id}`);
        return dispatch({
            type: GET_BY_ID,
            payload: json.data,
        });
    };
}

export function getTypes() {
    return async function (dispatch) {
        var json = await axios.get(`http://localhost:3001/types`);
        return dispatch({
            type: GET_TYPES,
            payload: json.data,
        });
    };
}

export function postPokemons() {
    return async function (dispatch) {
        var json = await axios.post(`http://localhost:3001/pokemons`);
        return dispatch({
            type: POST_POKEMONS,
            payload: json.data,
        });
    };
}
