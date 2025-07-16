import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import axios from 'axios'

const Addstudent = () => {
     const [input,changeInput]=useState(
            {name:"",roll_number: "",admission_number: "",college: ""}
        )
        const inputHandler=(event)=>{
                    changeInput( {...input,[event.target.name]:event.target.value} )
        
        }
        const readValues=()=>{
            console.log(input)
            axios.post("http://18.144.111.41/student_api.php",input).then(
                (response)=>{
                    alert("Successfully Added")
                }
            ).catch(() => {
            alert("Something Went Wrong")

        })
        }
  return (
    <div>
        <Navbar/>
            <h1 className='header'><center>Add Student</center></h1><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler}/>


                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <label htmlFor="" className="form-label">Roll No</label>
                                <input type="text" className="form-control" name='roll_number' value={input.roll_number} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Admission No</label>
                                <input type="text" className="form-control" name='admission_number' value={input.admission_number} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">College</label>
                                <input type="text" className="form-control" name='college' value={input.college} onChange={inputHandler}/><br/>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="button btn btn-primary" onClick={readValues}>Add Student</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Addstudent