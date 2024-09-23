import { ActionsProps, TarefaProps } from "@/types";

export default function FormTarefas({tarefa, add, digit}: TarefaProps & ActionsProps){
    return(
        <div className="form-tarefa">
            <form onSubmit={add}>
                <div>
                    <input name="tarefa" placeholder="Tarefa" value={tarefa} onChange={digit} required/>
                </div>
                <button type="submit">Adicionar</button>
            </form>
        </div>
    )
}