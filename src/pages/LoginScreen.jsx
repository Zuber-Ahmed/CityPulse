 import { useState } from "react";
 import useApp from "../hooks/useApp";

 const LoginScreen=()=> {
        const { login } = useApp();
        const [email, setEmail] =useState('');
        const [password, setPassword] =useState('');
        
        const handleLogin = (e) => {
            e.preventDefault();
            login(email, password);
        };
        
        return (
            <div className="auth-container">
                <h2 className="auth-title">Welcome to City Pulse</h2>
                <form className="auth-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="form-control" 
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            className="form-control" 
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <button type="button" className="btn btn-outline">Create Account</button>
                </form>
                <div className="auth-options">
                    <button className="biometric-btn">
                        <i className="fas fa-fingerprint"></i> Use Biometric Login
                    </button>
                </div>
            </div>
        );
    }

    export default LoginScreen;