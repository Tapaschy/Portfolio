import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';

const Navbar = () => {
    // const location = useLocation();

    // useEffect(() => {
    //   const { hash } = location;
    //   if (hash !== '') {
    //     const element = document.querySelector(hash);
    //     if (element) {
    //       element.scrollIntoView({ behavior: 'smooth' });
    //     }
    //   }
    // }, [location]);


    const navli = <>
        <li ><Link smooth={true}
            offset={-70}
            duration={1000}
            spy={true}
            activeClass="active" to='home'>Home</Link></li>
        <li className="hover:bg-primary rounded "><Link
            smooth={true}
            offset={-70}
            duration={1000}
            spy={true}
            activeClass="active"

            to='about'>About Me</Link></li>
        <li ><Link smooth={true}
            offset={-70}
            duration={1000}
            spy={true}
            activeClass="active" to='skills'>Skills</Link></li>
        <li >
            {/* <a href="#portfolio">Portfolio</a> */}
            <Link smooth={true}
                offset={-70}
                duration={1000}
                spy={true}
                activeClass="active" to='portfolio'>Portfolio</Link>
        </li>
        <li ><Link smooth={true}
            offset={-70}
            duration={1000}
            spy={true}
            activeClass="active" to='contact'>Contact</Link></li>

    </>
    return (
        <div className="navbar md:fixed z-10  bg-white w-full">
            <div className="navbar-start md:container md:mx-auto ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navli}
                    </ul>
                </div>
                <a className="pl-5 normal-case text-xl font-bold">TAPAS</a>
            </div>
            <div className="navbar-end md:container md:mx-auto hidden lg:flex">
                <ul className="menu menu-horizontal px-1 uppercase bg-white ">
                    {navli}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;