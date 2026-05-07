import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setUser({ userName, password });
    // }

    return (
        <>
            <h2>Login</h2>
            <form>
                <input type="text"
                    value={userName}
                    placeholder="Enter your username"
                    onChange={(e) => {
                        setUserName(e.target.value);
                    }}
                />

                <input type="text"
                    value={password}
                    placeholder="Enter your password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />

                <button onClick={(e) => {
                    e.preventDefault();
                    setUser({ userName, password });
                }}>Submit</button>

            
            </form >
        </>
    )
}

export default Login;