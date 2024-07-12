import { useState } from "react";
import { Form } from "../components/form";
import { List } from "../components/list/index";
import { Stopwatch } from "../components/stopwatch";
import style from "./styles.module.scss"
import { ITask } from "../types/task";

const App = () => { 
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();
  //Tarefa selecionada

  const selectTask = (selectedTask: ITask) => {
    setSelected(selectedTask);
    setTaskList(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })))
  };
  //Função que seleciona a tarefa 

  const finishTask = () => {
    if(selected) {
      setTaskList(oldTasks => oldTasks.map(task => {
        if(task.id === selected.id) {
          return {
            ...task, 
            selected: false,
            completed: true
          };
        };
        
        return task;  
      }))
    };
  };
  //Função que completa a tarefa

  return(
    <div  className={style.AppStyle}>
      <Form taskList={taskList} setTaskList={setTaskList} />
      <List 
      taskList={taskList} 
      selectTask={selectTask}
      />
      <Stopwatch 
      selected={selected} 
      finishTask={finishTask}
      />
    </div>
  );
};

export default App;
