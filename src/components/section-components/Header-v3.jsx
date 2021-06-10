import React from 'react';
import NavigationMenuV2 from '../global-components/NavigationMenu-v2';
import PageTitle from './PageTitle';
const HeaderV3 = (props) => {

    return (
        <>
            {/* <!-- start header area --> */}
            <header className={`index2 about-page`}>
                {/* <!-- Start menubar area --> */}
                <NavigationMenuV2 />
                {/* <!-- End menubar area --> */}

                {/* <!-- start banner area --> */}
                <PageTitle background={props.background} title={props.title} pageName={props.pageName}/>
                {/* <!-- end banner area --> */}
            </header>
            {/* <!-- end header area --> */}
        </>
    );
}

export default HeaderV3;
