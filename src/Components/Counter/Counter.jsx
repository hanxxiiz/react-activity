import React, { useState } from "react";
import ClickSpark from "./ClickSpark";
import "./Counter.css"; 

function Counter() {
    const [count, setCount] = useState(0);

    const handleSpark = () => {
        setCount(prev => prev + 1);
    };

    const handleReset = () => {
        setCount(0);
    };

    return (
      <div className="counter-container">
        <div className="header">
          <div className="header-left">
            <h1 className="magic-text">Click around to see the magic</h1>
            <button
              onClick={handleReset}
              className="reset-button"
            >
              Reset
            </button>
          </div>
          
          <div className="counter-section">
            <span className="sparks-label">Sparks:</span>
            <span className="counter-number">{count}</span>
          </div>
        </div>

        <div className="fireworks-area">
          <ClickSpark
            sparkColor="#FFD700"
            sparkSize={12}
            sparkRadius={25}
            sparkCount={12}
            duration={600}
            easing="ease-out"
            extraScale={1.2}
            onSpark={handleSpark}
          />
        </div>
      </div>
    )
}

export default Counter;
