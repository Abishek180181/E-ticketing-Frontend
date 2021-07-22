import React,{useState,useEffect} from 'react'

const Self = (props) => {
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

export default Self
