import React from 'react';
import { Link } from 'react-router-dom';
import TrelloBrandLogo from '../../Assets/header-logo-2x.01ef898811a879595cea.png'
import './TopNavBar.css';

const TopNavBar = () =>{
return (
    <React.Fragment>
        <nav className="navbar navbar-expand-sm navbar-light  bg-trello">
            <div className="m-auto">
                <Link to="/boards">
                <img src={require('../../Assets/header-logo-2x.01ef898811a879595cea.png')} alt="Trello logo" className="trello-brand"/>
                </Link>
            </div>
        </nav>
    </React.Fragment>
)
}
export default TopNavBar;

