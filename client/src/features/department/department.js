import React, {useState} from "react";
 

   const Department = () => {
    // const [department, setDepartment] = useState('')

    //  const handleCreateDepartment = event=> {
    //      setDepartment(event.target.value)
    // }

    
    return (
        <div>
            <h3>Create Department</h3>
            <hr></hr>
            <form>
                <label for='department'>Create Department</label>
                <input type='text' value='' placeholder="Enter Department Name"></input>
                <button>Create</button>
            </form>
        </div>
    )
}


export default Department;