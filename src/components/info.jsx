import React from 'react';
import style from './styles/info.module.css';

const BlockInfo = (props) => {
    let lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid autem blanditiis consectetur delectus doloremque dolores enim excepturi exercitationem ipsa iste iure laboriosam necessitatibus numquam odio odit, officia omnis, perferendis praesentium recusandae reiciendis ullam velit. Consectetur dicta dolorem earum, esse fugit harum ipsa magnam neque repellendus tenetur! Ab aliquid amet autem commodi delectus deserunt dolore eaque ex fugiat, hic in minus nemo numquam placeat, possimus praesentium quaerat, quasi quisquam quo reprehenderit sapiente sint sunt tempora tenetur velit voluptatem voluptates? Alias, aut, dolor, ex illo incidunt laudantium magnam necessitatibus omnis quidem rem repellat rerum sequi sit! Assumenda ex omnis quis vel."
    return(
        <div className={style.block_info}>
            <h3 className={style.number}>{props.numb}</h3>
            <p className={style.text}>{lorem}</p>
            {props.cl}
        </div>
    )
}


const Info = () => {
    const Button = <button className={style.button}>Написать менеджеру</button>
    return(
        <aside className={style.aside}>
            <div className={style.bg}></div>
            <h2 className={style.heading}>Как проходит оплата</h2>
            <div className={style.position}>
                <BlockInfo numb="Оформление" cl={Button}/>
            </div>
        </aside>
    )
}

export default Info;