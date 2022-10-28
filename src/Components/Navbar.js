import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../Recursos/Logo OWOC header.jpg";
import CartWidget from './CartWidget';

const Navbar = () => {
return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
            <Link to='/Inicio' className="btn btn-link">
                <div>
                    <img src={Logo} alt="Logo" width="60" height="60"></img>
                </div>
            </Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
                <li><Link to='/Inicio'>Inicio</Link></li>
                <li><Link to='/Productos'>Productos</Link></li>
                <li><Link to='/Carrito'><CartWidget/></Link></li>
            </ul>
        </div>
        
    </div>
)
}

export default Navbar;