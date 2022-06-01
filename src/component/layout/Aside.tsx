import router from "../../router";
import {Link} from "react-router-dom";

function Aside() {
    return (
        <>
            {router.filter(i => !!i?.meta?.name).map(i =>
                <Link key={i.path} to={i.path as string}>
                    <div className='aside-item'>{i.meta?.name}</div>
                </Link>
            )}
        </>
    )
}

export default Aside;