import React, { useState } from 'react';
import { registration } from '../../actions/user';
import Input from '../input-rega-login/Input';
import './rega.sass';

const Registration = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    return (
        <div className="rega">
            <h2 className="rega_header">Регистрация</h2>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите электронную почту" />
            <Input value={pass} setValue={setPass} type="password" placeholder="Введите пароль" />
            <button className="rega_btn" onClick={() => registration(email, pass)}>Войти</button>
        </div>
    );
};

export default Registration;