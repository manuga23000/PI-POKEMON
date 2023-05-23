import styled from 'styled-components';
import backgroundImage from '../../Images/fondo.jpg';
import { Link } from 'react-router-dom';

export const DetailContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 86vh;
    background-color: #000;
`;

export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    margin: 10px;
    z-index: 1;
`;

export const StyledGif = styled.img`
    width: 9rem; /* Ajusta el tamaño según tus necesidades */
    height: 6rem; /* Ajusta el tamaño según tus necesidades */
    transform: scaleX(-1); /* Voltea horizontalmente el GIF */
    position: relative;
`;

export const Arrow = styled.span`
    position: absolute;
    bottom: 4rem;
    left: 1.5rem;
    font-size: 4rem;
`;

export const CardContainer = styled.div`
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    width: 500px;
    height: 460px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 5px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin: 10px;
    border: 1px solid #fff;
`;

export const CardBody = styled.div`
    padding: 20px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const PokemonName = styled.h2`
    font-size: 24px;
    font-weight: bold;
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 8px;
`;

export const PokemonImageContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const PokemonImage = styled.img`
    width: 180px;
    height: 180px;
    margin: 0 auto;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
    }
`;

export const PokemonStats = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
`;

export const StatContainer = styled.div`
    width: 50%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;

export const StatLabel = styled.span`
    font-size: 14px;
    color: black;
    flex-grow: 1;
`;

export const StatValue = styled.span`
    font-size: 14px;
    color: black;
    font-weight: bold;
`;

export const StatBar = styled.div`
    width: 100px;
    height: 10px;
    border-radius: 5px;
    overflow: hidden;
    margin-left: 8px;
`;

export const StatProgress = styled.div`
    height: 100%;
    border-radius: 5px;
    background-color: #b02120;
    width: ${(props) => props.percentage}%;
`;

export const TypeLabel = styled.div`
    font-size: 14px;
    text-align: center;
`;

export const TypeBadge = styled.span`
    display: inline-block;
    padding: 4px 8px;
    border-radius: 8px;
    background-color: #b02120;
    color: #fff;
    font-size: 18px;
`;
