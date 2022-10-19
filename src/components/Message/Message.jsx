import style from './Form.module.scss'

export const Message = ({message}) => {

    return <>
        <p className={style.message}>{message.text}</p>
    </>
}