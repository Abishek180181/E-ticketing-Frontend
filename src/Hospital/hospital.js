import React,{sestate,useEffect} from 'react'
import {Container,Col,Row,Card} from 'react-bootstrap'
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Button } from 'bootstrap';
import {BiSearchAlt} from 'react-icons/bi'

function Hospital(props) {
    let{}=props
    return (
        <React.Fragment>
            <div className="container">
            <h1>Hospital</h1>
          <div className="chart">
              <Row>
                <Col lg={4} md={12} xs={12}>
                    <Link to="" className="card__features">
                    <Card style={{margin:"10px",width:"350px",height:'200px',background:'#0093E9', boxShadow:"0px 0px 35px rgba(0,0,0,0.6)"}}>
                            <div className="img__card">                                                
                            <Card.Img variant="top" />
                            </div> 
                            <Card.Body>
                                <Card.Title className="text-center" style={{color:"black",fontSize:"15px",marginBottom:"0px"}}></Card.Title>
                            
                                
                            </Card.Body>
                            </Card>
                            </Link>
                    </Col>
                    <Col lg={4} md={12} xs={12}>
                    <Link to="" className="card__features">
                    <Card style={{margin:"10px",width:"350px",height:'200px',background:'#8a2334', boxShadow:"0px 0px 35px rgba(0,0,0,0.6)"}}>
                            <div className="img__card">                                                
                            <Card.Img variant="top" />
                            </div> 
                            <Card.Body>
                                <Card.Title className="text-center" style={{color:"black",fontSize:"15px",marginBottom:"0px"}}></Card.Title>
                            
                                
                            </Card.Body>
                            </Card>
                            </Link>
                    </Col>
              </Row>

          </div>

            <div className="boxcontainer">
                <table className="element">
                    <tr>
                        <td>
                            <input type="text" placeholder="Search" className="search"></input>
                        </td>
                        <td>
                            <a href="#"><BiSearchAlt style={{height: "30px",width: "30px"}}/></a>
                        </td>
                    </tr>
                </table>
            </div>
            <div className ="add-btn">
                <button type="submit" className="Add" name="add" > Add </button>
            </div>

        </div>
         
           
        </React.Fragment>
    )
}

export default Hospital
