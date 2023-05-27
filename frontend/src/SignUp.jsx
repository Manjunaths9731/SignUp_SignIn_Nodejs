import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password !== confPassword){
            alert('Passwords do not match');
            return;
        }else if (password.length<=7){
            alert("password length must be greater or equal to 8")
        }else {
            try{
                const { data } = await Axios.post('/api/signup/',{
                    name,
                    email,
                    password
                });
                localStorage.setItem('userInfo', JSON.stringify(data));
                alert("Registered Successfully");
                navigate('/signin');
            }catch (err) {
                console.log(err.message);
                alert("Registration was unsuccessfull");
            }
        }
    }

    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50 shadow-2xl">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-purple-600">
                            SignUp
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="name"
                                className="flex place-content-start text-sm font-medium text-gray-700 undefined"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    className="required block w-full mt-1 p-2 outline-none bg-gray-100 rounded-md shadow-sm"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="flex place-content-start text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    className="required block w-full mt-1 p-2 outline-none bg-gray-100 rounded-md shadow-sm"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="flex place-content-start text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    className="required block w-full mt-1 p-2 outline-none bg-gray-100 rounded-md shadow-sm"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="confPassword"
                                className="flex place-content-start text-sm font-medium text-gray-700 undefined"
                            >
                                Confirm Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="confPassword"
                                    className="required block w-full mt-1 p-2 outline-none bg-gray-100 rounded-md shadow-sm"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <a
                                className="text-sm text-gray-700 underline hover:text-gray-900"
                                href="/"
                            >
                                Already registered?
                            </a>
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;