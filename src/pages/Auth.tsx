import axios from 'axios';
import React, { useContext, useState } from 'react'
import { IoSearchCircle } from 'react-icons/io5'
import { input } from "../sharedStyles";
import Toast from '../components/Toast'
import ReactDOM from 'react-dom';
import { ToastContext } from '../state/Toastcontext';


const Auth = () => {
    const URL = "https://fendir.herokuapp.com";
    const [mode, setMode] = useState("LOGIN");
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confPassword, setConfPassword] = useState("")
    const [role, setRole] = useState("")

    const { toasts, setToasts } = useContext(ToastContext)

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        if (name == "username") setUsername(value);
        if (name == "password") setPassword(value);
        if (name == "confPassword") setConfPassword(value);
        if (name == "role") setRole(value);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const { status, message } = validator();
        if (!status) return console.log(message)

        let payload: any = { username, password }

        if (mode == "REGISTER") payload["role"] = role

        axios.post(`${URL}/createUser`, payload).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err);
        })
    }

    const validator = () => {
        if (mode == "LOGIN") {
            if (!username || !password) {
                return { status: false, message: "Fill form correctly!" }
            }
        } else {
            if (!username || !password || !confPassword || !role) {
                return { status: false, message: "Fill form correctly!" }
            }
            if (password != confPassword) return { status: false, message: "Passwords do not match!" }
        }


        return { status: true, message: "Valid form" };
    }

    const resetForm = () => {
        setUsername(""); setPassword(""); setConfPassword(""); setRole("");
    }

    const toggleMode = () => {
        resetForm()
        mode == "LOGIN" ? setMode("REGISTER") : setMode("LOGIN")
    }

    const addToast = (status: string, title: string, description: string) => {
        let id = new Date().getTime()
        setToasts([...toasts, {
            id, status, title, description
        }])
        console.log(toasts);

        setTimeout(() => {
            setToasts([...toasts.filter((toast: any) => toast.id != id)])
            console.log(toasts);

        }, 5000)
    }

    return (
        <div className='auth-container w-screen h-screen flex items-center justify-center'>
            <button onClick={() => addToast("error", "Error", "There was an error")}>Hello</button>
            {/* <Toast status="error" description="This is a dummy toast description" title="Error" />
            <Toast status="success" description="This is a dummy toast description" title="Error" />
            <Toast status="warning" description="This is a dummy toast description" title="Error" />
            <Toast status="info" description="This is a dummy toast description" title="Error" /> */}

            <header className='flex flex-row items-center p-4 absolute top-0 left-0'>
                <IoSearchCircle className='text-5xl text-blue-700' />
                <h1 className='text-4xl font-bold text-blue-700'>Finder.</h1>
            </header>

            <main className='w-4/5 max-w-md'>
                <form action="" className='flex flex-col items-center gap-4' onSubmit={handleSubmit}>
                    <h1 className='text-4xl font-bold mb-3'>
                        {mode == "LOGIN" ? "Sign In" : "Register"}
                    </h1>
                    <input type="text" placeholder="Enter username" className={input} name="username" value={username} onChange={handleChange} />
                    {
                        mode == "REGISTER" &&
                        <select id="" className={input} name="role" onChange={handleChange} value={role}>
                            <option value="" disabled>Select a role</option>
                            <option value="hr">HR</option>
                            <option value="employee">Employee</option>
                        </select>
                    }
                    <input type="password" placeholder="Enter password" className={input} name="password" value={password} onChange={handleChange} />
                    {
                        mode == "REGISTER" &&
                        <input type="password" placeholder="Confirm password" className={input} name="confPassword" value={confPassword} onChange={handleChange} />
                    }
                    <p className='my-4 cursor-pointer hover:text-blue-700 transition-all duration-300 ease-in-out' onClick={toggleMode}>
                        {mode == "LOGIN" ? "New here? " : "Already have an account? "}
                        <span ><strong>
                            {mode == "LOGIN" ? "Create an account." : "Sign In."}
                        </strong></span>
                    </p>
                    <button type="submit" className='font-bold bg-blue-700 text-white p-2 rounded w-full'>
                        {mode == "LOGIN" ? "Sign In" : "Create account"}
                    </button>
                </form>
            </main>
        </div>
    )
}

export default Auth