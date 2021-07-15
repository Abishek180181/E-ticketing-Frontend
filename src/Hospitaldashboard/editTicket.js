import React,{useState,useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'

const EditTicket = (props) => {
    let{}=props
    return (
        <React.Fragment>
            


<div class="modal fade" id="editTicket" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel" style={{color:"#053742",fontSize:"25px",fontWeight:"bold"}}>Update Ticket</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form method="post" className="reg__form2">
					<Row>
						<Col lg={4} md={12} xs={12}>
							<div className="form-row ticket">
								<div className="form-group ">
									<label> Shift</label>									
									<input type="text" className="form-control" name="shift"/>
								</div>
								
							</div>
						</Col>

						<Col lg={4} md={12} xs={12}>
							<div className="form-row ticket">
								<div className="form-group">
									<label> Allocate Ticket</label>		
									<input className="form-control" type="number" name="ticketCount"/>
									
								</div>
							</div>
						</Col>

						<Col lg={4} md={12} xs={12}>
							<div className="form-row ticket">
								<div className="form-group">
									<label>Ticket Price</label>	
									<input className="form-control" type="number" name="price"/>
									
								</div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col lg={6} md={12} xs={12}>
							<div className="form-row ticket">
								<div className="form-group">
									<label>Date</label>
									<input className="form-control" type="date" name="startDate"/>
									
								</div>
							</div>
						</Col>
						<Col lg={6} md={12} xs={12}>
							<div className="form-row ticket">
								<div className="form-group">
									<label>Day</label>	
									<input className="form-control" type="text" id="endDate" name="endDate"/>
									
								</div>
							</div>
						</Col>
					</Row>

					<Row>
						<Col lg={6} md={12} xs={12}>
							<div className="form-row ticket">
								<div className="form-group">
									<label>Start Time</label>
									<input className="form-control" type="time" name="startTime"/>
									
								</div>
							</div>
						</Col>
						<Col lg={6} md={12} xs={12}>
							<div className="form-row ticket">
								<div className="form-group ">
									<label>End Time</label>	
									<input className="form-control" type="time" name="endTime" />
									
								</div>
							</div>
						</Col>
					</Row>

                    <Row>
                        <Col lg={6} md={12} xs={12}>
                            <div className="form-row ticket">
                                <div className="form-group">
                                <button type="submit" className="btn mt-3 mb-4 btn-danger" style={{ boxShadow: '4px 3px 8px #424242',padding: '7px 50px',float: 'right'}} name="issueTicket">Delete</button>
                                    
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={12} xs={12}>
                            <div className="form-row ticket">
                                <div className="form-group ">
                                <button type="submit" className="btn mt-3 mb-4 btn__Add" style={{ boxShadow: '4px 3px 8px #424242',padding: '7px 50px',float: 'left'}} name="issueTicket">Update</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
				</form>
      </div>
      
    </div>
  </div>
</div>
        </React.Fragment>
    )
}

export default EditTicket
