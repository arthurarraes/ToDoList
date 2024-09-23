export type TarefaProps = {
    tarefa: string,
    id: number
}

export type RemoveProps = {
    remove: (tit:number)=> void,
}

export type ActionsProps = {
    add: (e: React.FormEvent<HTMLFormElement>)=>void,
    digit: (e: React.ChangeEvent<HTMLInputElement>)=> void
}