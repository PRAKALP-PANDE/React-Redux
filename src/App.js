import { useSelector, useDispatch } from "react-redux";
import Home from "./components/Home";
import { actions } from "./store";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  }

  const decrement = () => {
    dispatch(actions.decrement());
  }

  const addby = () => {
    dispatch(actions.addby(10));
  }

  const subby = () => {
    dispatch(actions.subby(10));
  }


  return (
    <div>
      <h1>Counter:</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Dec</button>
      <button onClick={addby}>Add By 10</button>
      <button onClick={subby}>Sub By 10</button>
      <Home />
    </div>
  );
}

export default App;
