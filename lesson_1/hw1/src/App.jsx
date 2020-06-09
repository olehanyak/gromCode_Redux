import React, { Component } from "react";
import Header from "./Header";
import { userDataContext } from "./UserData";

class App extends Component {
    state = {
        userData: {
            name: "Nikola Tesla",
            avatar_url: "https://avatars3.githubusercontent.com/u10001",
        },
    };

    render() {
        console.log(this.context);

        return (
            <userDataContext.Provider value={this.state.userData}>
                <div className="page">
                    <Header />
                </div>
            </userDataContext.Provider>
        );
    }
}

App.contextType = userDataContext;

export default App;
