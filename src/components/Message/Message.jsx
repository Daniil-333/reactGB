import style from './Message.module.scss'

export const Message = ({text}) => {

    return <div className={style.message}>
                <p className={style.heading}></p>
               <p className={style.messageTxt}>{text}</p>
            </div>
}