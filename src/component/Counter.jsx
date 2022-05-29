import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    incrementCounter,
    decrementCounter,
    resetCounter,
} from './../redux/actions/counterAction';

const Counter = () => {
    const count = useSelector((store) => store.count);
    const dispatch = useDispatch();

    const handelIncrement = () => {
        dispatch(incrementCounter());
    };
    const handelDecrement = () => {
        dispatch(decrementCounter());
    };
    const handelReset = () => {
        dispatch(resetCounter());
    };

    return (
        <div>
            <h3>Counter App</h3>
            <h5>Count: {count}</h5>
            <button onClick={handelIncrement}>Increment</button>
            <button onClick={handelDecrement}>Decrement</button>
            <button onClick={handelReset}>Reset</button>
        </div>
    );
};

export default Counter;
