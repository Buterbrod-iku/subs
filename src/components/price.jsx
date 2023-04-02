import React from 'react';
import style from './styles/price.module.css';
import {useState} from 'react';
import netflix from "./image/netflix-new-logo.png";
import adobe from "./image/Adobe_Creative_Cloud_rainbow_icon.svg.png";
import microsoft from "./image/Microsoft.png";
import one from "./image/Appleone.png";
import spotify from "./image/Logo-Spotify.png";
import ps from "./image/PsPlus.png";
import unnamed from "./image/unnamed.png";
import canva from "./image/Canva.png";
import steam from "./image/Steam.png";
import youtube from "./image/YouTube.png";
import onlyfans from "./image/OnlyFans.png";
import google from "./image/logo_one_icon.0.webp";
import Confirm from "./confirm";

const Block = (props) => {
    return(
        <div className={style.block}>
            <div className={style.up}>
                <Active id="5" color="white" image={spotify} title1="Индивидуальная подписка" title2="Premium для двоих" title3="Premium для семьи" text1="6,25s./399P." text2="8,2s./549P." text3="10s./649P."/>
                <Active id="3" color="white" image={microsoft} title1="Microsoft 365 для семьи на месяц" title2="Microsoft 365 персональный на месяц" text1="669р." text2="499р."/>
                <Active id="1" color="white" image={netflix} title1="Базовый" title2="Стандартный" title3="Премиум" text1="10s./649P." text2="12,5s./799P." text3="15s./975P." />
            </div>
            <div className={style.down}>
                <Active id="10" color="white" image={youtube} title1="Premium" text1="15s./975P"/>
                <Active id="12" color="white" image={google} title1="На месяц Basic" title2="Standard" title3="Premium" text1="175P." text2="275P." text3="875P."/>
                <Active id="2" color="white" image={adobe} title1="На месяц" title2="Годовой (ежемесячный)" title3="годовая (сразу)" text1="105s./6799P." text2="68,75s./4499P." text3="750s./48749P."/>
            </div>
            <div className={style.up}>
                <Active id="9" color="white" image={steam} title1="Стоимость" text1="Зависит от суммы пополнения + 25%"/>
                <Active id="6" color="white" image={ps} title1="Стоимость" text1={'Зависит от покупки + 25%'}/>
                <Active id="8" color="white" image={canva} title1="Обычная на месяц" title2="Премиум на месяц" text1="15s./975p." text2="18,75s./1199p."/>
            </div>
            <div className={style.down}>
                <Active id="4" color="white" image={one} title1="Стоимость" text1="250 рублей в месяц"/>
                <Active id="11" color="white" image={onlyfans} title1="Стоимость" text1="Зависит от подписки + 25%"/>
                <Active id="7" color="white" image={unnamed} title1="Ежемесячный" title2="На 6 месяцев" title3="На год" text1="8,4s./549p." text2="12,5s./799p." text3="16,25s./1049p.."/>
            </div>
        </div>
    )
}

const InBlock = (props) => {
    return(
        <div>
            {props.content}
        </div>
    )
}
const Content = (props) => {
    const [inputList, setInputList] = useState([]);
    const onAddBtnClick = event => {
        setInputList(inputList.concat(<Confirm />));
    };
    return(
        <div className={style.content_position}>
            <div className={style.content_block}>
                <h2 className={style.title_content}>{props.title1}</h2>
                <div className={style.div_price}><p className={style.text_content}>{props.text1}</p></div>
            </div>
            <div className={style.content_block}>
                <h2 className={style.title_content}>{props.title2}</h2>
                <div className={style.div_price}><p className={style.text_content}>{props.text2}</p></div>
            </div>
            <div className={style.content_block}>
                <h2 className={style.title_content}>{props.title3}</h2>
                <div className={style.div_price}><p className={style.text_content}>{props.text3}</p></div>
            </div>
            <button className={style.button} onClick={onAddBtnClick}>Написать</button>
        </div>
    )
}

const Active = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [buttonText, setButtonText] = useState('');
    const handleClick = () => {
        setIsActive(current => !current);

        if(buttonText === ''){
            setButtonText(<InBlock content={<Content
                title1={props.title1}
                title2={props.title2}
                title3={props.title3}
                text1={props.text1}
                text2={props.text2}
                text3={props.text3}
            />}/>);
        } else {
            setButtonText('');
        }
    };

    const LeaveAndClearHover = () => {
        setIsActive(current => !current);
        setButtonText('');
    }

    return(
        <div className={style.div}
             style={{
                 width: isActive ? '12vw' : '',
                 height: isActive ? '12vw' : '',
                 padding: isActive ? '30px' : '',
                 transform: isActive ? 'scale(1.7)' : '',
                 background: isActive ? `${props.color}` : `url(${props.image})`,
                 backgroundSize: isActive ? '' : 'cover',
                 backgroundPosition: isActive ? '' : 'center',
                 backgroundImage: `url(${props.image})`,
                 position: "relative",
                 zIndex: isActive ? '50' : '',
             }}
             onMouseEnter={handleClick}
             onMouseLeave={LeaveAndClearHover}
             id={props.id}
        >{buttonText}</div>
    );
}


const Price = () => {
    return(
        <article className={style.article} id="price">
            <h2 className={style.heading}>Самые популярные товары</h2>
            <Block />
        </article>
    )
}

export default Price;