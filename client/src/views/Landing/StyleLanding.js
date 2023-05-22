import styled from 'styled-components';
import backgroundImage from '../../Images/pokemon.png';
import backgroundImage2 from '../../Images/pokemonmobile.png';

// Definición del componente estilizado LandingWrapper
const LandingWrapper = styled.div`
    background-image: url(${backgroundImage});
    background-size: cover; // Ajusta el tamaño de la imagen al contenedor
    background-position: center 40%; // Ajusta la posición vertical de la imagen
    display: flex; // Utiliza un contenedor flexible para centrar contenido
    justify-content: center; // Centra horizontalmente el contenido
    align-items: center; // Centra verticalmente el contenido
    height: 100vh; // Establece la altura del contenedor al 100% del viewport

    button {
        position: relative;
        top: 41%;
        font-size: 1.4rem; // Tamaño de fuente del botón
        padding: 8px; // Espaciado interno del botón
        background-color: #b02120;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer; // Cursor de tipo puntero al pasar el mouse
        transition: all 0.3s ease-in-out; // Transición suave para los cambios de estilo

        &:hover {
            transform: scale(
                1.1
            ); // Escala el botón al 110% al pasar el mouse sobre él
        }
    }

    @media (max-width: 768px) {
        background-image: url(${backgroundImage2});
        /* Estilos para tablet y dispositivos móviles */

        button {
            top: 37%;
            font-size: 1.2rem; // Tamaño de fuente del botón
        }
    }
`;

export default LandingWrapper; // Exporta el componente estilizado LandingWrapper
