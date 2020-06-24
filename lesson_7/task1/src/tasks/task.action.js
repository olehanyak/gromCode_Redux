import { fetchTasksList, createTask, updateTask, deleteTask } from "./tasksGateway";
import { tasksListSelector } from "./task.selector";

export const TASKS_LIST_RECEIVED = 'TASKS/TASKS_LIST_RECEIVED';

export const taskListReceived = (tasksList) => {
    return {
        type: TASKS_LIST_RECEIVED,
        payload: {
            tasksList,
        }
    };
};

// export const getTaskList = () => (dispatch) => {
//     return fetch('https://5ec23d7e8ebdcc0016a59a7a.mockapi.io/api/v1/tasks')
//         .then((res) => res.json())

//         .then(tasksList => dispatch(taskListReceived(tasksList)))
// };


export const getTaskList = () => {
    const thunkAction = function (dispatch) {

        return fetchTasksList()
            .then(arrayOfObjects => dispatch(taskListReceived(arrayOfObjects)));
    }
    return thunkAction;
};


export const updateTasks = (taskId) => {
    const thunkAction = function (dispatch, getState) {
        const state = getState();
        const tasksList = tasksListSelector(state);
        const task = tasksList.find((task) => task.id === taskId);
        const updatedTask = {
            ...task,
            done: !task.done,
        };

        updateTask(updatedTask)
            .then(tasksList => dispatch(taskListReceived(tasksList)));
    }
    return thunkAction;
};

export const deleteTasks = (taskId) => {
    const thunkAction = function (dispatch) {
        deleteTask(taskId).then(() => dispatch(getTaskList()));
    };

    return thunkAction;
};

export const createTasks = (text) => {
    const thunkAction = function (dispatch) {
        const newTask = {
            text,
            done: false,
            createdAt: new Date().toISOString(),
        };
        createTask(newTask).then(() => dispatch(getTaskList()));
    };

    return thunkAction;
};