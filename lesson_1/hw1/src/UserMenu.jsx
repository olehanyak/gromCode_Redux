import React, { Component } from "react";
import { userDataContext } from "./UserData";

class UserMenu extends Component {
    render() {
        const { name, avatar_url } = this.context;

        return (
            <div className="menu">
                <span className="menu__greeting">{`Hello, ${name}`}</span>
                <img alt="User Avatar" src={avatar_url} className="menu__avatar" />
            </div>
        );
    }
}

UserMenu.contextType = userDataContext;


export default UserMenu;
