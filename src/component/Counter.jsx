import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const checkValue = () => {
        return count === 0 ? "Zero" : count;
    }
    const checkCounter = () => {
        return count === 0 ? "badge bg-danger m-3 rounded text-white p-3" : "badge bg-warning m-3 p-3 text-dark rounded";
    }

    // all the function in the react are by default stateless
    const decrement = () => {
        count > 0 ? setCount(count - 1) : "Sorry"
    }
    const increment = () => {
        setCount(count + 1);
    }
    useEffect(() => { console.log(count) }, [count])
    // let count = 0;
    return (
        <div className='container mt-3'>
            <button className='btn btn-primary' onClick={decrement}>Decrement</button>
            <span className={checkCounter()}>{checkValue()}</span>
            <button className='btn btn-primary' onClick={increment} >Increment</button>

        </div>
    )
}

export default Counter;