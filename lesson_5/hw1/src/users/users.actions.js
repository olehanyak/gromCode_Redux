export const SET_FILTER_TEXT = "FILTER/SET_FILTER_TEXT";

export const setFilterText = (text) => {
    return {
        type: SET_FILTER_TEXT,
        payload: {
            text,
        },
    };
};