import React,{useEffect} from 'react';
import Layouts from '../components/global-components/Layouts';
import ErrorInner from '../components/section-components/Error';
import Partner from '../components/section-components/Partner';

const ErrorPage = () => {
    useEffect(() => {
        window.scrollTo(0,0);
}, [])
    return (
        <div>
            <Layouts pageTitle='Error'>
                <ErrorInner />
                <Partner />
            </Layouts>
        </div>
    );
}

export default ErrorPage;
