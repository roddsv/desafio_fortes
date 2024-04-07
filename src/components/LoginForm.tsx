import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
                    <main>
                <form>
                    <p className="login-header">Faça seu login</p>
                </form>
            </main>
        
    );
};

export default LoginForm;