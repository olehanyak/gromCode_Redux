import React, { Component } from "react";
import UserMenu from "./UserMenu";
// import { userDataContext } from "./UserData";

class Header extends Component {
    render() {
        console.log(this.props.userData);

        return (
            <header className="header">
                <UserMenu />
            </header>
        );
    }
}

export default Header;
