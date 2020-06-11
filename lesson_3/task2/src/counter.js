
export const INCREMENT = 'COUNTER/INCREMENT';
export const DECREMENT = 'COUNTER/DECREMENT';
export const RESET = 'COUNTER/RESET';

export const increment = () => {
    return {
        type: INCREMENT,
    }
};

export const decrement = () => {
    return {
        type: DECREMENT,
    }

};

export const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;

        default:
            return state;
    }
};


