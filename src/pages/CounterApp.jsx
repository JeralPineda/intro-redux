import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementBy } from '../store/slices/counter';
import reactLogo from '../assets/react.svg';
import '../App.css';

export const CounterApp = () => {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <p>Count is {counter}</p>

      <p>
        <button onClick={() => dispatch(increment())}>Increment</button>

        <button onClick={() => dispatch(decrement())}>Decrement</button>

        <button onClick={() => dispatch(incrementBy(2))}>Increment by 2</button>
      </p>
    </div>
  );
};
