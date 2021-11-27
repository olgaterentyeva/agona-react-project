import React, {useEffect, useState} from "react";
import {Button} from "../../ui/button/Button";
import {Input} from "../../ui/input/Input";
import {QuestionSlider} from "../../ui/questionSlider/QuestionSlider";
import { useHistory } from "react-router-dom";

export function SignInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(true);
    const [passwordError, setPasswordError] = useState(true)
    const [inputError, setInputError] = useState('')
    const [formValid, setFormValid] = useState(false)
    const [isRegistered, setIsRegistered] = useState(false)
    const history = useHistory();

    //начинаем чтото вводить в инпуты и кнопка активируется
    useEffect(()=>{
        if (email.length > 0 || password.length > 0) {
            setFormValid(true);

        } else  {
            setFormValid(false)
        }
    }, [email, password])

    const validateEmail = (event: any) => {
        const email = event.target.value
        const input = event.target

        setEmail(email)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(email).toLowerCase())) {
            setEmailError(true)
            input.classList.add('error')
        } else {
            setEmailError(false)
            input.classList.remove('error')
        }
    }

    const validatePassword = (event: any) => {
        const password = event.target.value
        const input = event.target
        setPassword(password)

        if (password.length < 3 || password.length > 10) {
            setPasswordError(true)
            input.classList.add('error')
        } else {
            setPasswordError(false)
            input.classList.remove('error')
        }
    }

    //при коике на кнопук проверяем валидность инпутов и если тчо выводим ошибку
    const onButtonClick=(e:any)=>{
        const button = e.target;
        if(emailError || passwordError){
            setFormValid(false);
            button.classList.add('block')
            setInputError('Неверные логин или пароль')
        }
        else{
            setFormValid(true);
            button.classList.remove('block')
            setInputError('')
            setIsRegistered(true)
            setTimeout(() => {
                setIsRegistered(false)
            }, 3000);
            setTimeout(() => {
                history.push("/collection");
            }, 3001)
        }
    }

    return (
        <div className="signIn">
            <form className="signIn">
                <Input
                    name="email"
                    type="text"
                    placeholder="Адрес электронной почты"
                    value={email}
                    onChange={validateEmail}
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={validatePassword}
                />
                {(inputError) && <div style={{color: 'red', marginTop: 18}}>{inputError}</div>}
                {isRegistered ?
                    <div id="floatingBarsG">
                        <div className="blockG" id="rotateG_01"/>
                        <div className="blockG" id="rotateG_02"/>
                        <div className="blockG" id="rotateG_03"/>
                        <div className="blockG" id="rotateG_04"/>
                        <div className="blockG" id="rotateG_05"/>
                        <div className="blockG" id="rotateG_06"/>
                        <div className="blockG" id="rotateG_07"/>
                        <div className="blockG" id="rotateG_08"/>
                    </div> :
                    <Button type="submit" disabled={!formValid} onClick={onButtonClick} buttonText="Регистрация"/>
                }
                <QuestionSlider question='Еще не зарегистрированы?' href='/signUp' hrefText='Регистрация'/>
            </form>
        </div>
    );
}