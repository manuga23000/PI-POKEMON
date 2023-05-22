import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonsById } from '../../redux/actions';
import {
    DetailContainer,
    CardContainer,
    Name,
    Image,
    Types,
    ProgressBarContainer,
    ProgressBarFiller,
    ProgressBarLabel,
} from './StyleDetail';

function ProgressBar({ value, label }) {
    return (
        <ProgressBarContainer>
            <ProgressBarFiller style={{ width: `${value}%` }}>
                <ProgressBarLabel>{label}</ProgressBarLabel>
            </ProgressBarFiller>
        </ProgressBarContainer>
    );
}

function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const pokemon = useSelector((state) => state.pokemonsById);

    useEffect(() => {
        dispatch(getPokemonsById(id));
    }, [dispatch, id]);

    return (
        <DetailContainer>
            <CardContainer>
                <Name>{pokemon.name}</Name>
                <Image src={pokemon.image} alt={pokemon.name} />
                <Types>{pokemon.types}</Types>
                <ProgressBar value={pokemon.life} label="Life" />
                <ProgressBar value={pokemon.attack} label="Attack" />
                <ProgressBar value={pokemon.defense} label="Defense" />
                <ProgressBar value={pokemon.speed} label="Speed" />
                <ProgressBar value={pokemon.height} label="Height" />
                <ProgressBar value={pokemon.weight} label="Weight" />
            </CardContainer>
        </DetailContainer>
    );
}

export default Detail;
