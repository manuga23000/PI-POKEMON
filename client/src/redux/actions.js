import axios from 'axios';

export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_BY_NAME = 'GET_BY_NAME';
export const GET_BY_ID = 'GET_BY_ID';
export const POST_POKEMONS = 'POST_POKEMONS';
export const GET_TYPES = 'GET_TYPES';
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE';
export const CLEAR_TYPE_FILTER = 'CLEAR_TYPE_FILTER';
export const FILTER_BY_CREATE = 'FILTER_BY_CREATE';
export const ORDER_POKEMON = 'ORDER_POKEMON';
export const ORDER_ASCENDING = 'asc';
export const ORDER_DESCENDING = 'desc';
export const ORDER_ATTACK_ASCENDING = 'less';
export const ORDER_ATTACK_DESCENDING = 'more';

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
        if (json.data.error) {
            alert(json.data.message);
        } else {
            return dispatch({
                type: GET_BY_NAME,
                payload: json.data,
            });
        }
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

export function postPokemons() {
    return async function (dispatch) {
        var json = await axios.post(`http://localhost:3001/pokemons`);
        return dispatch({
            type: POST_POKEMONS,
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

export const filterByType = (type) => ({
    type: FILTER_BY_TYPE,
    payload: type,
});

export const clearTypeFilter = () => ({
    type: CLEAR_TYPE_FILTER,
});

export const filterByCreate = (payload) => ({
    type: FILTER_BY_CREATE,
    payload,
});

export const orderPokemon = (sortOrder) => (dispatch, getState) => {
    const { pokemons, selectedType } = getState();
    let sortedPokemons = [...pokemons];

    if (sortOrder === ORDER_ASCENDING) {
        sortedPokemons = sortedPokemons.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    } else if (sortOrder === ORDER_DESCENDING) {
        sortedPokemons = sortedPokemons.sort((a, b) =>
            b.name.localeCompare(a.name)
        );
    } else if (sortOrder === ORDER_ATTACK_ASCENDING) {
        sortedPokemons = sortedPokemons.sort((a, b) => a.attack - b.attack);
    } else if (sortOrder === ORDER_ATTACK_DESCENDING) {
        sortedPokemons = sortedPokemons.sort((a, b) => b.attack - a.attack);
    }

    dispatch({
        type: ORDER_POKEMON,
        payload: {
            filteredPokemons: sortedPokemons,
        },
    });

    if (selectedType !== '') {
        dispatch(filterByType(selectedType));
    }
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
