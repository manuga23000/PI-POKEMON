import styled from 'styled-components';
import backgroundImage from '../../Images/pikachu.png';
import { Link } from 'react-router-dom';

export const FormContainer = styled.div`
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    max-width: 600px;
    margin: auto;
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

export const Formul = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
`;

export const Title = styled.h1`
    text-align: center;
    color: white;
    font-size: 3rem;
    font-weight: 300;
    margin: 0 0 40px;
`;

export const InputContainer = styled.div`
    min-height: 70px; /* Establece una altura mínima para el contenedor del campo */
    position: relative;
`;

export const Input = styled.input`
    font-size: 22px;
    display: block;
    width: 36rem;
    padding: 5px 10px;
    background: none;
    background-image: none;
    border: 1px solid white;
    color: white;
    border-radius: 0;
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
`;

export const Error = styled.p`
    padding-left: 5px;
    font-size: 12px;
    color: red;
    white-space: nowrap;
    visibility: ${({ show }) =>
        show
            ? 'visible'
            : 'hidden'}; /* Oculta el mensaje de error cuando no hay errores */
`;

export const Select = styled.select`
    /* Estilo para cuando el select está cerrado */
    color: white;

    /* Estilo para cuando el select está abierto */
    option {
        color: black;
    }

    /* Resto de estilos */
    font-size: 14px;
    display: block;
    width: 100%;
    padding: 8px;
    border: 1px solid white;
    border-radius: 0;
    margin-bottom: 10px;
    background: none;
    transition: border-color 0.25s ease;
`;

export const SubmitButton = styled.button`
    position: relative;
    bottom: 1.1rem;
    left: 13rem;
    border: 0;
    outline: none;
    border-radius: 0;
    font-size: 25px;
    text-transform: uppercase;
    border-radius: 10px;
    background: #b02120;
    color: white;
    transition: all 0.5s ease;
    cursor: pointer;
    width: 30%; /* Ajusta el ancho del botón */

    &:hover {
        background-color: white;
        color: black;
    }
`;
