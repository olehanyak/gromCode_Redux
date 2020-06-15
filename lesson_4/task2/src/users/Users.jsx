import React, { Component } from "react";
import { connect } from "react-redux";
import * as usersActions from "./users.actions";

class Users extends Component {
    onUserCreate = () => {
        const id = Math.round(Math.random() * 1000000);
        const newUser = {
            id,
            name: `User # ${id}`,
        };
        this.props.createUser(newUser);
    };

    render() {
        const { users, deleteUser } = this.props;
        return (
            <div className="users">
                <button onClick={this.onUserCreate} className="users__create-btn">
                    Create user
                </button>
                <ul className="users__list">
                    {users.map((user) => (
                        <li key={user.id} className="users__list-item">
                            <span>{user.name}</span>
                            <button onClick={() => deleteUser(user.id)} className="users__delete-btn">+</button>
                        </li>
                    ))}

                    {/* <li className="users__list-item">
                        <span>User # 551949</span>
                        <button className="users__delete-btn">+</button>
                    </li>
                    <li className="users__list-item">
                        <span>User # 328468</span>
                        <button className="users__delete-btn">+</button>
                    </li> */}
                </ul>
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        users: state.users.usersList,
      
    };
};

const mapDispatch = {
    createUser: usersActions.addUser,
    deleteUser: usersActions.deleteUser,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsers = connector(Users);

export default ConnectedUsers;
