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
                    onCreate={this.props.createTasks}
                    onDelete={this.props.deleteTasks}
                    onChange={this.props.updateTasks}
                />
            </>
        );
    }
}

TodoList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape()),
    getTaskList: PropTypes.func.isRequired,
    updateTasks: PropTypes.func.isRequired,
    deleteTasks: PropTypes.func.isRequired,
    createTasks: PropTypes.func.isRequired,
};
const mapDispatch = {
    getTaskList: tasksActions.getTaskList,
    updateTasks: tasksActions.updateTasks,
    deleteTasks: tasksActions.deleteTasks,
    createTasks: tasksActions.createTasks,
};
const mapState = (state) => {
    return {
        tasks: sortedTasksListSelector(state),
    };
};

export default connect(mapState, mapDispatch)(TodoList);
