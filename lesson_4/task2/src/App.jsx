import React from "react";
import { Provider } from "react-redux";
// import Counter from "./components/Counter";
import store from "./store";
import Users from "./users/Users";

const App = () => {
    return (
        <Provider store={store}>
            <Users />
        </Provider>
    );
};

export default App;
