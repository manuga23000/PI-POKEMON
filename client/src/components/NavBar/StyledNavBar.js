import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Define un contenedor principal con estilo
export const MainContainer = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: black;
    color: white;
`;

// Define un enlace estilizado para la imagen
export const StyledImg = styled(Link)`
    display: flex;
    position: relative;

    img {
        display: flex;
        position: relative;
        right: 4em;
        width: 9rem;
        margin: 9px;
    }
`;

// Define un enlace estilizado que utiliza la etiqueta <Link> de react-router-dom
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1rem;
    font-family: 'Arial', sans-serif;
    display: flex;
    position: relative;
    left: 9em;
`;

// Define un contenedor estilizado para la búsqueda
export const StyledSearch = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    right: 6em;

    input[type='search'] {
        width: 300px;
        height: 30px;
        border-radius: 15px;
        margin-right: 10px;
        padding-left: 10px;
        border: none;
        outline: none; /* Elimina el borde al seleccionar el input */
    }

    button {
        background-color: #b02120;
        color: white;
        border: none;
        border-radius: 15px;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
        padding: 10px 15px;

        &:hover {
            background-color: white;
            color: black;
        }
    }
`;
