import React from "react";
import { connect } from "react-redux";
import User from "./User";
import Pagination from "./Pagination";
import * as usersAction from "./users.actions";
import { usersListSelector, currentPageSelector } from "./users.selectors";

const UsersList = ({ users, currentPage, goNext, goPrev }) => {
    return (
        <div>
            <Pagination goPrev={goPrev} goNext={goNext} currentPage={currentPage} totalItems={users.length} />
            <ul className="users">
                {users.slice(currentPage * 3, currentPage * 3 + 3).map((user) => (
                    <User key={user.id} name={user.name} age={user.age} />
                ))}
            </ul>
        </div>
    );
};

const mapState = (state) => {
    return {
        users: usersListSelector(state),
        currentPage: currentPageSelector(state),
    };
};

const mapDispatch = {
    goNext: usersAction.goNextPage,
    goPrev: usersAction.goPrevPage,
};

export default connect(mapState, mapDispatch)(UsersList);
