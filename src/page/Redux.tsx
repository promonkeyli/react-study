import ViewBox from "../component/ViewBox";

function Redux() {
    const handleIncrement = () => {
        console.log('+');
    }
    const handleDecrement = () => {
        console.log('-');
    }
    return (
        <>
          <ViewBox>
              <ReduxView handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
          </ViewBox>
        </>
    )
}
function ReduxView(props: any) {
    const {handleIncrement, handleDecrement} = props;
    return (
        <>
            <div style={{textAlign: 'center'}}>redux counter</div>
            <div style={{marginTop: '20px'}}>
                <button onClick={handleIncrement} style={{width: '50px'}}>+</button>
                <span style={{display: 'inline-block', width: '50px', textAlign: 'center'}}>{0}</span>
                <button onClick={handleDecrement} style={{width: '50px'}}>-</button>
            </div>
        </>
    )
}
export default Redux;
