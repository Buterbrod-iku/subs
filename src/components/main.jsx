import React from 'react';
import style from './styles/main.module.css';

const Main = () => {
    let lorem = "Работаем со всеми ушедшими сервисами, быстро и с гарантией";
    return(
        <main className={style.main}>
            <div className={style.block_text}>
                <h2 className={style.heading}>Оформим любую подписку или покупку</h2>
                <p className={style.description}>{lorem}</p>
                <button className={style.button}>Написать менеджеру</button>
            </div>
        </main>
    )
}

export default Main;