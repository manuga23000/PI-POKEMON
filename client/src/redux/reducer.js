import {
    GET_POKEMONS,
    GET_BY_NAME,
    GET_BY_ID,
    POST_POKEMONS,
    ORDER_ASCENDING,
    ORDER_DESCENDING,
    ORDER_ATTACK_ASCENDING,
    ORDER_ATTACK_DESCENDING,
    GET_TYPES,
    FILTER_BY_TYPE,
    CLEAR_TYPE_FILTER,
    ORDER_POKEMON,
    FILTER_BY_CREATE,
    GET_ALL_POKEMONS,
} from './actions';

const initialState = {
    allPokemons: [],
    pokemons: [],
    pokemonsById: [],
    postpokemons: [],
    filteredPokemons: [],
    types: [],
    selectedType: '', // Added selectedType property to store the selected type
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_POKEMON:
            return {
                ...state,
                filteredPokemons: action.payload.filteredPokemons,
            };
        case FILTER_BY_TYPE:
            if (action.payload === '') {
                return {
                    ...state,
                    pokemons: state.filteredPokemons,
                    selectedType: '',
                };
            }

            const typeSelected = state.filteredPokemons.filter((pokemon) => {
                return (
                    pokemon.types.includes(action.payload) ||
                    pokemon.pokeTypes?.some(
                        (type) => type.name === action.payload
                    )
                );
            });

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
        case GET_POKEMONS:
        case GET_BY_NAME:
            return {
                ...state,
                pokemons: action.payload,
                filteredPokemons: action.payload,
            };
        case GET_BY_ID:
            return { ...state, pokemonsById: action.payload };
        case GET_TYPES:
            return { ...state, types: action.payload };
        case POST_POKEMONS:
            return { ...state, postpokemons: action.payload };
        case ORDER_ASCENDING:
            return {
                type: ORDER_POKEMON,
                payload: {
                    filteredPokemons: state.filteredPokemons.sort((a, b) =>
                        a.name.localeCompare(b.name)
                    ),
                },
            };
        case ORDER_DESCENDING:
            return {
                type: ORDER_POKEMON,
                payload: {
                    filteredPokemons: state.filteredPokemons.sort((a, b) =>
                        b.name.localeCompare(a.name)
                    ),
                },
            };
        case ORDER_ATTACK_ASCENDING:
            return {
                type: ORDER_POKEMON,
                payload: {
                    filteredPokemons: state.filteredPokemons.sort(
                        (a, b) => a.attack - b.attack
                    ),
                },
            };
        case ORDER_ATTACK_DESCENDING:
            return {
                type: ORDER_POKEMON,
                payload: {
                    filteredPokemons: state.filteredPokemons.sort(
                        (a, b) => b.attack - a.attack
                    ),
                },
            };
        case GET_ALL_POKEMONS:
            return { ...state, allPokemons: action.payload };
        case FILTER_BY_CREATE:
            if (action.payload === 'all')
                return {
                    ...state,
                    pokemons: state.allPokemons,
                };

            if (action.payload === 'created') {
                console.log(state.pokemons);
                const createdPokes = state.allPokemons?.filter(
                    (poke) => typeof poke.id !== 'number'
                );
                console.log(createdPokes);
                return {
                    ...state,
                    pokemons: createdPokes,
                };
            }
            if (action.payload === 'api') {
                const apiPokes = state.allPokemons?.filter(
                    (poke) => typeof poke.id === 'number'
                );
                return {
                    ...state,
                    pokemons: apiPokes,
                };
            }
            break;
        default:
            return state;
    }
};

export default rootReducer;
