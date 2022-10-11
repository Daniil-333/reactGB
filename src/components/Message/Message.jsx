import style from './Form.module.scss'

export const Message = ({message}) => {

    return <>
        <h1 className={style.heading}>My first component Message</h1>
        <p className={style.message}>{message}</p>
    </>
}