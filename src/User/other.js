import React,{useState,useEffect} from 'react'

const Other = (props) => {
    let{}=props
    return (
        <React.Fragment>
            <div className="container w-4">
                <form className="self">
                    <div className="form-row">
                        <div className="from-group">
                            <label>Patient Name</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="from-group">
                            <label>Age</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="from-group">
                            <label>Address</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-row">
                                    <div className="un">
                                        <div className="form-group mb-2">
                                            <label> Select Your Gender</label>
                                            
                                        </div>
                                        <div className="mb-2">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="gender" id="Male" value="Male"/>
                                                <label className="form-check-label" for="Male">Male</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="gender" id="Female" value="Female"/>
                                                <label className="form-check-label" for="Female">Female</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="gender" id="Other" value="Other"/>
                                                <label className="form-check-label" for="Other">Other</label>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                    <div className="form-row">
                        <div className="from-group">
                            <label>Departmnet</label>
                            <select  className="form-select" name="department" >
                                
                                <option value="ENT">ENT</option>
                                <option value="OPD">OPD</option>   
                            </select>
                        </div>
                    </div>
                    <div className="from-row">
                        <div className="from-group">
                            <label>Shift</label>
                                <select  className="form-select" name="shift">
                                    
                                    <option value="Morning">Morning</option>
                                    <option value="Afternoon">Afternoon</option>
                                    <option value="Evening">Evening</option>
                                </select>
                        </div>
                    </div>
                    <div className="from-row">
                        <div className="from-group">
                            <label>Time</label>
                            <input className="form-control" type="time"/>  
                        </div>
                    </div>
                    <div className="from-row">
                        <div className="from-group">
                            <label>Ticket Price: </label> <label>Rs 150</label>
                             
                        </div>
                    </div>
                    <div className="from-row">
                        <div className="from-group">
                            <button type="button" className="btn btn-primary"> Proceed</button>  
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default Other
