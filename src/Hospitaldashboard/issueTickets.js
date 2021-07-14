import React, { useState, useEffect } from 'react';
import { Container, Row, Col,Table } from 'react-bootstrap';
import axios from 'axios';
import {useToasts} from 'react-toast-notifications'


const digitizer = (n) => {
    let num = n;
    if (num < 10) {
        num = "0" + num;
    }
    return num
}

const getFormattedToday = (date) => {
    return `${date.getFullYear()}-${digitizer(date.getMonth() + 1)}-${digitizer(date.getDate())}`
}

let today = new Date();
today.setDate(today.getDate()+1);
let minDate = getFormattedToday(today);
today.setDate(today.getDate()+6);
let maxDate = getFormattedToday(today)

const IssueTickets = (props) => {
	let {} = props;
	let {addToast} = useToasts();
	//state goes here
	let [ticketDetails,setDetails] = useState({
		"ticketCount":0,
		"price":0,
		"startDate":"",
		"endDate":"",
		"startTime":"",
		"endTime":"",
		"shift":"",
		"config":{
			"headers":{
				"authorization":`Bearer ${sessionStorage.getItem('token')}`
			}
		},
		"errors":{}
	})
	


	//handler goes here
	const changeHandler = (e)=>{
		const {name,value} = e.target;
		setDetails({
			...ticketDetails,
			[name]:value
		})
	}

	const dateFormatter = (e)=>{
		let endDate = document.querySelector('#endDate');
		let startDate = new Date(e.target.value);
		let minDate = getFormattedToday(startDate);
		startDate.setDate(startDate.getDate()+7);
		let maxDate = getFormattedToday(startDate);
		endDate.setAttribute('min',minDate);
		endDate.setAttribute('max',maxDate);
		endDate.value = "";
		ticketDetails['endDate'] = "";
		console.log(ticketDetails);
		endDate.disabled = false;
	}

	const issueTicket = (e)=>{
		e.preventDefault();
		
		let enddate = document.querySelector('#endDate').value;
		
		axios.post(process.env.REACT_APP_URL+"issueTickets",ticketDetails,ticketDetails.config)
		.then((response)=>{
			if(response.data.success == true)
			{
				addToast(response.data.message,{
					"appearance":"success",
					"autoDismiss":true
				})
				window.location.reload();
			}
			else
			{
				setDetails({
					...ticketDetails,
					["errors"]:response.data.error
				})
			}
		})
		.catch((err)=>{
			console.log(err);
		})
	}


	return (
		<React.Fragment>
			<div className="container">
				<h1 className="font-weight-bold mb-2 pb-3 red" style={{color:"red",fontWeight:"bold"}}>Issue Tickets</h1>
				<form method="post" className="reg__form2" onSubmit={issueTicket}>
					<Row>
						<Col lg={4} md={12} xs={12}>
							<div className="form-row ticket">
								<div className="form-group ">
									<label> Choose Shift</label>									
									<select  className="form-select" name="shift" onChange={(event)=>{changeHandler(event)}}>
									    <option value=""> Choose shift </option>
                                        <option value="Morning">Morning</option>
                                        <option value="Afternoon">Afternoon</option>
                                        <option value="Evening">Evening</option>
                                    </select>
								</div>
								{ticketDetails['errors']['shift']&& (<p> <small style={{color:"red"}}> *{ticketDetails['errors']['shift']} </small>  </p>)}
							</div>
						</Col>

						<Col lg={4} md={12} xs={12}>
							<div className="form-row ticket">
								<div className="form-group">
									<label> Allocate Ticket</label>		
									<input className="form-control" type="number" name="ticketCount" value={ticketDetails.ticketCount} onChange={(event)=>{changeHandler(event)}}/>
									{ticketDetails['errors']['ticketCount']&& (<p> <small style={{color:"red"}}> *{ticketDetails['errors']['ticketCount']} </small>  </p>)}
								</div>
							</div>
						</Col>

						<Col lg={4} md={12} xs={12}>
							<div className="form-row ticket">
								<div className="form-group">
									<label>Ticket Price</label>	
									<input className="form-control" type="number" name="price" value={ticketDetails.price} onChange={(event)=>{changeHandler(event)}}/>
									{ticketDetails['errors']['price']&& (<p> <small style={{color:"red"}}> *{ticketDetails['errors']['price']} </small>  </p>)}
								</div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col lg={6} md={12} xs={12}>
							<div className="form-row ticket">
								<div className="form-group">
									<label>Start Date</label>
									<input className="form-control" type="date" name="startDate" min={minDate} max={maxDate} value={ticketDetails.startDate} onChange={(event)=>{changeHandler(event); dateFormatter(event)}} required/>
									{ticketDetails['errors']['startDate']&& (<p> <small style={{color:"red"}}> *{ticketDetails['errors']['startDate']} </small>  </p>)}
								</div>
							</div>
						</Col>
						<Col lg={6} md={12} xs={12}>
							<div className="form-row ticket">
								<div className="form-group">
									<label>End Date</label>	
									<input className="form-control" type="date" id="endDate" name="endDate" onChange={(event)=>{changeHandler(event)}} required disabled/>
									{ticketDetails['errors']['endDate']&& (<p> <small style={{color:"red"}}> *{ticketDetails['errors']['endDate']} </small>  </p>)}
								</div>
							</div>
						</Col>
					</Row>

					<Row>
						<Col lg={6} md={12} xs={12}>
							<div className="form-row ticket">
								<div className="form-group">
									<label>Start Time</label>
									<input className="form-control" type="time" name="startTime" value={ticketDetails.startTime} onChange={(event)=>{changeHandler(event)}}/>
									{ticketDetails['errors']['startTime']&& (<p> <small style={{color:"red"}}> *{ticketDetails['errors']['startTime']} </small>  </p>)}
								</div>
							</div>
						</Col>
						<Col lg={6} md={12} xs={12}>
							<div className="form-row ticket">
								<div className="form-group ">
									<label>End Time</label>	
									<input className="form-control" type="time" name="endTime" value={ticketDetails.endTime} onChange={(event)=>{changeHandler(event)}}/>
									{ticketDetails['errors']['endTime']&& (<p> <small style={{color:"red"}}> *{ticketDetails['errors']['endTime']} </small>  </p>)}
								</div>
							</div>
						</Col>
					</Row>
					{ticketDetails['errors']['random']&& (<p className="text-center"> <small style={{color:"red"}}> *{ticketDetails['errors']['random']} </small>  </p>)}

					<div className="text-center">
						<button type="submit" className="btn btn-lg mt-3 mb-4 bg__color" style={{ boxShadow: '4px 3px 8px #424242',padding: '7px 120px' }} name="issueTicket">Add</button>
					</div>
				</form>

				<Row>
					
				
						<Col lg={12} md={12} xs={12}>
							<Table bordered hover responsive className="table__items w-100"> 
								<thead>
									<tr className="text-center">
									    <th> S.N </th>
										<th>Start Date</th>
										<th> End Date </th>
										<th> Shift </th>
										<th>Time</th> 
										<th>Quantity</th>
										<th>Edit</th>
										<th>Delete</th>
									</tr>
								</thead>
							</Table>
						</Col>

					
				</Row>
				
			</div>
			
								
		</React.Fragment>
	);
};

export default IssueTickets;
