import React,{ useState, useEffect} from 'react'

const Delete = (props) => {
    let{}=props
    return (
        <React.Fragment>
        
            <div class="modal fade" id="deleteModal"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel" style={{color:"red",fontSize:"25px",fontWeight:"bold"}}>Delete Ticket</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Are you sure you want to delete this ticket?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" style={{ boxShadow: '4px 3px 8px #424242',padding: '7px 50px'}} >Delete</button>
                    <button type="button" class="btn btn__Add" style={{ boxShadow: '4px 3px 8px #424242',padding: '7px 50px'}} data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>

            
        </React.Fragment>
    )
}

export default Delete
