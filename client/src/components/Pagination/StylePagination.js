import styled from 'styled-components';

// Estilos para el contenedor de la paginación
export const PaginationContainer = styled.div`
    position: fixed;
    left: 2px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
    bottom: 0;
    z-index: 1;
`;

// Estilos para los botones de página
export const PageButton = styled.button`
    padding: 8px 16px;
    margin: 0 3px;
    background-color: ${(props) => (props.active ? '#000' : '#eee')};
    color: ${(props) => (props.active ? '#fff' : '#000')};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

// Estilos para los botones de flecha
export const ArrowButton = styled.button`
    padding: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 14px;
    color: white;
`;
