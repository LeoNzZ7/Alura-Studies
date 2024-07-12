import { Button } from "../button";
import { Clock } from "./clock";
import style from "./stopwatch.module.scss"
import { timeforseconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";

interface Props { 
    selected: ITask | undefined; 
    finishTask: () => void;
};

export const Stopwatch = ({ selected, finishTask }: Props) => {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(selected) {
            setTime(timeforseconds(selected.time));
        };
    }, [selected, selected?.time]);
    //Hook que observa o objeto selecionado e atualiza o tempo no state

    const countdown = (counter: number = 0) => {
        setTimeout(() => {
            if(counter > 0) {
                setTime(counter - 1);

                return countdown(counter - 1)
            };

            finishTask();
        }, 1000);
    };

    return(
        <div className={style.cronometro} >
            <p className={style.titulo} >Escolha um card e inicie um conômetro</p>
            tempo: {time}
            <div className={style.relogioWrapper} >
                <Clock time={time} />
            </div>
            <Button onClick={() => countdown(time)} >
                Começar
            </Button>
        </div>
    );
};  