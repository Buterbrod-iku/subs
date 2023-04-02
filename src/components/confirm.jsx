import React, {useState} from 'react';
import style from './styles/confirm.module.css';

const Confirm = () => {
    const [isActive, setIsActive] = useState(false);
    const [checked, setChecked] = useState(false);
    const onClick = () => {
        setIsActive(current => !current);
    }
    const chengeCheckbox = () => {
        setChecked(!checked);
    }
    return(
        <div className={style.push} style={{display: isActive ? 'none' : ''}}>
            <div className={style.main}>
                <div className={style.position1}>
                    <h2 className={style.heading}>Подтверждение договора</h2>
                    <p className={style.text_close} onClick={onClick}>&#9587;</p>
                </div>
                <div className={style.textarea}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aliquid aspernatur aut blanditiis consequatur, eligendi eum expedita facere facilis fugiat illum in ipsum iusto labore maxime mollitia nam nesciunt nulla quo sed tempore velit veniam. Accusantium ad amet aspernatur assumenda debitis doloribus ex explicabo illum ipsam labore laudantium libero minus nam natus necessitatibus obcaecati odit officiis optio perferendis quas qui quibusdam ratione repellat repellendus, repudiandae similique voluptates voluptatum. Adipisci delectus eaque explicabo facere ipsa quo suscipit veritatis. Facere nesciunt temporibus totam. Ab assumenda excepturi facilis incidunt ipsa labore, necessitatibus nostrum pariatur perspiciatis rerum sequi veritatis vitae voluptatem. Accusantium asperiores incidunt itaque minima molestiae neque odit quidem quisquam sit veniam. Accusantium cum distinctio, exercitationem facere fugit hic impedit incidunt iure, iusto magnam minus modi molestias, nemo nobis odit quae quo repellat rerum similique unde! At cupiditate deserunt dicta dolore ipsam omnis repellat voluptatum! Aut cum doloribus eaque, earum iusto maiores maxime minus nemo porro totam! A aliquid aperiam, aut blanditiis consectetur esse est eum nam, provident ratione saepe sed, voluptates? Ab aliquam aspernatur culpa debitis, dicta earum est itaque, libero magnam magni, minima nisi nobis porro repellat sequi suscipit tempora velit! Accusantium adipisci, commodi dolore dolorem eius enim error esse fugit illo inventore minus mollitia officia reprehenderit sit sunt unde voluptates. Aliquid cum dolores doloribus enim ex facilis fugit itaque laboriosam modi mollitia nemo nobis numquam provident quaerat quod quos repellendus reprehenderit sunt suscipit, temporibus. A aperiam blanditiis consequuntur deserunt ea eius eligendi expedita illum in ipsa modi natus, nesciunt repellendus tempore totam veritatis voluptas! Accusantium at debitis dolor dolorem earum nesciunt odit, quam quas. Accusamus architecto dolorem facere fuga harum impedit iste magnam, maxime molestiae nihil nulla, numquam officia perferendis provident quidem ut, vel veniam? Alias aperiam asperiores blanditiis distinctio dolorem dolores incidunt ipsa iusto maiores maxime, minima neque nulla obcaecati quaerat qui quidem sed temporibus tenetur voluptas, voluptates. Architecto assumenda commodi consectetur distinctio eos laboriosam pariatur placeat tempore, voluptatem! Aliquam autem dolores, esse exercitationem labore nihil placeat quidem sit. Architecto atque corporis debitis dicta dolores facere itaque magnam minus nihil nulla qui quibusdam quos vel, veritatis voluptatem! Aliquid assumenda autem consequuntur dolorem, earum excepturi maxime molestiae nam nihil nobis obcaecati, quasi quia quidem rerum sed sint, suscipit tenetur ullam. Accusantium aperiam commodi consectetur consequuntur cumque dolorem eius enim eos est expedita impedit, ipsam ipsum minima odit porro quibusdam rem sapiente similique totam velit? Ab doloremque eum, hic magni molestiae optio quam, quisquam reiciendis repudiandae similique sint voluptate. Atque beatae consequatur consequuntur culpa debitis dolorem, dolorum, eligendi enim impedit ipsa ipsam neque, officiis possimus praesentium quae reprehenderit repudiandae! At beatae ducimus eum explicabo quia quibusdam reprehenderit. A aliquam assumenda at autem consequuntur dolorem doloremque dolores dolorum, eaque et ex exercitationem, id nulla, perspiciatis porro possimus qui quibusdam rem reprehenderit tempora vel vitae voluptas voluptate. Aut doloremque fugiat perferendis! A aliquam amet architecto cum deserunt dicta dignissimos et eveniet, minima mollitia necessitatibus nihil numquam pariatur quam, qui quisquam suscipit veniam, voluptatem. Accusamus animi, asperiores assumenda dolores eius eos excepturi, illum maxime, non omnis quisquam ratione sit sunt. Aperiam necessitatibus quam quo sequi voluptas? Dolores ipsa possimus quia ratione! Accusantium autem beatae, commodi deleniti ducimus eaque eius eligendi ex facere fuga fugiat fugit hic itaque libero, mollitia odit officia quaerat quasi reprehenderit rerum sapiente temporibus ut? Accusantium asperiores at atque debitis dolore doloremque ducimus eos, facilis illum ipsa nam nemo nesciunt nihil numquam placeat porro, quos vel velit voluptate voluptates? Accusamus, adipisci alias aliquid amet animi assumenda aut dolore et explicabo harum illum in ipsam ipsum mollitia necessitatibus nemo nisi non nulla numquam odit officiis perspiciatis placeat quasi, quod, quos similique sint ut veniam voluptates voluptatibus. Delectus dolorum eaque ex ipsum nihil officiis optio saepe tempore voluptatem! Aperiam corporis culpa cum debitis ducimus earum enim illo illum impedit natus necessitatibus nesciunt, non nulla perferendis porro reiciendis sequi totam? Cupiditate facilis iure omnis quibusdam quisquam. Accusamus ad adipisci, at debitis dolor eaque facere hic magni mollitia nam nobis repellendus voluptates? Ab accusamus aperiam architecto atque blanditiis consectetur cumque debitis dolorem doloribus dolorum ducimus enim est eum, ex exercitationem facere, incidunt labore magnam molestias necessitatibus nihil non optio perspiciatis quaerat qui quidem quos ratione repellendus saepe sed sequi similique unde voluptates. Aperiam at aut cumque deserunt impedit ipsa nostrum odio recusandae rem! Aliquid, amet blanditiis cumque deleniti dolore, ea eligendi enim excepturi fuga illo illum ipsum itaque iure nam nobis numquam perferendis quia quidem reprehenderit, similique temporibus ullam unde? Accusantium aliquid, atque blanditiis cupiditate dicta eaque fugiat illum iusto laborum minima molestiae molestias obcaecati porro possimus repellendus? Nemo porro praesentium quaerat quia. Amet asperiores autem excepturi placeat possimus quidem quis, repellat repellendus! Aliquid assumenda cumque, deleniti dolor dolore, exercitationem fuga, impedit libero nemo obcaecati quas quidem repellat? Accusamus adipisci animi autem deserunt dignissimos dolor dolore eveniet facere fugit harum illo iusto laudantium magni maxime minima nemo neque officia optio pariatur perferendis porro possimus, quidem ratione sit sunt temporibus voluptate voluptatem? Consequatur dignissimos nisi, obcaecati perferendis quas rerum soluta tempore. A accusamus autem, cum eius enim error esse, ex explicabo illo impedit magnam minima minus nostrum obcaecati quaerat, quidem quisquam tenetur voluptates. Ab accusamus aliquid animi assumenda aut delectus dicta dignissimos error et eum fugit inventore ipsum labore magnam, minima mollitia nostrum officia perferendis quas quisquam reiciendis repudiandae sed sequi sint, ut voluptas voluptates voluptatibus? Ad aperiam at aut debitis deleniti dolore esse, est inventore laboriosam maxime modi officiis perspiciatis praesentium quidem saepe totam voluptate. Atque consectetur cum cupiditate dicta ducimus eius est fugit, iste, iure maxime numquam omnis, qui recusandae repellat veritatis. Accusantium, aliquam aliquid consequuntur deleniti dicta, doloribus error et facilis fugiat inventore molestias mollitia odio perspiciatis placeat repellat, rerum suscipit vel! A ab ad aliquid architecto at blanditiis consequuntur cupiditate, dolor dolorem et eveniet ex exercitationem harum id, illum laudantium nostrum obcaecati porro quae quasi quod repellat repellendus reprehenderit saepe sapiente sequi similique sunt totam voluptate voluptates! Alias beatae, consequatur corporis culpa dicta doloremque earum fugit officia officiis placeat porro quo, quod sapiente sint ullam voluptatem voluptatibus. Et exercitationem itaque quod sed!</div>
                <div className={style.position2}>
                    <div className={style.pos}>
                        <input type="checkbox" checked={checked} onChange={chengeCheckbox}/>
                        <label>Я подтверждаю</label>
                    </div>
                    <button className={style.button} disabled={checked ? '' : 'disabled'}>Продолжить</button>
                </div>
            </div>
        </div>
    )
}

export default Confirm;