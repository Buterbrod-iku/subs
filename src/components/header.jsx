import React from 'react';
import style from './styles/header.module.css';
import img from './image/OpenSubsMain.png';
import {Link} from 'react-scroll';

const Header = () => {
    return(
        <header className={style.header}>
            <div className={style.logo}>
                <img src={img} className={style.logo_image}/>
            </div>
            <div className={style.position_menu}>
                <p className={style.element_menu}>Главное</p>
                <Link  to="price" spy={true} smooth={true}><p className={style.element_menu}>Популярные сервисы</p></Link>
                <Link  to="how" spy={true} smooth={true}><p className={style.element_menu}>Процесс оплаты</p></Link>
                <Link  to="contacts" spy={true} smooth={true}><p className={style.element_menu}>Контакты</p></Link>
            </div>
        </header>
    )
}

export default Header;