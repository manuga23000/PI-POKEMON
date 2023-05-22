import styled from 'styled-components';

const CardContainer = styled.div`
    width: 214px;
    background-color: #a2160f;
    border: 2px solid white;
    border-radius: 10px;
    padding-bottom: 30px;
    transition: transform 0.3s ease;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box; /* Asegúrate de que el tamaño incluya el borde y el relleno */
`;
const Name = styled.h2`
    color: black;
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 10px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const Image = styled.img`
    max-width: 100%;
    height: 8em; /* Ajusta la altura deseada */
`;

const Types = styled.p`
    color: black;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    position: absolute;
    top: 10.4em; /* Ajusta el valor según tu preferencia */
    left: 0;
    width: 100%;
    background-color: white; /* Ajusta el color de fondo según tu preferencia */
`;

export { CardContainer, Name, Image, Types };
