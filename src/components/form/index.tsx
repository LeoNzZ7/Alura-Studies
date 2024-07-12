import { FormEvent, useState } from "react";
import { v4 as uuidv4} from "uuid";
import { Button } from "../button";
import style from "./styles.module.scss"
import { ITask } from "../../types/task";

export const Form = ( props: {taskList: ITask[] ,setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>}) => {
    const [task, setTask] = useState<string>("")
    const [time, setTime] = useState<string>("00:00:00")

    const addTask = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        props.setTaskList(oldTaskList => 
            [
            ...oldTaskList, 
            { task, time, selected: false, completed: false, id: uuidv4() }
        ])
        setTask("");
        setTime("");
    };

    return(
        <form className={style.newTask} onSubmit={addTask} > 
            <div className={style.inputContainer} >
                <label htmlFor="tarefa">Adicione um novo estudo!</label>
                <input 
                type="text"
                id="task" 
                onChange={e => setTask(e.target.value)}
                value={task}
                name="task"
                placeholder="o que você quer estudar?"
                required
                />    
            </div>
            <div className={style.inputContainer} >
                <label htmlFor="">Tempo</label>
                <input 
                type="time"
                step={1}
                name="time"
                onChange={e => setTime(e.target.value)}
                id="time"
                value={time}
                min="00:00:00"
                max="01:30:00"
                required
                />
            </div>
            <Button type="submit">Adicionar</Button>
        </form>
    );
};