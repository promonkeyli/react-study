import useTimer from "../hooks/useTimer";
import Test from "./Test";

function UseTimer(props: any) {
    const [TimerComponent] = useTimer(Test);
    return (
        <>
            <TimerComponent/>
        </>
    )
}

export default UseTimer;