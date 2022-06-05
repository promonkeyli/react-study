import ViewBox from "../component/ViewBox";
import { useState } from "react";

function UseEffect() {
    const [count, setCount] = useState<number>(0);

    return (
        <>
            <ViewBox value={count}/>
            <hr/>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <hr/>
            <button onClick={() => setCount(count - 1)}>Sub</button>
        </>
    )
}

export default UseEffect;