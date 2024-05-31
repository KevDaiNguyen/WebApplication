import React, {useState} from "react"

function Counter() {
    
    const [count, setCount] = useState(0);

    // Updater functions = Allows for safe updates based on the previous state.
    //                     Used with multiple state updates nad asynchronus functions.
    //                     Good practice to use them as function calls are BATCHED together for performance.
    //                     Because of that, values are not updated per line.

    const increment = () => {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }

    const decrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    // Without the updater functions, increment and decrement would only go up and down by 1 instead of 2

    const reset = () => {
        setCount(0);
    }

    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    );
}

export default Counter