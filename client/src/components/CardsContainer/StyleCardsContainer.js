import styled from 'styled-components';

export const Container = styled.div`
    margin: 30px;
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 5px;

    @media (max-width: 2560px) {
        grid-template-columns: repeat(12, 1fr);
    }

    @media (max-width: 1920px) {
        grid-template-columns: repeat(10, 1fr);
    }

    @media (max-width: 1600px) {
        grid-template-columns: repeat(6, 1fr);
    }

    @media (max-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
        grid-template-columns: 1fr;
    }
`;
