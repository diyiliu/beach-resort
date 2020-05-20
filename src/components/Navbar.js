import React, {Component} from 'react';
import {Link} from "react-router-dom";

import logo from '../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa';


class Navbar extends Component {
    state = {
        isOPen: false
    }

    handleToggle = () => {
        this.setState({isOPen: !this.state.isOPen})
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="beach resort"/>
                        </Link>
                        <button className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon"/>
                        </button>
                    </div>
                    <ul className={this.state.isOPen ? 'nav-links show-nav' : 'nav-links'}>
                        <li>
                            <Link to="/">home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">rooms</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;