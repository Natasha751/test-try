import React, { Component } from 'react'

class CompB extends Component {

    render() {
        return (
            <div>
                <h1>ComponentB</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                {/* <pre>{this.props.message}</pre>
                <pre>{JSON.stringify(this.props.details)}</pre>
                {<h1>{this.props.details.emp_Id}</h1>} */}
            </div>
        )
    }
}

export default CompB
