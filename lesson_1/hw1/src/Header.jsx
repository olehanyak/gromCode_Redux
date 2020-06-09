import React, { Component } from "react";
// import { ThemeContext } from "./UserData";
import UserMenu from './UserMenu';

class Header extends Component {
    render() {
        console.log(this.context);

        return (
            <header className="header">
                <UserMenu userData={this.props} />
            </header>
        );
    }
}

// Header.contextType = ThemeContext;

export default Header;
