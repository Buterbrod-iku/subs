import React from 'react';
import style from './styles/header.module.css';
import img from './image/OpenSubs2White.png';

const Header = () => {
    return(
        <header className={style.header}>
            <div className={style.logo}>
                <img src={img} className={style.logo_image}/>
            </div>
            <div className={style.position_menu}>
                <p className={style.element_menu}>Главное</p>
                <p className={style.element_menu}>Популярные сервисы</p>
                <p className={style.element_menu}>Процесс оплаты</p>
                <p className={style.element_menu}>Контакты</p>
            </div>
        </header>
    )
}

export default Header;