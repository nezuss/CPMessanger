import React from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import FormLabel from '@mui/material/FormLabel';

function CallRegister() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const link = "";

    axios.post(link, {
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    })
    .then(function (response) {
        console.log(response.data);
        if (response.data.status === "success") {
            window.location.href = "/user/main";
        } else {
            alert("Login failed. Please check your credentials.");
        }
    })
    .catch(function (error) {
        console.error(error);
    });
}

function Register() {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
            <div className="flex flex-col items-center justify-center w-full bg-gray-100">
                <h1>Register</h1>
                <div id="login-form" className="flex flex-col gap-4 w-1/1.5">
                    <span className="flex flex-col">
                        <FormLabel for="username">Username</FormLabel>
                        <TextField id="username" variant="outlined" type="text" placeholder="User25542" />
                    </span>
                    <span className="flex flex-col">
                        <FormLabel for="email">Email</FormLabel>
                        <TextField id="email" variant="outlined" type="text" placeholder="User25542@email.com" />
                    </span>
                    <span className="flex flex-col">
                        <FormLabel>Password</FormLabel>
                        <TextField id="password" variant="outlined" type="password" placeholder="I9Vz1b)1B4qN&qiS" />
                    </span>
                    <span className="flex flex-col">
                        <FormLabel>Confirm Password</FormLabel>
                        <TextField id="confirm-password" variant="outlined" type="password" placeholder="I9Vz1b)1B4qN&qiS" />
                    </span>
                    <Button type="submit" variant="contained" onClick={CallRegister}>Register</Button>
                </div>
                <p>Already have an account? <Link href="/user/login">Login</Link></p>
            </div>
            <div className="h-full hidden lg-block bg-cover bg-no-repeat" style={{backgroundImage: "url('/Img/User/LoginBackground.jpg')"}} />
        </div>
    )
}

export default Register;
