import React,{useState,useEffect} from 'react'


const useLoader = () => {
    let [loading,setLoading] = useState(false);
    let [loading2,setLoading2] = useState(false);
    let [skeletonLoading,setSkeleton] = useState(false);
    let [payLoading,setPayLoading] = useState(false);

    const loadingHandler = (data)=>{
        setLoading(data);
    }

    const loadingHandler2 = (data)=>{
        setLoading2(data);
    }

    const skeletonHandler = (data)=>{
        setSkeleton(data);
    }

    const paymentHandler = (data)=>{
        setPayLoading(data);
    }

    return {loading,loadingHandler,skeletonLoading,skeletonHandler,payLoading,paymentHandler,loadingHandler2,loading2};
}

export default useLoader
