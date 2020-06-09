import React, { Component } from "react";
import Header from "./Header";
import { userDataContext } from "./UserData";

class App extends Component {
    state = {
        userData: this.context,
    };

    render() {
        console.log(this.context);
        
        return (
            <div className="page">
                <Header userData={this.context} />
            </div>
        );
    }
}

App.contextType = userDataContext;

export default App;
