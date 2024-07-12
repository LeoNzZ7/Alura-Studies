import style from "./clock.module.scss"

interface Props {
    time: number | undefined
}

export const Clock = ({ time = 0 }: Props ) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [tenMinutes, unitMinutes] = String(minutes).padStart(2, '0')
    const [tenSeconds, unitSeconds] = String(seconds).padStart(2, '0')
    return (
        <>  
            <span className={style.relogioNumero}>{tenMinutes}</span>
            <span className={style.relogioNumero}>{unitMinutes}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{tenSeconds}</span>
            <span className={style.relogioNumero}>{unitSeconds}</span>
        </>
    );
};