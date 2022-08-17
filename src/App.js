import React from 'react'

import Navbar from './Navbar/Navbar'
import Employee from './Employee/Employee'
class App extends React.Component {
    render() {
        return <>
            <Navbar />
            <h1>App Component</h1>
            <hr />
            <Employee />
        
        </>
    }
}


export default App