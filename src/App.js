import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT, RESET,LOGIN,NOT_LOGIN } from './type/type';
import { inc, dec, reset,LOG,Not_log } from './actions/action';
function App() {
    //4-access data from store reducer with useSelector
  // const count = useSelector((state) => state.counter) // 1-get state from redux and set it in counter
  const count = useSelector((state) => state.RedCounter.counter);
  const isLog = useSelector(state => state.Auth.isLog);
  //5-change data in reducer with dispatch
  const dispatch = useDispatch(); // 2- get dispatch from redux

  // const handleIncrement = () => {
  //   dispatch({ type: 'INCREMENT' });
  // }
  // const handleDecrement = () => {
  //   dispatch({ type: 'DECREMENT' });
  // }
  // const handleReset = () => {
  //   dispatch({ type: 'RESET' });
  // }

  // const handleIncrement = () => {
  //   dispatch({ type: INCREMENT});
  // }
  // const handleDecrement = () => {
  //   dispatch({ type: DECREMENT });
  // }
  // const handleReset = () => {
  //   dispatch({ type: RESET });
  // }
    // const handleMakeUser = () => {
  //   dispatch({ type: 'MAKE_USER' });
  // }

  // const handleNotUser = () => {
  //   dispatch({ type: 'NOT_USER' });
  // } 

  const handleIncrement = () => {
    dispatch(inc());
  }
  const handleDecrement = () => {
    dispatch(dec());
  }
  const handleReset = () => {
    dispatch(reset());
  }

  const handleLOG = () => {
    dispatch(LOG());
  }
  const handleNotLOG = () => {
    dispatch(Not_log());
  }
 

  return (
    <div className="App">
      <h3>Counter:{count}</h3>
      {/* <button onClick={() => dispatch({ type: 'INCREMENT' })}  >Increace</button> */}
      <button onClick={handleIncrement} >Increace</button>
      <button onClick={handleDecrement} >Decreace</button>
      <button onClick={handleReset} >Reset</button>
      {isLog === true ? <h3>you user</h3> : <h3>you not user please register</h3>}
      <button onClick={handleLOG} >Make User</button>
      <button onClick={handleNotLOG} >Not User</button>

    </div>
  );
}

export default App;
