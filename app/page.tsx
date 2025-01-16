"use client";

import { User } from "@/types/User";
import { useEffect, useRef, useState } from "react";
import { serialize } from "v8";

const Page = () => {
  const [legendInput, setLegendInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const HandleFileSend = async () => {
    if(fileInputRef.current?.files && fileInputRef.current.files.length > 0){
      const fileItem = fileInputRef.current.files[0];

      console.log(fileItem)


    } else {
      alert("selecione um arquivo")
    }
  }

  return (
    <div className="container mx-auto ">
      <h1 className="text 3xl mt-4">upload de imagem</h1>
      <div className="flex flex-col gap-3 max-w-md border border-dotted border-white p-3 mt-4">
        <input 
          type="file" 
          ref={fileInputRef} 
        />
        <input
          type="text"
          placeholder="Digite uma legenda"
          className="p-3 bg-white rounded-md text-black"
          value={legendInput}
          onChange={e => setLegendInput(e.target.value)}
        />
        <button onClick={HandleFileSend}>Enviar imagem</button>
      </div>
    </div>
  );
};

export default Page;
