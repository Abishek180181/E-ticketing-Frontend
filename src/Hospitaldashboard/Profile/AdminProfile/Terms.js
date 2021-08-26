import React, { useEffect, useState } from 'react'
import { Container, Col, Form, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const Terms = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);
  return (
    <Container>
      <Row>
        <Col sm="12" className="text-center info_edit p-5 mb-3">
          <h2>Terms and Conditions</h2>
        </Col>
        {/* <Col sm={3}>
      </Col> */}
        <Col className="cng-psw mx-2">
          <Form>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              {/* <Form.Label style={{ fontWeight: '600' }}>Terms & Conditions</Form.Label> */}
              {/* <Form.Control as='textarea' type="text" /> */}
            </Form.Group>
            <div style={{ border: "1px solid black", padding: '2px', minHeight: '400px' }}>
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
            />
            </div>
            <div className="text-center">
              <Link className=" btn-edit justify-content-center" type="submit" name="submitEnquiry">
                <i class="fas fa-edit mr-3" style={{ fontSize: '20px' }}></i></Link>
            </div>
          </Form>
        </Col>
        {/* <Col sm={3}>
      </Col> */}
      </Row>
    </Container>
  )
}

export default Terms
