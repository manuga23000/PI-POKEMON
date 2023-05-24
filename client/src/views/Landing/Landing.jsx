import React from 'react';
import LandingWrapper from './StyleLanding';
import { useHistory } from 'react-router-dom';

function Landing() {
    const history = useHistory();

    return (
        <LandingWrapper>
            <button
                onClick={() => {
                    history.push('/home');
                }}
            >
                EXPLORE THE POKEMON UNIVERSE!
            </button>
        </LandingWrapper>
    );
}

export default Landing;
