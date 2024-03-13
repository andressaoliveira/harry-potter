import React from 'react';
import { Link } from "react-router-dom";
import './Menu.css';

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <Link to="/harry-potter">Página inicial</Link>
                <Link to="/harry-potter/Personagens">Personagens</Link>
                <Link to="/harry-potter/Casas">Casas</Link>
            </div>
        );
    }
}