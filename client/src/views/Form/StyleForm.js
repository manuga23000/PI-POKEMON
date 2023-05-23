import styled from 'styled-components';
import backgroundImage from '../../Images/peakpx.jpg';

export const FormContainer = styled.div`
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 10px;
    max-width: 600px;
    margin: 30px auto;
    border-radius: 4px;
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
    border: 1px solid #a0b3b0;
    color: white;
    border-radius: 0;
    transition: border-color 0.25s ease, box-shadow 0.25s ease;

    &:focus {
        border-color: #1ab188;
    }
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
    font-size: 14px;
    display: block;
    width: 100%;
    padding: 8px;
    border: 1px solid black;
    border-radius: 4px;
    margin-bottom: 10px; /* Agrega margen inferior de 10px */
`;

export const SubmitButton = styled.button`
    margin-top: 10px; /* Agrega margen superior de 10px */
    border: 0;
    outline: none;
    border-radius: 0;
    font-size: 2rem;
    text-transform: uppercase;

    background: #b02120;
    color: white;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover {
        background-color: white;
        color: black;
    }
`;
