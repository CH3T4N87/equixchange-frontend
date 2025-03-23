import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import Button from '@mui/material/Button';
import axios from "axios";


function Signup() {

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        username: "",
    });
    const { email, password, username } = inputValue;
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        // console.log(name,value);
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    // const handleError = (err) =>
    //     toast.error(err, {
    //         position: "bottom-left",
    //     });
    // const handleSuccess = (msg) =>
    //     toast.success(msg, {
    //         position: "bottom-right",
    //     });

    const [errorMessage, setErrorMessage] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "https://equixchange.onrender.com/signup",
                {
                    ...inputValue,
                },
            );
           
            if (data.success) {
                localStorage.setItem("token", data.token);
                window.location.href = "https://equixchange.vercel.app"
            }else {
                setErrorMessage(data.message); // Set error message from backend
            }
        } catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data.message); // Handle API error response
            } else {
                setErrorMessage("Something went wrong. Please try again.");
            }
        }
    }
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col signup-container">
                        <div className='signup-page'>
                        {errorMessage && <p className="alert alert-danger" role='alert'>{errorMessage}</p>}
                            <div className="signup-heading">
                                <p>Create an account</p>
                            </div>
                            <form onSubmit={handleSubmit} className="signup-form needs-validation">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" name='email' value={email} onChange={handleOnChange} placeholder="name@example.com" required />
                                    <div className="invalid-feedback">
                                        Please enter a email.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" name='username' value={username} onChange={handleOnChange} placeholder="be unique !" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" name='password' value={password} onChange={handleOnChange} placeholder="" required />
                                </div>
                                <Button variant="outlined" type='submit' className='btn btn-dark signup-btn'>Sign up</Button>
                                Already have an account?&nbsp;<a href="/login">Login</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
