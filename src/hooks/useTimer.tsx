import React, {ComponentType, useEffect, useState} from "react";

function useTimer(WrappedComponent: ComponentType<any>) {
    const [time, setTime] = useState<Date | null>(new Date());

    useEffect(() => {
        const timerId = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timerId);
    },[]);

    const timerWrappedComponent = () => <WrappedComponent time={time} />

    return [timerWrappedComponent]
}
export default useTimer;