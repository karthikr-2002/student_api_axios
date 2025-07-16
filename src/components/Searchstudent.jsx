import React from 'react'
import Navbar from './Navbar'
import { useState, useEffect } from 'react'

const Searchstudent = () => {
   
    const [input, changeInput] = useState(
        {  roll_number: "" }
    )
     const inputHandler=(event)=>{
                    changeInput( {...input,[event.target.name]:event.target.value} )
        
        }
        const readValues=()=>{
            console.log(input)
            
        }

        



    return (
        <div>
            <Navbar />

            <h1 className='header'><center>Search Student</center></h1><br></br>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Roll No</label>
                                <input type="text" className="form-control" name='roll_number' value={input.roll_number} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <br></br><button className="btn btn-primary" onClick={readValues}>Search</button>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </div>
    )
}

export default Searchstudent