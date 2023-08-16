import React, { useState } from "react";

function Increment() {
    const [counter, setCounter] = useState(0);

    const handleCounter = () => {
        setCounter(counter + 1);
        console.log(counter);
    };

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="my-2">
                <h1>{counter}</h1>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleCounter}>
                Counter
            </button>
            <br />
        </div>
    );
}

export default Increment;
