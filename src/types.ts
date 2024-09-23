export type TarefaProps = {
    tarefa: string,
    id: Number
}

export type RemoveProps = {
    remove: (tit:Number)=> void,
}

export type ActionsProps = {
    add: (e: React.FormEvent<HTMLFormElement>)=>void,
    digit: (e: React.ChangeEvent<HTMLInputElement>)=> void
}