import React, {useState} from 'react';
import style from './styles/main.module.css';
import Confirm from "./confirm";

const Main = () => {
    const [inputList, setInputList] = useState([]);
    let lorem = "Работаем со всеми ушедшими сервисами, быстро и с гарантией";

    const onAddBtnClick = event => {
        setInputList(inputList.concat(<Confirm />));
    };
    return(
        <main className={style.main} id="main">
            <div className={style.block_text}>
                <h2 className={style.heading}>Оформим любую подписку</h2>
                <p className={style.description}>{lorem}</p>
                <button className={style.button} onClick={onAddBtnClick}>Написать</button>
                {inputList}
            </div>
        </main>
    )
}

export default Main;