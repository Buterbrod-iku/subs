import React, {useState} from 'react';
import style from './styles/footer.module.css';
import {Routes, Route, Link} from "react-router-dom";
import Confirm from "./confirm";

const Footer = () => {
    const [inputList, setInputList] = useState([]);
    const [copyCheck, setCopy] = useState([]);
    const onAddBtnClick = event => {
        setInputList(inputList.concat(<Confirm />));
    };
    const Back = () => {
        let tel = document.getElementById("tel");
        tel.style.color = "rgba(55, 174, 226, 0.98)";
    }
    const CloseCopy = () => {
        let tel = document.getElementById("tel");
        tel.style.color = "rgba(0, 225, 0, 1)";
        setTimeout(Back, 1000);
    }
    const Copy = () => {
        navigator.clipboard.writeText("opensubs@mail.ru");
        setInterval(CloseCopy, 10);
    }
    return(
        <footer className={style.footer} id="contacts">
            <div className={style.info_ip}>
                <p className={style.p_ip}>© 2022 Сервис OpenSubs - оплата зарубежных сервисов в России <br/><br/>ИП Владислав Якобсон<br/>ИНН: 123123123123123123<br/>ОГРН: 1434534345345345345234 <br/> <br/> Все материалы и цены, размещенные на сайте, носят справочный характер и не являются публичной офертой, определяемой положениями статьи 437 (2) Гражданского кодекса Российской Федерации.<br/><br/></p>
                <Link to="/privacy" className={style.polit}><p className={style.polit_bor}>Политика коонфиненциальности</p></Link>
                <Link to="/ofer" className={style.polit}><p className={style.polit_bor}>Договор оферты</p></Link>
            </div>
            <div className={style.contact}>
                <p className={style.p_size}>Поддержка: <a href="tel:+79952450848" className={style.tel}>+7(995)245-08-48</a></p>
                <div style={{display:'flex',position: 'relative'}}><p>Email: <a onClick={Copy} className={style.tel} id="tel">opensubs@mail.ru</a></p>{copyCheck}</div>
                <button className={style.button} onClick={onAddBtnClick}>Подробнее</button>
            </div>
            {inputList}
        </footer>
    )
}

export default Footer;