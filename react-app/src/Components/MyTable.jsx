import React from "react";
import './MyTable.css'

export default class MyTable extends React.Component {
    
    state = {
        /* Stílus így is megadható
        style: {
            table: {},
            td: {}
        }
        */   
       rows: [] 
    }
      

    render() {
        return <div>
            <table className="table">
                <tbody>
                    <tr>
                        <td>TODO - {JSON.stringify(this.state.rows)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    }

    componentDidMount() {
        const words = this.props.data.split(" ")
        console.log('words', words)
        this.setState({rows: words})
    }
}