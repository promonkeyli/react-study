import {ViewBoxProps} from "../type/component.type";
import style from '../style/component.module.css';

function ViewBox(props: ViewBoxProps) {
    const { value } = props;
    return (
        <div className={style.viewBox}>
            {value}
        </div>
    )
}
export default ViewBox;