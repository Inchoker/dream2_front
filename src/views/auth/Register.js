import React from "react";
import httpClient from 'react-http-client';
export default function Register() {
    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [errName, setErrName] = React.useState(null);
    const [errEmail, setErrEmail] = React.useState(null);
    const [errPassword, setErrPassword] = React.useState(null);
    const [title,setTitle] = React.useState('Or sign up with credentials')
    const [agree, setAgree] = React.useState(false)
    const url = 'http://localhost:5000/user'
    const body = {
        email: email,
        password: password,
        userName: name,
    }
    function setErr(errMessage) {
        switch (errMessage) {
            case "userName should not be empty":
                setErrName('Please input user name');
                break;
            case "email should not be empty":
                setErrEmail('Please input email');
                break;
            case "email must be an email":
                setErrEmail('Invalid email format');
                break;
            case "password is too short":
                setErrPassword('password is too short')
        }
    }
    function createNewUser() {
       setErrName(null)
       setErrEmail(null)
       setErrPassword(null)
        httpClient.post(url,body).then((res) => {
                setTitle(`Successfully created new user, please login`)
        }).catch(e => {
            const errRes = JSON.parse(e.message).data.message;
            if (Array.isArray(errRes)) {
                errRes.forEach(setErr)
            }
            if (errRes === 'Duplicate Username') {
                setErrName('user name is already taken')
            }
        })
    }
    return (
        <>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-6/12 px-4">
                        <div
                            className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                            <div className="rounded-t mb-0 px-6 py-6">
                                <div className="text-center mb-3">
                                    <h6 className="text-gray-600 text-sm font-bold">
                                        Sign up with
                                    </h6>
                                </div>
                                <div className="btn-wrapper text-center">
                                    <button
                                        className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        <img
                                            alt="..."
                                            className="w-5 mr-1"
                                            src={require("assets/img/github.svg")}
                                        />
                                        Github
                                    </button>
                                    <button
                                        className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        <img
                                            alt="..."
                                            className="w-5 mr-1"
                                            src={require("assets/img/google.svg")}
                                        />
                                        Google
                                    </button>
                                </div>
                                <hr className="mt-6 border-b-1 border-gray-400"/>
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-gray-500 text-center mb-3 font-bold">
                                    <small>{title}</small>
                                </div>
                                <form>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Name
                                            <small className="red">{errName}</small>
                                        </label>
                                        <input
                                            type="email"
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            placeholder={name}
                                            onChange={e => setName(e.target.value)}
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Email
                                            <small className="red">{errEmail}</small>
                                        </label>
                                        <input
                                            type="email"
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            placeholder={email}
                                            onChange={event => setEmail(event.target.value)}
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Password
                                            <small className="red">{errPassword}</small>
                                        </label>
                                        <input
                                            type="password"
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            placeholder={password}
                                            onChange={event => setPassword(event.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input
                                                id="customCheckLogin"
                                                type="checkbox"
                                                className="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                                onChange={(e) => console.log(e.target.checked)}
                                            />
                                            <span className="ml-2 text-sm font-semibold text-gray-700">
                        I agree with the{" "}
                                                <a
                                                    href="#pablo"
                                                    className="text-blue-500"
                                                    onClick={(e) => e.preventDefault()}
                                                >
                          Privacy Policy
                        </a>
                      </span>
                                        </label>
                                    </div>

                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => {createNewUser()
                                                return false
                                            }}
                                        >
                                            Create Account
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
