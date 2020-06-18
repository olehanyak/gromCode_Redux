import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Weather from "./weather/Weather";

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Weather />
            </div>
        </Provider>
    );
};

export default App;
