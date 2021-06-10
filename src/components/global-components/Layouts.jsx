import { React } from 'react';
const Layouts = (props) =>{
    return(
        <>
            <title> {props.pageTitle} | Doesi Business React Template</title>
            <div>{props.children}</div>
        </>
    )
}
export default Layouts;