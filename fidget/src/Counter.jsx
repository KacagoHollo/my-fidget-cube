import React, {useState} from 'react'

function Counter() {
    const [counter, setCounter] = useState(0);

    const counterMinus = () => {
        setCounter(counter - 1)
    }
    const counterPlus = () => {
        setCounter(counter + 1)
    }
    return (
        <div className="counter">
            <button onClick={counterMinus}>-</button>
            <h1 id='count'>{counter}</h1>
            <button onClick={counterPlus}>+</button>
        </div>
    )
}

export default Counter
