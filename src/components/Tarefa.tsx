import { RemoveProps, TarefaProps } from "@/types";
import { FaTrashAlt as X} from "react-icons/fa";

export default function Tarefa({id, tarefa, remove}: TarefaProps & RemoveProps){

    return(
        <div className="tarefa">
            <h2>{tarefa}</h2>
            <button onClick={()=>remove(id)}><X className="lixo"/></button>
        </div>
    )
}