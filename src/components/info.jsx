import React, {useState} from 'react';
import style from './styles/info.module.css';
import Confirm from "./confirm";

const BlockInfo = (props) => {
    return(
        <div className={style.block_info}>
            <p className={style.number}>{props.numb}</p>
            <p className={style.text}>{props.text}</p>
            {props.cl}
        </div>
    )
}


const Info = () => {
    const [inputList, setInputList] = useState([]);
    const onAddBtnClick = event => {
        setInputList(inputList.concat(<Confirm />));
    };
    const Button = <button className={style.button}>Написать менеджеру</button>
    return(
        <aside className={style.aside} id="how">
            <h2 className={style.heading}>Как проходит оплата</h2>
            <div className={style.position}>
                <BlockInfo numb="1" text="Пишите нам в телеграмме"/>
                <BlockInfo numb="2" text="Оплачиваете подписку нам (Либо работаем через вашего гаранта)"/>
                <BlockInfo numb="3" text="Предоставляете доступ к вашему аккаунту"/>
                <BlockInfo numb="4" text="Производим оплату на ваш аккаунт"/>
            </div>
            <div className={style.position_last}>
                <div className={style.last_block}>
                    <p className={style.text_title}>Итог</p>
                    <p className={style.text}>Готово! <br />Подписка оформлена</p>
                    <button className={style.button} onClick={onAddBtnClick}>Написать менеджеру</button>
                    {inputList}
                </div>
            </div>
        </aside>
    )
}

export default Info;