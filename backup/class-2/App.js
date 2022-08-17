import React from 'react'
import CompA from './Component/CompA'
import CompC from './Component/CompC'
class App extends React.Component {
    render() {
        return (
            <div>
               
                <CompA />
                <CompC />
            </div>
        )
    }
}

export default App