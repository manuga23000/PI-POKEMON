import {
    GET_ALL_POKEMONS,
    GET_POKEMONS,
    GET_BY_NAME,
    GET_BY_ID,
    POST_POKEMONS,
    GET_TYPES,
    FILTER_BY_TYPE,
    CLEAR_TYPE_FILTER,
    ORDER_POKEMON,
    FILTER_BY_CREATE,
} from './actions';

const initialState = {
    allPokemons: [],
    pokemons: [],
    pokemonsById: [],
    postpokemons: [],
    filteredPokemons: [],
    types: [],
    selectedType: '',
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
        case GET_BY_NAME:
            return {
                ...state,
                pokemons: action.payload,
                filteredPokemons: action.payload,
            };
        case GET_BY_ID:
            return {
                ...state,
                pokemonsById: action.payload,
            };
        case POST_POKEMONS:
            return {
                ...state,
                postpokemons: action.payload,
            };
        case GET_TYPES:
            return {
                ...state,
                types: action.payload,
            };
        case FILTER_BY_TYPE:
            if (action.payload === '') {
                return {
                    ...state,
                    pokemons: state.filteredPokemons,
                    selectedType: '',
                };
            }

            const typeSelected = state.filteredPokemons.filter(
                (pokemon) =>
                    pokemon.types.includes(action.payload) ||
                    pokemon.pokeTypes?.some(
                        (type) => type.name === action.payload
                    )
            );

            return {
                ...state,
                pokemons: typeSelected,
                selectedType: action.payload,
            };
        case CLEAR_TYPE_FILTER:
            return {
                ...state,
                pokemons: state.filteredPokemons,
                selectedType: '',
            };
        case FILTER_BY_CREATE:
            if (action.payload === 'all') {
                return {
                    ...state,
                    pokemons: state.allPokemons,
                };
            } else if (action.payload === 'created') {
                const createdPokes = state.allPokemons?.filter(
                    (poke) => typeof poke.id !== 'number'
                );
                return {
                    ...state,
                    pokemons: createdPokes,
                };
            } else if (action.payload === 'api') {
                const apiPokes = state.allPokemons?.filter(
                    (poke) => typeof poke.id === 'number'
                );
                return {
                    ...state,
                    pokemons: apiPokes,
                };
            }
        // eslint-disable-next-line no-fallthrough
        case ORDER_POKEMON:
            return {
                ...state,
                filteredPokemons: action.payload.filteredPokemons,
            };
        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;
