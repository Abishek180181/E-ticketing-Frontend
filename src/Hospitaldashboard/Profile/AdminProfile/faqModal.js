import React,{useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import useCommon from '../../../common/useCommon'
import useLoader from '../../../common/useLoader'
import ProgressButton from '../../../common/progressButton';
import {toast} from 'react-toastify'

const FaqModal = (props) => {
    const {nomenclature,data} = props;
    const {auth} = useCommon();
    const {loading,loadingHandler} = useLoader();

    //state goes here
    let [questionDetail,setQuestion] = useState({
        "question":data.question,
        "answer":data.answer,
        "faqId":data._id,
        "errors":{}
    })

    //making a header
    if(nomenclature == "edit")
    {
        var header = (
            <>Change Questions!</>
        )
        
    }
    else if(nomenclature == "delete")
    {
        var header  = (
            <> Are you sure you want to delete this question? </>
        )
    }

    //handler
    const changeHandler = (e)=>{
        let {name,value} = e.target;
        setQuestion({
            ...questionDetail,
            [name]:value
        })
    }

    const updateQuestion = (e)=>{
        e.preventDefault()
        loadingHandler(true);
        axios.put(process.env.REACT_APP_URL+"updateQuestion",questionDetail,auth.config)
        .then((response)=>{
            if(response.data.success == true)
            {
                toast.success(response.data.message);
                window.location.reload();
            }
            else
            {
                setQuestion({
                    ...questionDetail,
                    ['errors']:response.data.error
                })
            }
            loadingHandler(false);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const deleteFAQ = (e)=>{
        loadingHandler(true);
        axios.delete(process.env.REACT_APP_URL+"deleteFAQ/"+questionDetail.faqId,auth.config)
        .then((response)=>{
            if(response.data.success == true)
            {
                toast.success(response.data.message);
                window.location.reload();
            }
            else
            {
                toast.error(response.data.message);
            }
            loadingHandler(false);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    
    return (
        <React.Fragment>
        <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id={`${nomenclature}${data._id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header" style={{ backgroundColor: 'white', color: nomenclature == 'edit'? 'green':"red" }}>
              <h5 style={{fontWeight: "bold"}} class="modal-title" id="exampleModalLabel">{header}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" style={{ backgroundColor: '#f0f0f0' }}>
                {
                    nomenclature == "edit"?
                    (
                        <form method="post" onSubmit={updateQuestion}>
                            <div className="form-row">
                            <div className="form-group">
                                <label style={{ color: 'black', fontWeight: "bold", fontSize: "15px" }}>Question</label>
                                <input type="text" className="form-control m-1" name="question" value={questionDetail.question} placeholder="Write question" onChange={(e)=>{changeHandler(e)}}/>
                                {questionDetail['errors']['question']&& (<p> <small style={{color:"red"}}> *{questionDetail['errors']['question']} </small> </p>)}
                            </div>
                            <div className="form-group">
                                <label style={{ color: 'black', fontWeight: "bold", fontSize: "15px" }}>Answer</label>
                                <textarea className="form-control m-1" name="answer" value={questionDetail.answer} placeholder="Write answer" onChange={(e)=>{changeHandler(e)}} />
                                {questionDetail['errors']['answer']&& (<p> <small style={{color:"red"}}> *{questionDetail['errors']['answer']} </small> </p>)}
                            </div>
                            </div>
                            {questionDetail['errors']['random']&& (<p className="text-center"> <small style={{color:"red"}}> *{questionDetail['errors']['random']} </small> </p>)}
                            <div className="col-12 mt-3 mx-auto">
                            <div className="text-left pl-5" style={{ float: 'right' }}>
                                {
                                    loading == true?
                                    (
                                        <ProgressButton/>
                                    ):
                                    (
                                        <>
                                            <Link type="button" className="btn btn-danger btn-lg mr-3" id="cancel" name="cancel" style={{ boxShadow: "2px 2px 6px rgba(0,0,0,0.6)" }} data-bs-dismiss="modal">Close</Link>
                                            <button type="submit" className="btn btn-success btn-lg" name="proceed" style={{ boxShadow: "2px 2px 6px rgba(0,0,0,0.6)", marginLeft: "2rem" }}>Change</button>
                                        </>
                                    )
                                }
                               
                            </div>
                            </div>
                        </form>
                    ):
                    nomenclature == "delete"?
                    (
                      
                            <div className="col-12 mt-3 mx-auto">
                            <div className="text-left pl-5" style={{ float: 'right' }}>
                                {
                                    loading == true?
                                    (
                                        <ProgressButton/>
                                    ):
                                    (
                                        <>
                                            <button type="button" className="btn btn-success btn-lg mr-3" id="cancel" onClick={(e)=>{deleteFAQ(e)}} name="cancel" style={{ boxShadow: "2px 2px 6px rgba(0,0,0,0.6)" }}>Delete</button>
                                            <button type="button" className="btn btn-danger btn-lg"  name="proceed" style={{ boxShadow: "2px 2px 6px rgba(0,0,0,0.6)", marginLeft: "2rem" }} data-bs-dismiss="modal">Close</button>
                                        </>
                                    )
                                }
                                
                            </div>
                            </div>
                            
                    ):
                    (
                        <></>
                    )
                }
              


            </div>

          </div>
        </div>
      </div>
        </React.Fragment>
    )
}

export default FaqModal
