import React from "react";
import './MyTable.css'

// MyTable component
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
    
    handleDelClick = function(rowIdx) {
        const oldRows = this.state.rows.slice() // shallow copy
        const newRows = [...oldRows]
        newRows.splice(rowIdx, 1) // delete
        this.setState({rows: [...newRows]}) // rerenderer now
    }

    render() {
        return <div>
            <table className="table">
                <tbody>
                    {/*
                    <tr>
                        <td>{JSON.stringify(this.state.rows)}</td>
                    </tr>
                    */}

                    {this.state.rows.map((word, wordIdx) =>
                        <tr key={wordIdx}>
                            <td>
                                <button onClick={() => this.handleDelClick(wordIdx)} className="table-btn">Del row</button>
                            </td>
                            {[...word].map((char, charIdx) => <td key={charIdx}>{char == '_' ? ' ' : char}</td>)}
                        </tr>)}    
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