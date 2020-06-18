import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as usersActions from "./users.actions";

class SearchField extends Component {
    state = {
        userName: "",
    };

    onChange = (event) => {
        this.setState({
            userName: event.target.value,
        });
    };

    handleUserSearch = () => {
        this.props.fetchUserData(this.state.userName);
    };

    render() {
        return (
            <div className="name-form">
                <input onChange={this.onChange} type="text" className="name-form__input" value={this.state.userName} />
                <button onClick={this.handleUserSearch} className="name-form__btn btn">
                    Show
                </button>
            </div>
        );
    }
}

SearchField.propTypes = {
    fetchUserData: PropTypes.func.isRequired,
};

const mapDispatch = {
    fetchUserData: usersActions.fetchUserData,
};

export default connect(null, mapDispatch)(SearchField);
