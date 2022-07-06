import React, {useEffect} from "react";
import toast, { Toaster } from 'react-hot-toast';

export function Toast(props) {
    useEffect(()=>{
        if(props.status === 'success'){
            toast.success(props.message, {
                style:{
                    borderRadius:'10px',
                    background: '#00c132',
                    color: '#fff',
                }
            })
        }else if(props.status === 'error'){
            toast.error(props.message,{
                style: {
                    borderRadius: '10px',
                    background: '#E61F1F',
                    color: '#fff',
                  },
            })
        }else return;
    },[props.status, props.message]);

    return(
        <div>
            <Toaster position="top-center"
            reverseOrder={false}/>
        </div>
    )
}