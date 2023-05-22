import { CardContainer, Name, Types, Image } from './StyleCard';
import { Link } from 'react-router-dom';
import React from 'react';

function Card(props) {
    const { id, name, image, types } = props;

    return (
        <CardContainer>
            <Link to={`/details/${id}`} style={{ textDecoration: 'none' }}>
                <Name>{name}</Name>
                <Image src={image} alt={name} />
                <Types>{types}</Types>
            </Link>
        </CardContainer>
    );
}

export default Card;
