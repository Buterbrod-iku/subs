import React from 'react';
import style from './styles/footer.module.css';

const Footer = () => {
    return(
        <footer className={style.footer}>
            <div className={style.info_ip}>
                <p className={style.p_ip}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum delectus error fugiat iure nulla quidem sapiente, sequi voluptates! Amet aperiam ea eaque earum illo laborum odit veniam. Neque, soluta!</p>
            </div>
            <div className={style.contact}>
                <p className={style.p_ip}>+7(888)888-88-88</p>
                <p>+7(888)888-88-88</p>
            </div>
        </footer>
    )
}

export default Footer;