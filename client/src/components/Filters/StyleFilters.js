import styled from 'styled-components';

export const FilterContainer = styled.div`
    position: fixed;
    top: 4.5rem;
    left: 0;
    width: 100%;
    background-color: black;
    box-sizing: border-box;
    z-index: 1;
`;

export const CenteredContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    background-color: black;
    color: white;
    border: 1px solid white;
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
    margin: 1px 8px;
`;

export const Select = styled.select`
    border: 1px solid white;
    color: white;
    background-color: black;
    padding: 8px 16px;
    font-size: 14px;
`;
