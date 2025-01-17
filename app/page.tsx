"use client";

import { User } from "@/types/User";
import { useEffect, useRef, useState } from "react";
import { serialize } from "v8";
import axios from 'axios';

const Page = () => {





  const [legendInput, setLegendInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const HandleFileSend = async () => {
    if (fileInputRef.current?.files && fileInputRef.current.files.length > 0) {
      const fileItem = fileInputRef.current.files[0];
      const allowed = ["image/jpg", "image/jpeg", "image/png"];

      if (allowed.includes(fileItem.type)) {
        const data = new FormData();
        data.append('image', fileItem);
        data.append('legend', legendInput);

        const res = await fetch('https://jsonplaceholder.typicode.com/users',{
          method: 'POST',
          headers: {
            'Content-Type':'multipart/form-data'
          },
          body: data
        });
        const json = await res.json();
        console.log(json);

      } else {
        alert("arquivo incompatible");
      }
    } else {
      alert("selecione um arquivo");
    }
    };

    const handleGetPosts = () => {
      const requestParams = {
        postId: 1,
        sort: 'desc'

      }
      axios.get('https://jsonplaceholder.typicode.com/comments?postId=1', {
        params: requestParams
      })

      .then((response)=> {

        console.log(response.data);
      })
    }

    const handleAddPost = async () => {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        userId: 98,
        title: 'titulo do Post',
        body: 'corpo do Post'
      })

      if(response.data.id){
        console.log('inseriu bonitin')
      } else {
        console.log('não inseriu a peste');
      }
    }
    const handleAddPut = async () => {
      const response = await axios.put('https://jsonplaceholder.typicode.com/posts', {
        userId: 98,
        title: 'titulo do Post',
        body: 'corpo do Post'
      })

      if(response.data.id){
        console.log('inseriu bonitin')
      } else {
        console.log('não inseriu a peste');
      }
    }





  return (
    <div className="container mx-auto ">
      <button onClick={handleAddPost}>Adicionar Post</button>
      <button onClick={handleAddPut}>Adicionar Post</button>




      <button onClick={handleGetPosts}>Pegar posts</button>
      <h1 className="text 3xl mt-4">upload de imagem</h1>
      <div className="flex flex-col gap-3 max-w-md border border-dotted border-white p-3 mt-4">
        <input type="file" ref={fileInputRef} />
        <input
          type="text"
          placeholder="Digite uma legenda"
          className="p-3 bg-white rounded-md text-black"
          value={legendInput}
          onChange={(e) => setLegendInput(e.target.value)}
        />
        <button onClick={HandleFileSend}>Enviar imagem</button>
      </div>
    </div>
  );
};

export default Page;
