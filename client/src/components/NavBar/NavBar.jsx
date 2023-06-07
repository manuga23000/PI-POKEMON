import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPokemons, getPokemonsByName } from '../../redux/actions';
import {
    MainContainer,
    StyledLink,
    StyledSearch,
    StyledImg,
} from './StyledNavBar';
import backgroundImage from '../../Images/pokemonn.png';
import Swal from 'sweetalert2';

function Nav() {
    const dispatch = useDispatch();
    const location = useLocation();
    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]);

    const handleSearch = async () => {
        try {
            await dispatch(getPokemonsByName(search));
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message,
                confirmButtonColor: '#B02120',
                confirmButtonText: 'OK',
                background: 'black',
                iconColor: '#B02120',
                color: 'white',
            });
        }

        setSearch('');
    };

    return (
        <MainContainer>
            {location.pathname !== '/pokemon' && (
                <StyledImg to="/">
                    <img src={backgroundImage} alt="Descripción de la imagen" />
                </StyledImg>
            )}

            <StyledSearch>
                <input
                    type="search"
                    value={search}
                    placeholder="Search..."
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
                <button onClick={handleSearch}>Search</button>

                <StyledLink to="/create">
                    <h2>Create Pokemon here!</h2>
                </StyledLink>
            </StyledSearch>
        </MainContainer>
    );
}

export default Nav;
