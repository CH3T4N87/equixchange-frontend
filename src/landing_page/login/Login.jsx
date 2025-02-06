import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
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
    const { email, password} = inputValue;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        console.log(name,value);
        setInputValue({
            ...inputValue,
            [name]: value,
        });
        // console.log(inputValue);
    };

    // const handleError = (err) =>
    //     toast.error(err, {
    //         position: "bottom-left",
    //     });
    // const handleSuccess = (msg) =>
    //     toast.success(msg, {
    //         position: "bottom-right",
    //     });


    const handleSubmit = async (e) => {
        
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "https://equixchange-backend.onrender.com/login",
                {
                  ...inputValue,
                },
                { withCredentials: true }
              );
            console.log(data);
            if (data.success) {
                window.location.href = "http://localhost:3001/";
                // setIsLoggedIn(true);
                // navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col signup-container">
                        <div className='signup-page'>
                            <div className="signup-heading">
                                <p>Sign in</p>
                            </div>
                            <form onSubmit={handleSubmit} className="signup-form">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" name='email' value={email} onChange={handleOnChange} placeholder="name@example.com" required/>
                                </div>
                                
                                <div className="mb-5">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" name='password' value={password} onChange={handleOnChange} placeholder="" required/>
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