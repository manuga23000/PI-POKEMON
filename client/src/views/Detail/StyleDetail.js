import styled from 'styled-components';

export const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f2f2f2;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    border: 1px solid black;
    padding: 20px;
    width: 400px;
    background-color: white;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
`;

export const Name = styled.h2`
    font-size: 2.5rem;
    color: #ffcb05;
    text-align: center;
`;

export const Image = styled.img`
    height: 200px;
    width: 200px;
`;

export const Types = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Info = styled.p`
    font-size: 1.2rem;
    color: black;
    text-align: center;
`;

export const ProgressBarContainer = styled.div`
    background-color: #e0e0de;
    border-radius: 50px;
    height: 15px;
    margin: 10px 0;
    width: 100%;
`;

export const ProgressBarFiller = styled.div`
    background-color: #ffcb05;
    border-radius: inherit;
    height: inherit;
    text-align: right;
`;

export const ProgressBarLabel = styled.span`
    color: black;
    font-size: 0.8rem;
    font-weight: bold;
    padding-right: 5px;
`;
