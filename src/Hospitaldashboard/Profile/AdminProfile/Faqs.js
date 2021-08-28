import React,{useState,useEffect} from 'react'
import { Container, Col, Form, Row, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useCommon from '../../../common/useCommon'
import useLoader from '../../../common/useLoader'
import ProgressButton from '../../../common/progressButton'
import axios from 'axios'
import {useToasts} from 'react-toast-notifications'
import ReactPaginate from 'react-paginate'
import FaqModal from './faqModal'


const Faqs = () => {
  const {auth} = useCommon();
  const {loading,loadingHandler} = useLoader();
  const {addToast} = useToasts();
  
  let [faq,setFaq] = useState({
    "question":"",
    "answer":"",
    "errors":{}
  })
  let [questions,setQuestions] = useState([]);
  let [currentPage,setCurrentPage] = useState(0);

  let singlePage = 7;
  let pageVisited = singlePage * currentPage;

  const changeHandler = (e)=>{
    const {name,value} = e.target;
    setFaq({
      ...faq,
      [name]:value
    })
  }

  useEffect(()=>{
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
        setQuestions(
          []
        )
      }
    })
  },[])

  const addFAQ = (e)=>{
    e.preventDefault();
    loadingHandler(true)
    axios.post(process.env.REACT_APP_URL+"addQuestion",faq,auth.config)
    .then((response)=>{
      if(response.data.success == true)
      {
        addToast(response.data.message,{
          "autoDismiss":true,
          "appearance":"success"
        })
        
        window.location.reload()
      }
      else
      {
        setFaq({
          ...faq,
          ['errors']:response.data.error
        })
      }
      loadingHandler(false);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  let totalPages = Math.ceil(questions.length  / singlePage);
  let content = questions.slice(pageVisited,pageVisited + singlePage);

  const changePage = ({selected})=>{
    setCurrentPage(
      selected
    )
  }

  return (
    <>
      <Container>
        <Row>
          <Col sm="12" className="text-center info_edit p-5 mb-3">
            <h2>Frequently Asked Questions</h2>
          </Col>
          {/* <Col sm={3}>
      </Col> */}
          <Col sm={12} className="cng-psw">
            <Form method = "post" onSubmit={addFAQ}>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label style={{ fontWeight: '600' }}>Add Question</Form.Label>
                <Form.Control type="text" name="question" value={faq.question} placeholder="Write question." onChange={(e)=>{changeHandler(e)}}/>
                {faq['errors']['question']&& (<p> <small style={{color:"red"}}> {faq['errors']['question']} </small>   </p>)}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label style={{ fontWeight: '600' }}>Add Answer</Form.Label>
                <Form.Control as='textarea' rows="4" type="text"  name="answer" value={faq.answer} placeholder="Write answer." onChange={(e)=>{changeHandler(e)}} />
                {faq['errors']['answer']&& (<p> <small style={{color:"red"}}> {faq['errors']['answer']} </small>   </p>)}
              </Form.Group>
              {faq['errors']['random']&& (<p className="text-center"> <small style={{color:"red"}}> {faq['errors']['random']} </small>   </p>)}
              <div className="text-center">
                {
                  loading == true?
                  (
                    <ProgressButton/>
                  ):
                  (
                    <Button className="btn-edit justify-content-center w-50" type="submit" name="submitEnquiry">
                    Save</Button>
                  )
                }
               
              </div>

            </Form>
          </Col>
          <Col sm={12} className="my-4">
                {
                  questions.length > 0?
                  (
                    <>
                    <Table bordered hover responsive className="table__items w-100">
              <thead>
                <tr className="text-center">
                  <th> S.N </th>
                  <th>Questions</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {
                  content.map((val)=>{
                    return (
                      <>
                        <tr className="text-center">
                        <td style={{ fontWeight: "bolder" }}> {questions.indexOf(val)+1} </td>
                        <td> {val.question} </td>
                        <td>
                          <Link className="" style={{ margin: '5px 0 5px 20px', color: 'white', borderRadius: '10px', fontSize: '1.5rem', backgroundColor: 'green', padding: '10px' }} data-bs-toggle="modal" data-bs-target={`#edit${val._id}`}><i class="fas fa-edit"></i></Link> 
                          <Link className="ml-5" style={{ margin: '5px 0 5px 20px', color: 'white', borderRadius: '10px', fontSize: '1.5rem', backgroundColor: 'red', padding: '10px' }} data-bs-toggle="modal" data-bs-target={`#delete${val._id}`}><i class="fas fa-trash-alt"></i></Link>  
                        
                        </td>
                      </tr>
                        <FaqModal nomenclature="edit" data={val} key={`edit${val._id}`}/>
                        <FaqModal nomenclature="delete" data={val} key={`delete${val._id}`}/>
                     </>
                    )
                  })
                }
               

              </tbody>

            </Table>
            {
                totalPages > currentPage+1?
                (
                    <p style={{color:'grey',fontWeight:'400'}}> Showing {(currentPage+1)*singlePage} of <strong>{questions.length}</strong> </p>
                ):
                (
                    <p style={{color:'grey',fontWeight:'400'}}> Showing {questions.length} of <strong>{questions.length}</strong> </p>
                )
            }
                                       

                                        <ReactPaginate
                                                pageCount = {totalPages}
                                                previousLabel = "Previous"
                                                nextLabel = "Next"
                                                onPageChange = {changePage}
                                                containerClassName={"main"}
                                                previousLinkClassName={"prevStyle"}
                                                nextLinkClassName={"nextStyle"}
                                                disabledClassName={"disableButtons"}
                                                activeClassName={"pageActive"}
                                        />
            </>
                  ):
                  (
                    <p className="text-center" style={{fontWeight: 'bold',color:"black"}}> 0 FAQs </p>
                  )
                }
     
          </Col>
        </Row>
      </Container>
    </>

  )
}

export default Faqs
