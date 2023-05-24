import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonsById } from '../../redux/actions';
import pokemonGif from '../../Images/pokemongo.gif';
import {
    DetailContainer,
    CardContainer,
    CardBody,
    PokemonName,
    PokemonImageContainer,
    PokemonImage,
    PokemonStats,
    StatContainer,
    StatLabel,
    StatValue,
    StatBar,
    StatProgress,
    TypeLabel,
    TypeBadge,
    StyledLink,
    Arrow,
    StyledGif,
} from './StyleDetail';
//useSelector permite extraer datos del store de Redux desde un componente de React. Recibe una función que obtiene el estado completo y debe devolver el dato que queremos extraer.
function Detail() {
    //Se extrae el valor del params.id usando useParams():
    const { id } = useParams();
    const dispatch = useDispatch();
    const pokemon = useSelector((state) => state.pokemonsById);
    //En resumen, este useEffect:
    //Llama a la acción getPokemonsById pasándole el id del Pokémon
    //Sólo se vuelve a ejecutar cuando id cambia (cuando el componente recibe un nuevo ID)
    //Se actualizan los datos del nuevo Pokémon llamando de nuevo a la acción
    useEffect(() => {
        dispatch(getPokemonsById(id));
    }, [dispatch, id]);

    return (
        <DetailContainer>
            <StyledLink to="/home">
                <Arrow>&#8592;</Arrow>
                <StyledGif src={pokemonGif} alt="Pokemon GIF" />
            </StyledLink>
            <CardContainer>
                <CardBody>
                    <PokemonName>{pokemon.name}</PokemonName>
                    <PokemonImageContainer>
                        <PokemonImage src={pokemon.image} alt={pokemon.name} />
                    </PokemonImageContainer>
                    <PokemonStats>
                        <StatContainer>
                            <StatLabel>Life:</StatLabel>
                            <StatValue>{pokemon.life}</StatValue>
                            <StatBar>
                                <StatProgress
                                    percentage={(pokemon.life / 255) * 100}
                                />
                            </StatBar>
                        </StatContainer>
                        <StatContainer>
                            <StatLabel>Attack:</StatLabel>
                            <StatValue>{pokemon.attack}</StatValue>
                            <StatBar>
                                <StatProgress
                                    percentage={(pokemon.attack / 255) * 100}
                                />
                            </StatBar>
                        </StatContainer>
                        <StatContainer>
                            <StatLabel>Defense:</StatLabel>
                            <StatValue>{pokemon.defense}</StatValue>
                            <StatBar>
                                <StatProgress
                                    percentage={(pokemon.defense / 255) * 100}
                                />
                            </StatBar>
                        </StatContainer>
                        <StatContainer>
                            <StatLabel>Speed:</StatLabel>
                            <StatValue>{pokemon.speed}</StatValue>
                            <StatBar>
                                <StatProgress
                                    percentage={(pokemon.speed / 255) * 100}
                                />
                            </StatBar>
                        </StatContainer>
                        <StatContainer>
                            <StatLabel>Height:</StatLabel>
                            <StatValue>{pokemon.height}</StatValue>
                            <StatBar>
                                <StatProgress
                                    percentage={(pokemon.height / 1000) * 100}
                                />
                            </StatBar>
                        </StatContainer>
                        <StatContainer>
                            <StatLabel>Weight:</StatLabel>
                            <StatValue>{pokemon.weight}</StatValue>
                            <StatBar>
                                <StatProgress
                                    percentage={(pokemon.weight / 1000) * 100}
                                />
                            </StatBar>
                        </StatContainer>
                    </PokemonStats>
                    <TypeLabel>
                        <TypeBadge>{pokemon.types}</TypeBadge>
                    </TypeLabel>
                </CardBody>
            </CardContainer>
        </DetailContainer>
    );
}

export default Detail;
//Obtenemos el ID de la URL
//lamamos a la acción con ese ID, que obtiene los datos de ese Pokémon de la API
//ctualizamos el estado almacenando esos datos en pokemonsById
//xtraemos pokemonsById del state
//ostramos el nombre con {pokemon.name}
