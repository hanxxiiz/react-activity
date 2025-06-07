import React, { useState } from "react";
import Counter from "../Counter/Counter";
import './WelcomeCard.css'

function WelcomeCard({name, position}){
    return(
        <div className="welcome-card">
            <div className="card-content">
                <div className="card-container">
                    <h2 className="welcome-heading">Welcome to the {position} Club, {name}!</h2>
                    <p className="welcome-message">Excited to have you onboard! Let's make this academic year awesome.</p>
                </div>
                <div className="card-container">
                    <Counter />
                </div>
            </div>
            
        </div>
    )
}

export default WelcomeCard