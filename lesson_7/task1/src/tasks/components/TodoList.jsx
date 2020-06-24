import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import TaskList from "./TaskList";
import * as tasksActions from "../task.action";
import { sortedTasksListSelector } from "../task.selector";

class TodoList extends Component {
    componentDidMount() {
        this.props.getTaskList();
    }

    render() {
        console.log(this.props);

        return (
            <>
                <h1 className="title">Todo List</h1>
                <TaskList
                    tasks={this.props.tasks}
                    onCreate={this.props.createTask}
                    onDelete={this.props.deleteTask}
                    onChange={this.props.updateTask}
                />
            </>
        );
    }
}

TodoList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape()),
    getTaskList: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    createTask: PropTypes.func.isRequired,
};
const mapDispatch = {
    getTaskList: tasksActions.getTaskList,
    updateTask: tasksActions.updateTask,
    deleteTask: tasksActions.deleteTask,
    createTask: tasksActions.createTask,
};
const mapState = (state) => {
    return {
        tasks: sortedTasksListSelector(state),
    };
};

export default connect(mapState, mapDispatch)(TodoList);
