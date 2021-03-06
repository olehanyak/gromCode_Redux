import React, { Component } from "react";
import PropTypes from "prop-types";
import Task from "./Task";
import CreateTaskInput from "./CreateTaskInput";

const TasksList = ({ tasks, onCreate, onDelete, onChange }) => {
  
    return (
        <div className="todo-list">
            <CreateTaskInput onCreate={onCreate} />
            <ul className="list">
                {tasks.map((task) => {
                    return <Task key={task.id} {...task} onChange={onChange} onDelete={onDelete} />;
                })}
            </ul>
        </div>
    );
};

TasksList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            done: PropTypes.bool,
            id: PropTypes.string,
        })
    ).isRequired,

    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default TasksList;
