import React,{useState,useEffect} from 'react'
import Ticketdetail from './ticketdetail'
import useHospital from './useHospital'

const Payment = (props) => {
    const {} = props;
    let {ticketDetail,skeletonLoading} = useHospital()
    let [process,setProcess] = useState(1);
  

   
    if(ticketDetail["holdAt"] != undefined)
    {
        let myTime = new Date();
        myTime.setHours(ticketDetail.holdAt[0],ticketDetail.holdAt[1])
        setInterval(()=>{
            let diff = parseInt((new Date().getTime() - myTime.getTime()) / (1000*60));
           
            if(diff >= 10)
            {
                sessionStorage.removeItem("ticketKey")
                window.location.href = "/buyticket/"+props.match.params.hospitalId
            }
        },60000)
    }

    const loadContent = ()=>{
        if(process == 1)
        {
            return(
                <Ticketdetail/>
            )
           
        }
    }

    return (
        <React.Fragment>
        
            {
                loadContent()
            }
        </React.Fragment>
    )
}

export default Payment
