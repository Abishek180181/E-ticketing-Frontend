import React, { useEffect, useState } from 'react'
import { Container, Col, Form, Row } from 'react-bootstrap'
import axios from 'axios';
import { Editor } from "react-draft-wysiwyg";
import { EditorState,convertToRaw,convertFromRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import useCommon from '../../../common/useCommon'
import {useToasts} from 'react-toast-notifications'
import {stateToHTML} from 'draft-js-export-html'


const Terms = (props) => {
  const {} = props;
  const {auth} = useCommon();
  const {addToast} = useToasts();
  
  let [editorValue, setEditorValue] = useState(() =>
    EditorState.createEmpty()
  );
  let [parsed,setParsed] = useState({
    "description": ""
  })
  let [condition,setCondition] = useState({});
  

  useEffect(()=>{
    axios.get(process.env.REACT_APP_URL+"fetchTermsAndCondition")
    .then((response)=>{
      
      if(response.data.success == true)
      {
        const content = convertFromRaw(JSON.parse(response.data.data.description))
        let editorData = EditorState.createWithContent(content);  
        setEditorValue(
          editorData
        )
         setCondition(
           response.data.data
         )

         
      }
      else
      {
        setCondition({})
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  
 

  const addToTerms = (e)=>{
    e.preventDefault();
    axios.post(process.env.REACT_APP_URL+"addTermsAndCondition",parsed,auth.config)
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
        addToast(response.data.message,{
          "appearance":"error",
          "autoDismiss":true
        })
      }
    })
    .catch((err)=>{
      console.log(err);
    })

  }

  const changeHandler = ()=>{
    setParsed({
      ...parsed,
      ['description']:JSON.stringify(convertToRaw(editorValue.getCurrentContent()))
    })
  }
  
  return (
    <Container>
      <Row>
        <Col sm="12" className="text-center info_edit p-5 mb-3">
          <h2>Terms and Conditions</h2>
        </Col>
       
        <Col className="cng-psw mx-2">
          <Form method = "post" onSubmit={addToTerms}>
            <Form.Group className="mb-3" controlId="formGridAddress1">
             
            </Form.Group>
            <div style={{ border: "1px solid black", padding: '2px', minHeight: '400px' }}>
            <Editor
              editorState={editorValue}
              onEditorStateChange={(editorState) => {setEditorValue(editorState); changeHandler()}}
            />
            </div>
            <div className="text-center">
              <button className=" btn-edit justify-content-center" type="submit" name="submitEnquiry">
                <i class="fas fa-edit mr-3" style={{ fontSize: '20px' }}></i></button>
            </div>
          </Form>
        </Col>

        
      
      </Row>
    </Container>
  )
}

export default Terms
