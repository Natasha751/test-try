import React from 'react'
import CompB from './CompB'
import CompD from './CompD'


let CompC = (props) => {
   
    let x=1;

    return <div>
        <h1>Component C</h1>
        <hr />
        <CompB test={x}/>
        <pre>{JSON.stringify(props)}</pre>
        <CompD testmess= {props.message} />
    </div>
}
export default CompC

