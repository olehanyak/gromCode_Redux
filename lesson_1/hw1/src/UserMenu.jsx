import React, { Component } from "react";
import { userDataContext } from "./UserData";

class UserMenu extends Component {
    render() {
        console.log(this.context);

        return (
            <div className="menu">
                <span className="menu__greeting">{`Hello, ${this.context.name}`}</span>
                <img alt="User Avatar" src={this.context.avatar_url} className="menu__avatar" />
            </div>
        );
    }
}

UserMenu.contextType = userDataContext;

export default UserMenu;
