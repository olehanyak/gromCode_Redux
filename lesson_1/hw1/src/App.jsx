import React, { Component } from "react";
import { themes, ThemeContext } from "./UserData";
import Header from "./Header";

class App extends Component {
    state = {
        userData: this.props,
    };

    // toggleTheme = () => {
    //     const newTheme = this.state.theme === themes.light ? themes.dark : themes.light;

    //     this.setState({
    //         theme: newTheme,
    //     });
    // };

    render() {
        return <div className="page">
            <Header userData={this.props} />
        </div>;
    }
}

export default App;
