import React,{useState,useEffect} from 'react'
import useHospitals from './useHospital'
import { withRouter } from 'react-router';

const Self = (props) => {
    let {} = props;
    let hospitalId = props.match.params.hospitalId;
    let {hospital,shifts} = useHospitals(hospitalId);

    //variable goes here
    var user = JSON.parse(sessionStorage.getItem('user'))

    let [buyTicketDetails,setDetails] = useState({
        "patientName":"",
        "age":"",
        "department":"",
        "shift":"",
        "address":user.address,
        "gender":user.gender,
        "hospitalId":hospitalId,
        "boughtFor":"Self",
        "config":{
            "headers":{
                "authorization":`Bearer ${sessionStorage.getItem('token')}`
            }
        }
    });

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
                            <option value=""> Select Department </option>
                                { 
                                    hospital.department &&(
                                        hospital.department.map((val)=>{
                                            return (
                                                <option value={val}>{val}</option>
                                            )
                                        })
                                    )
                                }
                               
                            </select>
                        </div>
                    </div>
                    <div className="from-row">
                        <div className="from-group">
                            <label>Shift</label>
                                <select  className="form-select" name="shift">
                                    <option value="Shift">Select Shift</option>
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
                    
                        <div className="text-center">
                            <button type="button" className="btn btn-md btn__Add w-25 mt-3" style={{boxShadow:"3px 4px 6px rgba(0,0,0,0.6)"}}> Proceed</button>  
                        </div>
                 
                </form>
            </div>
        </React.Fragment>
    )
}

export default withRouter(Self)
