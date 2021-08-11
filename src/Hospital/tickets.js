import React,{useState,useEffect} from 'react'
import { Row,Col,Container,Table,Card } from 'react-bootstrap'
import {BiSearchAlt} from 'react-icons/bi'

const Tickets = (props) => {
    let{}=props
    return (
        <React.Fragment>
            <div className="container">
                <p style={{fontWeight:"bolder",fontSize:"23px",marginLeft:"10px"}}> Tickets  </p>
            
           
              <Row className='m-3'>
                <form method = "post">
                    <div className="form-group searchBar">
                        <div class="input-group">
                            <input type="text" className="form-control" name="search"placeholder="Search hospitals..."/>
                            <span className="icon-inside"><BiSearchAlt style={{color:"grey",fontSize:"25px"}}/></span>
                        </div>
                    </div>
                </form>
              </Row>
                <div className="table">
                    <Table bordered hover responsive className="table__items w-100"> 
                        <thead>
                            <tr className="text-center">
                                <th>S.N.</th>
                                <th> Patient Name </th>
                                <th> Phone </th>
                                <th>Email</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                    </Table>
                </div>

          </div>
          
            
        </React.Fragment>
    )
}

export default Tickets
