import React,{useState,useEffect} from 'react'


const useLoader = () => {
    let [loading,setLoading] = useState(false);
    let [skeletonLoading,setSkeleton] = useState(false);

    const loadingHandler = (data)=>{
        setLoading(data);
    }

    const skeletonHandler = (data)=>{
        setSkeleton(data);
    }

    return {loading,loadingHandler,skeletonLoading,skeletonHandler};
}

export default useLoader
