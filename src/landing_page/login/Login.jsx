import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Button from '@mui/material/Button';
import axios from "axios";


function Login() {
    // const [isloggedIn , setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    });
    const { email, password } = inputValue;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setInputValue({
            ...inputValue,
            [name]: value,
        });
        // console.log(inputValue);
    };




    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            const { data } = await axios.post(
                "https://equixchange.onrender.com/login",
                { ...inputValue },
                { withCredentials: true }
            );
            
            if (data.success) {
                localStorage.setItem("token", data.token);
                window.location.href = "https://equixchange.vercel.app";
                // console.log(localStorage.getItem("token"));
                
            } else {
                setErrorMessage(data.message); // Set error message from backend
            }
        } catch (error) {
            setErrorMessage("Something went wrong. Please try again.");
        }
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col signup-container">
                        <div className='signup-page'>
                            {errorMessage && <p className="alert alert-danger" role='alert'>{errorMessage}</p>}
                            <div className="signup-heading">
                                <p>Sign in</p>
                            </div>
                            <form onSubmit={handleSubmit} className="signup-form">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" name='email' value={email} onChange={handleOnChange} placeholder="name@example.com" required />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" name='password' value={password} onChange={handleOnChange} placeholder="" required />
                                </div>
                                <Button variant="outlined" type='submit' className='btn btn-dark signup-btn'>Sign in</Button>
                                Don't have any account?<a href="/signup">Register</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
