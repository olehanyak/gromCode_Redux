import React, { Component } from "react";
// import { ThemeContext } from "./UserData";
import UserMenu from './UserMenu';

class Header extends Component {
    render() {
        console.log(this.props.userData);

        return (
            <header className="header">
                <UserMenu userData={this.props.userData} />
            </header>
        );
    }
}

// Header.contextType = ThemeContext;

export default Header;
