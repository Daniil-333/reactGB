import style from './Form.module.scss'

export const Message = ({message}) => {


    return <div className={style.message} id={message.id}>
                <p className={style.heading}>{message.author}</p>
                <p className={style.messageTxt}>{message.text}</p>
            </div>
}