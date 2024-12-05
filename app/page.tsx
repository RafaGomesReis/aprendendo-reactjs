"use client"

import { listReducer } from "@/reducers/listTeducers";
import { Item } from "@/types/Item";
import { useReducer, useState } from "react";

const Page = () =>{

  const [list, dispatch] = useReducer(listReducer, [])

  const [addField, setAddField] = useState('');

  const handleAddButton = () => {
    if (addField.trim() ==='' ) return false;
    
    dispatch({
      type: 'add',
      payload:{
        text: addField.trim()
      }
    });
    setAddField('');
  };

  const handleDoneCheckbox = (id: number) => {
    dispatch({
      type:'toggleDone',
      payload: {id}
    })
  }

  const handleEdit = (id: number) => {

    const item = list.find(it => it.id === id);
    if (!item) return false;
    
    const newText = window.prompt('Editar item', item.text);
    if (!newText || newText.trim() === '') return false;
    dispatch({
      type: 'editText',
      payload: {id, newText}
    })
  }
  
  const handleRemove = (id: number) => {
    if(window.confirm('Are you sure you want to remove?')) return false; 

    dispatch({
      type: 'remove',
      payload:{id}
    })
  }


  return(
    <div className="container mx-auto">
      
      <h1 className="text-center text-4xl my-4">lista de tarefas</h1>
      
      <div className="flex border rounded-md border-red-500 p-4 my-4">        
        <input 
          type="text"
          className="flex-1 border rounded-md border-red-800 bg-transparent p-3 text-white"
          placeholder="apenas itens"
          value={addField}
          onChange={e => setAddField(e.target.value)}
        />

        <button
          className="ml-2"
          onClick={handleAddButton}
        >Adicionar</button>      
      </div> 
      
      <ul className="">
        {list.map(item => (
          <li
            key={item.id}
            className="flex items-center p-3 my-3 border-b border-red-950"
          >
            <input
              type="checkbox"
              className="w-7 h-7 mr-4"
              defaultChecked={item.done}
              onClick={() => handleDoneCheckbox(item.id)}
              />
            <p className="flex-1 text-lg">{item.text}</p>
            <button onClick={() => handleEdit(item.id)} className="mx-4">Editar</button>
            <button onClick={() => handleRemove(item.id)} className="mx-4">Excluir</button>
          </li>
        ))}
      </ul>
    
    </div>
  );
};

export default Page;