import React,{useState,useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import Self from './self';
import Other from './other'
import './ticket.css';
import {AiFillInfoCircle} from 'react-icons/ai'


const Buyticket = (props) => {
    let {} = props;
    let [direction,setDirection] = useState("Self");
    
    const switchDirection = (e) =>{
        let direction = e.target.innerHTML;
        if(direction == "Others")
        {
            document.querySelector(`#btn`).style.left = "110px";
            document.querySelector('.btn__2').style.color="white";
            document.querySelector('.btn__1').style.color="#0f6c81";
        }
        else if(direction == "Self")
        {
            document.querySelector(`#btn`).style.left = "0px";
            document.querySelector('.btn__1').style.color="white";
            document.querySelector('.btn__2').style.color="#0f6c81";
        }

        setDirection(
            direction
        )
    }

    return (
        <React.Fragment>
          <Container>
              <Row>
                 
                  <Col lg={3} xs={2} md={2} className="d-none d-md-none d-lg-block"></Col>
                  <Col lg={6} md={10} xs={10}>
                      <div className="outer__design">
                      {/* <div className="hButton" style={{float:"right"}}>
                            <button className="btn w-100" style={{border:"none",background:"rgba(255,255,255,0.6)"}} type="button" name="iconBtn"> <AiFillInfoCircle/> </button> 
                            <div className="hover__effect"> <small>Hello I am here</small> </div>
                        </div> */}
                            <div className='button-box'>
                                <div id='btn'></div>
                                <button type='button' onClick={(e)=>{switchDirection(e)}} className='toggle-btn btn__1' style={{fontWeight:"600",color:"white"}}>Self</button>
                                <button type='button' onClick={(e)=>{switchDirection(e)}} className='toggle-btn btn__2 txt__primary' style={{fontWeight:"600"}}>Others</button>
                            </div>

                            {
                                direction == "Self"?
                                (
                                    <Self/>
                                ):
                                (
                                    <Other/>
                                )
                            }
                      </div>
                  </Col>
                  <Col lg={3} xs={2} md={2} className="d-none d-md-none d-lg-block"></Col>
              </Row>
          </Container>
           
                       
                
            
        </React.Fragment>
    )
}

export default Buyticket
