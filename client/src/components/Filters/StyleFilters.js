import styled from 'styled-components';

export const FilterContainer = styled.div`
    position: relative;
`;

export const CenteredContainer = styled.div`
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-30%);
    z-index: 1;
`;

export const Button = styled.button`
    background-color: #000000;
    border: 1px solid #fff;
    color: #ffffff;
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
    margin: 1px 8px; /* Agregar un margin horizontal */
`;

export const Select = styled.select`
    border: 1px solid #000000;
    color: black;
    padding: 8px 16px;
    font-size: 14px;
`;
