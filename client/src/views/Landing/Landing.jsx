import React from 'react';
import LandingWrapper from './StyleLanding';
import { useHistory } from 'react-router-dom';
//useHistory te permite controlar la navegación en tu aplicación React
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
