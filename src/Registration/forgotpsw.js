import React,{ useState, useEffect} from 'react'

const Forgotpsw = (props) => {
    let{}=props
    return (
        <React.Fragment>
            <div className="container reset">
            <p style={{color:'black', fontSize:'20px',fontWeight:'bold'}}>Reset Your Password</p>
            <form>
                <div className="form-row">
                    <div className="form-group">
                        <label>New Password</label>
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className='text-center'>
                    <button type="submit" className="btn btn-success mt-2 pt-1 pb-1 pl-3 pr-3">Reset</button>
                </div>
                
            </form>
            </div>
            
        </React.Fragment>
    )
}

export default Forgotpsw
