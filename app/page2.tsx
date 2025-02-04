"use client";

import { useRef } from "react";
import { api } from "./api";
import axios from "axios";

const Page2 = () => {
    // const fileInput = useRef<HTMLInputElement>(null);

    // const handleSendFile = async () => {
    //     if(fileInput.current?.files && fileInput.current.files.length > 0){
            
    //         const file = fileInput.current.files[0];

    //         const data = new FormData();
    //         data.append('name', 'Rafael');
    //         data.append('file', file);

    //         const response = await api.post('/upload', data);
    //     }
   // }

    const controller = new AbortController();
   
    const handleStartRequest = async () => {
        try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            signal: controller.signal
        });
        } catch (error) {
            console.log('deu probema');
        }
    }


    const handleCancelRequest = () => {
        controller.abort();
    }

    return (
        <div className="container mx-auto">
            <button onClick={handleStartRequest}>fazer req</button>
            <button onClick={handleCancelRequest}>cancelar req</button>
        </div>
    );


}
export default Page2;