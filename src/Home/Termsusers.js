import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Container,Row,Col} from 'react-bootstrap';
import {stateToHTML} from 'draft-js-export-html'
import {convertFromRaw} from "draft-js";
import useLoader from '../common/useLoader';
import Skeleton from '../common/Skeleton'


const Termsusers = () => {
  let [condition,setCondition] = useState({});
  const {loading,loadingHandler} = useLoader();
  

  useEffect(()=>{
    loadingHandler(true)
    axios.get(process.env.REACT_APP_URL+"fetchTermsAndCondition")
    .then((response)=>{
      
      if(response.data.success == true)
      {
        
         setCondition(
           response.data.data
         )

         
      }
      else
      {
        setCondition({})
      }
      loadingHandler(false)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])


  const convertFromJSONToHTML = (text) => {
    try{
        let conversion =  { __html: stateToHTML(convertFromRaw(JSON.parse(text)))}
        return conversion
      } catch(exp) {
        console.log(exp)
        return { __html: 'Error' }
      }
  }


  return (
    <React.Fragment>
          <Container className="mb-4">
              <Row>
                <Col lg={12}>
                    <h5 className="text-center mt-3 mb-3" style={{fontWeight:"bolder",color:"black",fontSize:"23px"}}> Terms And Conditions  </h5>
                    <div style={{width:"120px",height:"4px",background:"#4b1cac",marginLeft:"auto",marginRight:"auto",marginBottom:"30px"}}></div>
                </Col>
               
                <Col lg={12}>
                  {
                    loading == true?
                    (
                      <Skeleton/>
                    ):
                    condition&&
                    (
                    
                          <div dangerouslySetInnerHTML={convertFromJSONToHTML(condition.description)} ></div>
                      
                    )
                  }
                
                </Col>
              </Row>
          </Container>
    </React.Fragment>
  )
}

export default Termsusers
