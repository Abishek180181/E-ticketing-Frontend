import React,{useState,useEffect} from 'react'
import Ticketdetail from './ticketdetail'
import useHospital from './useHospital'

const PaymentHolder = (props) => {
    const {} = props;
    let {ticketDetail} = useHospital()
      
    if(ticketDetail["holdAt"] != undefined)
    {
        let myTime = new Date();
        myTime.setHours(ticketDetail.holdAt[0],ticketDetail.holdAt[1])
        setInterval(()=>{
            let diff = parseInt((new Date().getTime() - myTime.getTime()) / (1000*60));
          
            if(diff >= 10)
            {
                sessionStorage.removeItem("ticketKey")
                sessionStorage.removeItem("bankKey")
                window.location.href = "/buyticket/"+props.match.params.hospitalId
            }
        },20000) //check time in every 20 seconds
    }

    return (
        <React.Fragment>
            <Ticketdetail/>
        </React.Fragment>
    )
}

export default PaymentHolder
