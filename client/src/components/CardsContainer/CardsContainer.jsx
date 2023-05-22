import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import { Container } from './StyleCardsContainer';

const CardsContainer = ({ selectedType, sortOrder }) => {
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const pokemons = useSelector((state) => state.pokemons);

    useEffect(() => {
        const typeFiltered = pokemons.filter((pokemon) => {
            return selectedType === '' || pokemon.types.includes(selectedType);
        });
        let sortedPokemons = [...typeFiltered];
        if (sortOrder === 'asc') {
            sortedPokemons = sortedPokemons.sort((a, b) =>
                a.name.localeCompare(b.name)
            );
        } else if (sortOrder === 'desc') {
            sortedPokemons = sortedPokemons.sort((a, b) =>
                b.name.localeCompare(a.name)
            );
        } else if (sortOrder === 'less') {
            sortedPokemons = sortedPokemons.sort((a, b) => a.attack - b.attack);
        } else if (sortOrder === 'more') {
            sortedPokemons = sortedPokemons.sort((a, b) => b.attack - a.attack);
        }
        console.log(sortedPokemons);
        setFilteredPokemons(sortedPokemons);
    }, [selectedType, pokemons, sortOrder]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(filteredPokemons.length / itemsPerPage);

    return (
        <Container>
            {filteredPokemons
                .slice(
                    (currentPage - 1) * itemsPerPage,
                    currentPage * itemsPerPage
                )
                .map((pokemon) => (
                    <Card
                        key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.image}
                        types={pokemon.types}
                    />
                ))}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
            />
        </Container>
    );
};

export default CardsContainer;
