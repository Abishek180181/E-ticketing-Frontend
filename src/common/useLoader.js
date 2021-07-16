import React,{useState,useEffect} from 'react'


const useLoader = () => {
    let [loading,setLoading] = useState(false);

    const loadingHandler = (data)=>{
        setLoading(data);
    }

    return {loading,loadingHandler};
}

export default useLoader
