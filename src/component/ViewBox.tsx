import {ViewBoxProps} from "../type/component.type";
import style from '../style/component.module.css';

function ViewBox(props: ViewBoxProps) {
    const { value, children } = props;
    return (
        <div className={style.viewBox}>
            {value || children }
        </div>
    )
}
export default ViewBox;
