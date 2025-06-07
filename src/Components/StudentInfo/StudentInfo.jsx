import React, { useState } from "react";
import './StudentInfo.css'
import picturesample from '../Assets/picturesample.png'
import WelcomeCard from "../WelcomeCard/WelcomeCard";

function StudentInfo (){
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        course: '',
        year: '',
        position: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleInputChange(event){
        const {name, value} = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    function handleSubmit(event){
        event.preventDefault();
        setIsSubmitted(true);
    }

    if (isSubmitted){
        return(
            <WelcomeCard 
                name={formData.firstname}
                position={formData.position}
            />
        )
    }

    return (
        <div className="student-info">
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-content">
                    <div className="image-section">
                        <div className="image-container">
                            <img src={picturesample} className="user-image"></img>
                        </div>
                    </div>

                    <div className="form-section">
                        <h2 className="form-title">Hello, student!</h2>
                        <div className="form-group">
                            <label className="form-label">First name: </label>
                            <input
                                type="text"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Enter firstname"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Last name: </label>
                            <input
                                type="text"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Enter lastname"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Course: </label>
                            <select
                                name="course"
                                value={formData.course}
                                onChange={handleInputChange}
                                className="form-select"
                            >
                                <option value = "">Select Course </option>
                                <option value="BS Architecture">BS Architecture</option>
                                <option value="BS Chemical Engineering">BS Chemical Engineering</option>
                                <option value="BS Civil Engineering">BS Civil Engineering</option>
                                <option value="BS Computer Engineering">BS Computer Engineering</option>
                                <option value="BS Computer Science">BS Computer Science</option>
                                <option value="BS Electrical Engineering">BS Electrical Engineering</option>
                                <option value="BS Electronics Engineering">BS Electronics Engineering</option>
                                <option value="BS Industrial Engineering">BS Industrial Engineering</option>
                                <option value="BS Information Technology">BS Information Technology</option>
                                <option value="BS Mechanical Engineering with Computational Science">BS Mechanical Engineering with Computational Science</option>
                                <option value="BS Mechanical Engineering with Mechatronics">BS Mechanical Engineering with Mechatronics</option>
                                <option value="BS Medical Technology">BS Medical Technology</option>
                                <option value="BS Mining Engineering">BS Mining Engineering</option>
                                <option value="BS Nursing">BS Nursing</option>
                                <option value="BS Pharmacy">BS Pharmacy</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Year Level: </label>
                            <select
                                name="year"
                                value={formData.year}
                                onChange={handleInputChange}
                                className="form-select"
                            >
                                <option value = "">Select Year Level </option>
                                <option value="1st Year">1st Year</option>
                                <option value="2nd Year">2nd Year</option>
                                <option value="3rd Year">3rd Year</option>
                                <option value="4th Year">4th Year</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Position: </label>
                            <select
                                name="position"
                                value={formData.position}
                                onChange={handleInputChange}
                                className="form-select"
                            >
                                <option value = "">Select Position </option>
                                <option value="Academic Weapon">Academic Weapon</option>
                                <option value="Academic Victim">Academic Victim</option>
                                <option value="Procrastination Prodigy">Procrastination Prodigy</option>
                                <option value="Mamaya Na Major">Mamaya Na Major</option>
                                <option value="Canteen Valdeictorian">Canteen Valedictorian</option>
                            </select>
                        </div>
                        <button onClick={handleSubmit} className="submit-button">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default StudentInfo