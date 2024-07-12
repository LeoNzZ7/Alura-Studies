import { ITask } from "../../../types/task";
import style from "./item.module.scss"

interface Props extends ITask {
    selectTask: (selectedTask: ITask) => void;
};
//função que seleciona a tarefa 

export const Item = ({task, time, selected, completed, id, selectTask}: Props) => {
    return(
        <li 
            className={`${style.item} & ${selected ? style.itemSelecionado : style.item} ${completed ? style.itemCompletado : style.item}`}  
            onClick={() => !completed && selectTask({
            task,
            time,
            selected,
            completed,
            id
                }
            )}
        >
            <h3>{task}</h3>
            <span>{time}</span>
            {completed && 
                <span className={style.concluido} aria-label="Tarefa completada"></span>
            }
        </li>
    );
};