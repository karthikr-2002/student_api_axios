import React from 'react'
import Navbar from './Navbar'

const Deletestudent = () => {
  return (
    <div>
        
        <Navbar/>
     <h1 className='header'><center>Delete Student</center></h1><br></br>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Roll No</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <br></br><button className="btn btn-danger">Delete</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


    </div>
  )
}

export default Deletestudent