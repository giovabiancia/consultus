import React from 'react';
import NavigationMenuV2 from '../global-components/NavigationMenu-v2';
import HeroV2 from './Hero-v2';

const HeaderV2 = () => {
    return (
        <>
            {/* <!-- start header area --> */}
            <header className="index2">
                {/* <!-- Start menubar area --> */}
                    <NavigationMenuV2 />
                {/* <!-- End menubar area --> */}

                {/* <!-- start banner area --> */}
                <HeroV2/>
                {/* <!-- end banner area --> */}
            </header>
            {/* <!-- end header area --> */}
            
        </>
    );
}

export default HeaderV2;
