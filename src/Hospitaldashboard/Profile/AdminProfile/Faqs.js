import React from 'react'
import { Container, Col, Form, Row, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Faqs = () => {
  return (
    <>
      <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="forgotpassword" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog  modal-dialog-centered ">
          <div class="modal-content forgot">
            <div class="modal-header" style={{ backgroundColor: 'green', color: 'white' }}>
              <h5 class="modal-title" id="exampleModalLabel">Change Questions!</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" style={{ backgroundColor: '#fff' }}>
              <form method="post">
                <div className="form-row">
                  <div className="form-group">
                    <label style={{ color: 'black', fontWeight: "bold", fontSize: "15px" }}>Question</label>
                    <input type="email" className="form-control m-1" name="email" value="" required />
                  </div>
                  <div className="form-group">
                    <label style={{ color: 'black', fontWeight: "bold", fontSize: "15px" }}>Answer</label>
                    <textarea className="form-control m-1" name="email" value="" required />
                  </div>
                </div>
                <div className="col-12 mt-3 mx-auto">
                  <div className="text-left pl-5" style={{ float: 'right' }}>
                    <Link type="button" className="btn btn-danger btn-lg mr-3" id="cancel" name="cancel" style={{ boxShadow: "2px 2px 6px rgba(0,0,0,0.6)" }} data-bs-dismiss="modal">Close</Link>
                    <Link type="submit" className="btn btn-success btn-lg" name="proceed" style={{ boxShadow: "2px 2px 6px rgba(0,0,0,0.6)", marginLeft: "2rem" }}>Change</Link>
                  </div>
                </div>
              </form>


            </div>

          </div>
        </div>
      </div>
      {/* delete faq */}
      <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="deletefaq" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog  modal-dialog-centered ">
          <div class="modal-content forgot">
            <div class="modal-header" style={{ color: 'red' }}>
              <h5 class="modal-title" id="exampleModalLabel">Are you sure you want to delete this question ?</h5>
              {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
            </div>
            <div class="modal-body" style={{ backgroundColor: '#fff' }}>
              <form method="post">
                <div className="form-row">
                </div>
                <div className="col-12 mt-3 mx-auto">
                  <div className="text-left pl-5" style={{ float: 'right' }}>
                    <Link type="button" className="btn btn-success btn-lg mr-3" id="cancel" name="cancel" style={{ boxShadow: "2px 2px 6px rgba(0,0,0,0.6)" }}>Delete</Link>
                    <Link type="submit" className="btn btn-danger btn-lg" name="proceed" style={{ boxShadow: "2px 2px 6px rgba(0,0,0,0.6)", marginLeft: "2rem" }} data-bs-dismiss="modal">Close</Link>
                  </div>
                </div>
              </form>


            </div>

          </div>
        </div>
      </div>
      <Container>
        <Row>
          <Col sm="12" className="text-center info_edit p-5 mb-3">
            <h2>Frequently Asked Questions</h2>
          </Col>
          {/* <Col sm={3}>
      </Col> */}
          <Col sm={12} className="cng-psw mx-5">
            <Form>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label style={{ fontWeight: '600' }}>Add Question</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label style={{ fontWeight: '600' }}>Add Answer</Form.Label>
                <Form.Control as='textarea' rows="4" type="text" />
              </Form.Group>
              <div className="text-center">
                <Button className="btn-edit justify-content-center w-50" type="submit" name="submitEnquiry">
                  Save</Button>
              </div>

            </Form>
          </Col>
          <Col sm={12} className="my-4">
            <Table bordered hover responsive className="table__items w-100">
              <thead>
                <tr className="text-center">
                  <th> S.N </th>
                  <th>Questions</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr className="text-center">
                  <td style={{ fontWeight: "bolder" }}> 1 </td>
                  <td> questions </td>
                  <td><Link className="" style={{ margin: '5px 0 5px 20px', color: 'white', borderRadius: '10px', fontSize: '1.5rem', backgroundColor: 'green', padding: '10px' }} data-bs-toggle="modal" data-bs-target="#forgotpassword"><i class="fas fa-edit"></i></Link> <Link className="ml-5" style={{ margin: '5px 0 5px 20px', color: 'white', borderRadius: '10px', fontSize: '1.5rem', backgroundColor: 'red', padding: '10px' }} data-bs-toggle="modal" data-bs-target="#deletefaq"
                  ><i class="fas fa-trash-alt"></i></Link>  </td>
                </tr>

              </tbody>

            </Table>
          </Col>
        </Row>
      </Container>
    </>

  )
}

export default Faqs
