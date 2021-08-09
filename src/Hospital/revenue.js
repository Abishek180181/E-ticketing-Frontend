import React,{useState,useEffect} from 'react'
import {Row,Col,Container,Table } from 'react-bootstrap'

const Revenue = (props) => {
    let{}=props
    return (
        <React.Fragment>
            <div className="container-fluid">
                <p style={{fontSize:"25px",color:"black",fontWeight:"bolder"}}>Revenue</p>
                <div className="headings">
                    <Row>
                        <Col lg={3}><label>Revenue</label></Col>
                        <Col lg={6}>
                            <div className="form-group revenue">
                                <input type="text"></input>
                            </div>
                        </Col>
                        <Col lg={3}>
                        <div className="form-group revenue">								
                            <select  className="form-select" name="shift">
                                <option value="select">Select</option>
                                <option value="Month">Month</option>
                                <option value="Week">Week</option>
                                <option value="Day">Day</option>
                            </select>
                        </div>
                        </Col>
                        <Col lg={12}>
                            <div class="card" style={{margin:"10px",width:"98%",height:'500px',background:'#4b1cac',boxShadow:"0px 0px 15px rgba(0,0,0,0.6)"}}>
                                <div class="card-body">
                                    
                                </div>
                            </div>
                        </Col>
                    </Row>
                    
                    
                    
                    
                </div>
                
            </div>
        </React.Fragment>
    )
}

export default Revenue
