interface TimeParamsType {
    time: Date
}
function Test(props: TimeParamsType) {

    return (
        <>
            {props.time.toISOString()}
        </>
    )
}
export default Test;