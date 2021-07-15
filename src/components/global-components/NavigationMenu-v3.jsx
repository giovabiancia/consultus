import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useAuthentication';
import { sectionData } from './../../data/section.json';
import Avatar from '@material-ui/core/Avatar';
import businessman from '../../img/businessman.png'
import ModalLogin from '../ModalLogin';

const NavigationMenuV3 = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
    const auth = useAuthentication()


    let data = sectionData.header;
    return (
        <>
        {/* <!-- Start menubar area --> */}
        <section className="menubar " style={{backgroundColor: '#151A33'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar p-0">
                            <Link className="navbar-brand p-0" to="/">
                            <img src={"/"+data.logo2} style={{width:150}} alt="Logo" />
                            </Link>
                            <div className={`header-menu ml-auto position-static ${menuToggle === true ? 'menuToggle' : ''}`}>
                            <div id="menu-button"  onClick={()=>{setMobileMenuToggle(!mobileMenuToggle)}}><i className="fas fa-bars"></i></div>
                                <ul className={`menus ${mobileMenuToggle === true ? 'open' : ''}`}>
                                    <li >
                                        <Link to="/">home</Link>
                                       {/*  <ul>
                                            <li><Link to="/">home 1</Link></li>
                                            <li><Link to="/home-v2">home 2</Link></li>
                                        </ul> */}
                                    </li>
                                    <li><Link to="/about">su di noi</Link></li>
                                    {/* <li>
                                        <Link to="/service">servizio</Link>

                                    </li> */}
                                    <li>
                                        <Link to="/blog">Blog</Link>

                                    </li>

                                    <li><Link to="/consulenti">consulenti</Link></li>
                                    <li><Link to="/contact">contatti</Link></li>
                                    <li  className="center">
                                        {auth.loggedIn ?    <Link to="/profilo" style={{cursor:"pointer"}}><Avatar alt="Remy Sharp" src={auth.loggedIn.photoURL ? auth.loggedIn.photoURL: businessman} /></Link>:<ModalLogin></ModalLogin>}
                                    </li>

                                </ul>
                            </div>
                            <div className="right-part d-none d-lg-block noPc">
                                <button onClick={()=>{setMenuToggle(!menuToggle)}}><i className={`fas fa-${menuToggle === true ? 'times' : 'bars'}`}></i></button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End menubar area --> */}
        </>
    );
}

export default NavigationMenuV3;
