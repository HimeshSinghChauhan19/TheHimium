import React, { useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import LineIcon from 'react-lineicons';
import image3 from '../static/images/image3.jpg';
function Header(){
    const [navigationToggler, setNavigationToggler] = useState(false);

    const handleNavigationToggler = () =>{
        setNavigationToggler(!navigationToggler);
    }


    return (
        <nav className={navigationToggler ? "mi-header is-visible" : "mi-header"}>
            <button onClick={handleNavigationToggler} className="mi-header-toggler">
                {!navigationToggler ? <LineIcon name="menu" /> : <LineIcon name="close" />}
            </button>
            <div className="mi-header-inner">
                <div className="mi-header-image">
                    <Link to="/">
                        
                {/* Needed to change this with below line cause when a react project is deployed then we cannot access the files of public folder and thus we should keep files in src folder only */}
                {/* <img src="/images/image3.jpg" alt="brandimage"/> */}
                        <img src={image3} alt="brandimage"/>
                    </Link>
                </div>
                <ul className="mi-header-menu">
                    <li><NavLink exact to="/"><span>Home</span></NavLink></li>
                    <li><NavLink to="/about"><span>About</span></NavLink></li>
                    <li><NavLink to="/resume"><span>Resume</span></NavLink></li>
                    <li><NavLink to="/projects"><span>Results</span></NavLink></li>
                    <li><a href="https://stupendoushsc.blogspot.com"><span>My Blogs</span></a></li>
                    <li><NavLink to="/someBlogs"><span>Some Blogs</span></NavLink></li>
                    <li><NavLink to="/contact"><span>Contact</span></NavLink></li>
                </ul>
                <p className="mi-header-copyright">&copy; {new Date().getFullYear()} <b>Himesh Singh Chauhan</b></p>
            </div>
        </nav>
    )
}


export default Header;