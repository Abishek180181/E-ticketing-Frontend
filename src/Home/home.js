import React, { useState, useEffect } from 'react';
import { Container, Row, Col,Table } from 'react-bootstrap';

const Home = (props) => {
	let {} = props;
	return (
		<React.Fragment>
			<div className="container">
				<h1 className="font-weight-bold mb-2 pb-3 red" style={{color:"red"}}>Issue Ticket</h1>
				<form method="post">
					<Row>
						<Col lg={4} md={12} xs={12}>
							<div className="form-row ticket">
								<div className="form-group ">
									<label> Choose Shift</label>
									
									<select  className="form-control">
                                        <option value="shift">Morning</option>
                                        <option value="shift">Afternoon</option>
                                        <option value="shift">Evening</option>

                                    </select>
								</div>
							</div>
						</Col>

						<Col lg={4} md={12} xs={12}>
							<div className="form-row ticket">
								<div className="form-group">
									<label> Allocate Ticket</label>
									
									<input className="form-control" type="text" name="allocate" />
								</div>
							</div>
						</Col>

						<Col lg={4} md={12} xs={12}>
							<div className="form-row ticket">
								<div className="form-group">
									<label>Ticket Price</label>
									
									<input className="form-control" type="text" name="price" />
								</div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col lg={6} md={12} xs={12}>
							<div className="form-row ticket">
								<div className="form-group">
									<label>Start Date</label>
									
									<input className="form-control" type="date" name="start" />
								</div>
							</div>
						</Col>
						<Col lg={6} md={12} xs={12}>
							<div className="form-row ticket">
								<div className="form-group">
									<label>End Date</label>
									
									<input className="form-control" type="date" name="start" />
								</div>
							</div>
						</Col>
					</Row>

					<Row>
						<Col lg={6} md={12} xs={12}>
							<div className="form-row ticket">
								<div className="form-group">
									<label>Start Time</label>
									
									<input className="form-control" type="time" name="start" />
								</div>
							</div>
						</Col>
						<Col lg={6} md={12} xs={12}>
							<div className="form-row ticket">
								<div className="form-group ">
									<label>End Time</label>
									
									<input className="form-control" type="time" name="start" />
								</div>
							</div>
						</Col>
					</Row>
				</form>
				<button type="submit" className="btn btn-lg mt-3 mb-4 bg__color  text-center"
											style={{
												boxShadow: '4px 3px 8px #424242',
												padding: '7px 120px', position:"center"}}>Add</button>
			</div>

            
                                    <Col lg={6} md={12} xs={12}style={{clear: 'both'}}>
                                        <Table bordered hover responsive className="table__items"> 
                                            <thead>
                                                <tr className="text-center">
                                                    <th>Start Date</th>
                                                    <th> End Date </th>
                                                    <th> Shift </th>
                                                    <th>Time</th> 
                                                    <th>Quantity</th>
                                                </tr>
                                            </thead>
                                        </Table>
                                    </Col>
		</React.Fragment>
	);
};

export default Home;
