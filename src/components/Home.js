import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch();
    const increment = () => {
        dispatch({ type: "INC" })
    }

    const decrement = () => {
        dispatch({ type: "DEC" });
    }

    return (
        <div>
            <h1>Counter state:</h1>
            <h2>{counter}</h2>
            <button onClick={increment}>Inc</button>
            <button onClick={decrement}>Dec</button>
        </div>
    )
}

export default Home