import React from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import request from 'superagent';

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

    loadTaskFromServer(){
        request
            .get(this.props.url)
            .accept('application/json')
            .end((err,res) => {
                if (err || !res.ok){
                    console.error(this.props.url,
                        status,err.toString());
                }else{
                    this.setState({data: res.body});
                }
            });
    }


    handleTaskSubmit(task){
        const tasks = this.state.data;
        const id = this.state.data.length + 1;
        const newTasks = tasks.concat([Object.assign(task,{id: id})]);
        this.setState({data: newTasks});
        request
            .post(this.props.url)
            .accept('application/json')
            .send({task: task})
            .end((err,res) => {
                if(err || !res.ok){
                    console.error(this.props.url,
                        status,err.toString());
                } else {
                    this.setState({data: newTasks});
                }
            });
    }

    componentDidMount(){
        this.loadTaskFromServer();
        setInterval(this.loadTaskFromServer.bind(this),
                    this.props.pollInterval);
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
