import CompB from './CompB'
import CompC from './CompC'
let CompA = () => {
    let msg = "Good Morning"
    let emp_Details = {
        emp_Id: 101,
        emp_Sal: 25000
    }

    return <div>
        <h1>Component A</h1>
        <hr />
        <CompB message={msg} details={emp_Details} />
        <CompC message={msg}/>
    </div>
}
export default CompA