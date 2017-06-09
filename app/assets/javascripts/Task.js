import React from "react"
export default class Task extends React.Component {
    handleDelete(e){
        e.preventDefault();
        this.props.onTaskDelete({
            task: {
                id: this.props.id, 
                status: e.target.value
            }
        });
    }

    render(){
        return(
            <tr key={this.props.id}>
                <td>
                    {this.props.content}
                </td>
                <td>
                    {this.props.status}
                </td>
                <td>
                    <button type="button" name="delete" value="delete" onClick={this.handleDelete.bind(this)}>削除</button>
                </td>
            </tr>
        );
    }
}

