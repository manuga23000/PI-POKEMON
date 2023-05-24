import styled from 'styled-components';
import backgroundImage from '../../Images/pokemon.png';
import backgroundImage2 from '../../Images/pokemonmobile.png';

const LandingWrapper = styled.div`
    background-image: url(${backgroundImage});
    background-size: cover; // Ajusta el tamaño de la imagen al contenedor
    background-position: center 40%; // Ajusta la posición vertical de la imagen
    display: flex;
    justify-content: center; // Centra horizontalmente el contenido
    align-items: center; // Centra verticalmente el contenido
    height: 100vh;

    button {
        position: relative;
        top: 41%;
        font-size: 1.4rem;
        padding: 8px; // Espaciado interno del botón
        background-color: #b02120;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }
    }

    @media (max-width: 768px) {
        background-image: url(${backgroundImage2});

        button {
            top: 37%;
            font-size: 1.2rem;
        }
    }
`;

export default LandingWrapper;
