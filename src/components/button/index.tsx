import style from "./styles.module.scss"

export const Button = (props: { children: string,  type?: "submit" | "reset" | "button", onClick?: () => void}) => {
    return(
        <button onClick={props.onClick} type={props.type || "button"} className={style.button} > 
            {props.children}
        </button>
    );
}; 