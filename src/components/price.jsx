import React from 'react';
import style from './styles/price.module.css';
import {useState} from 'react';

const Block = (props) => {

    return(
        <div className={style.block}>
            <div className={style.up}>
                <Active />
                <Active />
                <Active />
            </div>
            <div className={style.down}>
                <Active />
                <Active />
                <Active />
            </div>
            <div className={style.up}>
                <Active />
                <Active />
                <Active />
            </div>
            <div className={style.down}>
                <Active />
                <Active />
                <Active />
            </div>
        </div>
    )
}

const Active = () => {
    const [isActive, setIsActive] = useState(false);
    const [buttonText, setButtonText] = useState('');
    let ggg = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorem voluptate commodi eligendi nesciunt cumque omnis dolorum modi molestiae provident mollitia debitis expedita placeat, magnam corporis adipisci blanditiis optio doloremque et non dicta nostrum. Veritatis esse vero deleniti. Ad, tempora?";
    const handleClick = () => {
        setIsActive(current => !current);
        if(buttonText === ggg){
            setButtonText('');
        } else {
            setButtonText(ggg);
        }
    };

    return(
        <div className={style.div}
             style={{
                 width: isActive ? '16vw' : '',
                 height: isActive ? 'auto' : '',
                 padding: isActive ? '30px' : '',
                 background: isActive ? 'green' : '',
             }}
             onClick={handleClick}
        >{buttonText}</div>
    );
}


const Price = () => {
    let bl = <div className={style.big_block}></div>
    return(
        <article className={style.article}>
            <h2 className={style.heading}>Самые популярные товары</h2>
            <Block />

        </article>
    )
}

export default Price;