import React,{useState,useEffect} from 'react'
import {Row,Col,Container,Table} from 'react-bootstrap'

const Overview = (props) => {
    let{}=props
    return (
        <React.Fragment>
            <div className="container">
                <p style={{fontSize:"25px",color:"Black",fontWeight:"bolder"}}>Overview</p>
                <Row>
                    <Col lg={4} md={12} xs={12}>
                        <div className="card" style={{margin:"10px",width:"350px",height:'200px',background:'#43e0aa',boxShadow:"0px 0px 15px rgba(0,0,0,0.6)"}}>
                            <div className="card-body">

                            </div>
                        </div>

                    </Col>
                    <Col lg={4} md={12} xs={12}>
                    <div className="card" style={{margin:"10px",width:"350px",height:'200px',background:'#43e0aa',boxShadow:"0px 0px 15px rgba(0,0,0,0.6)"}}>
                            <div className="card-body">
                                
                            </div>
                        </div>
                        
                    </Col>
                    <Col lg={4} md={12} xs={12}>
                    <div className="card" style={{margin:"10px",width:"350px",height:'200px',background:'#43e0aa',boxShadow:"0px 0px 15px rgba(0,0,0,0.6)"}}>
                            <div className="card-body">
                                
                            </div>
                        </div>
                        
                    </Col>
                </Row>
                <p style={{fontSize:"25px",color:"Black",fontWeight:"bolder"}}>Hospitals</p>
                <Table bordered hover responsive className="table__items w-100"> 
                    <thead>
                        <tr className="text-center">
                            <th> S.N </th>
                            <th>Name</th>
                            <th> Username </th>
                            <th> Email </th>
                            <th>Address</th> 
                            
                        </tr>
                    </thead>
                
                </Table>
                <p style={{fontSize:"25px",color:"Black",fontWeight:"bolder"}}>Users</p>
                <Table bordered hover responsive className="table__items w-100"> 
                    <thead>
                        <tr className="text-center">
                            <th> S.N </th>
                            <th>Name</th>
                            <th> Phone </th>
                            <th> Email </th>
                            <th>Address</th> 
                            
                        </tr>
                    </thead>
                
                </Table>


            </div>
        </React.Fragment>
    )
}

export default Overview
