import style from "./styles.module.scss"
import { Item } from "./item";
import { ITask } from "../../types/task";

interface Props  {
    taskList: ITask[], 
    selectTask: (selectTask: ITask) => void
}

export const List = (props: Props) => {
    return(
        <aside className={style.taskList} >
            <h2>Estudos do dia</h2>
            <ul>
                {props.taskList.map((item, index) => (
                    <Item key={item.id} 
                    selectTask={props.selectTask}
                    task={item.task} 
                    time={item.time} 
                    selected={item.selected} 
                    completed={item.completed}
                    id={item.id}/>
                ))}
            </ul>
        </aside>    
    );
};