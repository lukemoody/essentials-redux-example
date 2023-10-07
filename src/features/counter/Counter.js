import { useState } from "react";
import {
  increment,
  decrement,
  selectCount,
  incrementByAmount,
  incrementAsync,
  selectFetchStatus,
} from "./CounterSlice";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  // Centralised Store State
  const count = useSelector(selectCount); // useSelector is what will display your data to the user
  const status = useSelector(selectFetchStatus); // REMEMBER to see the data from state on FE you need to use useSelector
  const dispatch = useDispatch(); // useDispatch is what sends data the user has interacted with back to state

  // Localised State
  const [incrementAmount, setIncrementAmount] = useState("");
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div data-testid="counter">
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      <input
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(incrementValue))}>
        Add Amount
      </button>
      <button onClick={() => dispatch(incrementAsync(incrementValue))}>
        {status === "loading" ? "Loading" : "Add Async "}
      </button>
    </div>
  );
};

export default Counter;
