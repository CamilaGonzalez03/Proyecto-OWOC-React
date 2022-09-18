import React from 'react'
import Logo from "../Recursos/logo owoc200.png"
import CartWidget from './CartWidget';

const Navbar = () => {
return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="btn btn-link">
                <div>
                    <img src={Logo} alt="Logo" width="60" height="60"></img>
                </div>
            </a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
                <li><a>Inicio</a></li>
                <li tabIndex={0}>
                    <a>
                    Productos
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </a>
                    <ul className="p-2 bg-base-100">
                        <li><a>Frutos Secos</a></li>
                        <li><a>Frutas desecadas</a></li>
                        <li><a>Semillas</a></li>
                        <li><a>Otros Productos</a></li>
                    </ul>
                </li>
                <li><a>Promociones</a></li>
                <li><a>Nosotras</a></li>
                <li><a>Contacto</a></li>
            </ul>
        </div>
        <CartWidget/>
    </div>
)
}

export default Navbar;