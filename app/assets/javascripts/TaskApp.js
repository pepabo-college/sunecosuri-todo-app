import React from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default class TaskApp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: [
                {
                id: 1,
                content: "test_data",
                status: "todo",
                url: ";/tasks/1.json"
                }

            ]
        }
    }

    handleTaskSubmit(task){
        const tasks = this.state.data;
        const id = this.state.data.length + 1;
        const newTasks = tasks.concat([Object.assign(task,{id: id})]);
        console.log(newTasks);
        this.setState({data: newTasks});
    }

    render() {
        return (
            <div className="taskApp">
                <TaskForm
                onTaskSubmit={this.handleTaskSubmit.bind(this)}/>
                    <table>
                        <thead>
                            <tr>
                                <th>Content</th>
                                <th>Status</th>
                                <th colSpan="3"></th>
                            </tr>
                        </thead>
                        <TaskList data={this.state.data} />
                    </table>
            </div>
        );
    }
}
