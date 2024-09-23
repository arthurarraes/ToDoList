"use client"

import { useState } from "react";
import Tarefa from "./Tarefa";
import FormTarefas from "./FormTarefas";
import { TarefaProps } from "@/types";

export default function ListaTarefas(){
    const [id, setId]  = useState(1);


    const [tarefas, setTarefas] = useState<TarefaProps[]>(
        [
            {id: 1, tarefa: 'Ir na academia'},
            {id:2, tarefa: 'Lavar as roupas sujas'}
        ])

    const [tarefa, setTarefa]= useState<TarefaProps>({
        tarefa:'', id: 0

    })

    const addTarefa = (e:React.FormEvent<HTMLFormElement>)=>{
         e.preventDefault()

        setTarefas([...tarefas, tarefa])
        setTarefa({id: id+1,tarefa:''})
        setId(id+1)
    }

    const captura = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target
        setTarefa({...tarefa, [name]: value})
    }

    const removeTarefa = (id: Number)=>{
        setTarefas(tarefas.filter(t=> t.id  !== id))
    }

    return(
        <div className="lista-tarefa">
            <h1 className="titulo">Lista de Tarefas</h1>
            <FormTarefas {...tarefa} add={addTarefa} digit ={captura}/>
            {tarefas.map((t, i)=>(
                <Tarefa key={i} {...t} remove={() => removeTarefa(t.id)}/>
            ))}
        </div>
    )
}