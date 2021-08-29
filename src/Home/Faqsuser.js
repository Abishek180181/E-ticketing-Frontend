import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Container,Row,Col} from 'react-bootstrap';
import {BsFillPlusCircleFill} from 'react-icons/bs'
import {FaQuestionCircle,FaMinusCircle} from 'react-icons/fa'
import useLoader from '../common/useLoader'
import Skeleton from '../common/Skeleton'


const Faqsuser = (props) => {
  const {} = props;
  const {loading,loadingHandler} = useLoader();

  //state goes here
  let [questions,setQuestions] = useState([]);
  let [switchBox,setSwitchBox] = useState([]);
  let [count,setCount] = useState(0);
  
  
  useEffect(()=>{
    loadingHandler(true)
    axios.get(process.env.REACT_APP_URL+"getFAQ")
    .then((response)=>{
      if(response.data.success == true)
      {
        setQuestions(
          response.data.data
        )
      }
      else
      {
        setQuestions([])
      }
      loadingHandler(false)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  const faqFunctionality = (e,id)=>{
    if(switchBox.includes(id.toString()))
    {
      let index = switchBox.indexOf(id.toString())
      switchBox.splice(index,1); 
      setCount(
        count-=1
      )
    }
    else
    {
      switchBox.push(id.toString())
      setCount(
        count+=1
      )
      
    }
    setSwitchBox(
      switchBox
    )
    
  }


  return (

    <React.Fragment>
      <Container className="mb-4">
        <Row>
          <Col lg={12}>
             <h5 className="text-center mt-3 mb-3" style={{fontWeight:"bolder",color:"black",fontSize:"23px"}}> Frequently Asked Questions <FaQuestionCircle style={{fontSize:"23px"}}/> </h5>
             <div style={{width:"120px",height:"4px",background:"#4b1cac",marginLeft:"auto",marginRight:"auto",marginBottom:"30px"}}></div>
          </Col>
          {
            loading == true?
            (
              <Skeleton/>
            ):
            questions.length > 0 &&
            (
              <Col lg={12}>
                 <div className="faq__background">
                    
                       <Row>
                         {
                           questions.map((val)=>{
                             return(
                               <>
                                 <Col lg={2} xs={1} md={2}></Col> 
                                 <Col lg={8} xs={10} md={8}>
                                  <div className ="faq mb-4">
                                      <Row>
                                        <Col lg={11} xs={10} md={10}>
                                            <p className="text-justify" style={{fontWeight:"bold",color:"black",position:"relative",top:"10px"}}> <strong> {questions.indexOf(val)+1}. </strong> {val.question} </p>
                                        </Col>
                                        <Col lg={1} xs={2} md={2}>
                                          <button class="btn" onFocus={(e)=>{e.target.style.boxShadow="none";}} onClick={(e)=>{faqFunctionality(e,val._id)}} style={{background:"none",border:"none",outline:"none"}} type="button" data-bs-toggle="collapse" data-bs-target={`#question${val._id}`} aria-expanded="false" aria-controls="collapseExample">
                                            {
                                              switchBox.includes(val._id.toString())?
                                              (
                                                <FaMinusCircle style={{fontSize:"24px"}}/>
                                              ):
                                              (
                                                <BsFillPlusCircleFill style={{fontSize:"24px"}}/>
                                              )
                                            }
                                           
                                          </button>
                                        </Col>
                                        <div className="collapse" id={`question${val._id}`}>
                                       
                                         
                                          <p style={{textAlign:"justify"}}><strong>Answer: </strong> {val.answer}</p>
                                          
                                            
                                         
                                        </div>
                                      </Row>
                                      
                                  </div>
                                 
                                 </Col> 
                                 <Col lg={2} xs={1} md={2}></Col>   
                               </>
                             )
                           })
                         }
                       </Row>
                   
                 </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </React.Fragment>
  )

}

export default Faqsuser

