import React from 'react';
import NavigationMenu from '../global-components/NavigationMenu';
import Hero from './Hero';

const Header = () => {

    return (
        <header>
            <NavigationMenu />
            <Hero/>
        </header>
    );
}

export default Header;
