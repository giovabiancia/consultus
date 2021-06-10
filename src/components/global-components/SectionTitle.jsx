import { React } from 'react';

function SectionTitle(props) {
    return (
        <>
        <div className="section-title text-center wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
            <h6>{props.subtitle}</h6>
            <h2>{props.title}</h2>
            <p>{props.titleContent}</p>
        </div>
        </>
    )
}

export default SectionTitle;