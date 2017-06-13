import React from "react"
export default class Task extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isEditable: false};
    }

    handleDelete(e){
        e.preventDefault();
        this.props.onTaskDelete({
            task: {
                id: this.props.id,
                status: e.target.value
            }
        });
    }

    handleEditUpdate(e) {
        e.preventDefault();
        this.props.onTaskUpdate({task: {id: this.props.id, content: e.target.value}});
        this.setState({ isEditable: false });
    }

    handleUpdate(e){
        e.preventDefault();
        this.props.onTaskUpdate({
            task: {
                id: this.props.id,
                status: e.target.value
            }
        });
    }
    handleDoubleClick(e){
        e.preventDefault();
        this.setState({isEditable: true});
    }
    render(){
        return(
            <tr key={this.props.id}>
                <td onDoubleClick={this.handleDoubleClick.bind(this)}>
                    {this.state.isEditable ? (
                        <input type='text' defaultValue={this.props.content} onBlur={this.handleEditUpdate.bind(this)} />
                    ) : (
                        this.props.content
                    )}
                </td>
                <td>
                    <select
                        className="form-control"
                        defaultValue={this.props.status}
                        onChange={this.handleUpdate.bind(this)}
                    >
                        <option value="todo" key="todo">todo</option>
                        <option value="doing" key="doing">doing</option>
                        <option value="done" key="done">done</option>
                    </select>
                </td>
                <td>
                    <button type="button" name="delete" value="delete" onClick={this.handleDelete.bind(this)}>削除</button>
                </td>
            </tr>
        );
    }
}

