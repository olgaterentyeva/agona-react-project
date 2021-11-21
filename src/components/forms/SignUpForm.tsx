import React, {useEffect, useState} from "react";

export function SignUpForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [emailError, setEmailError] = useState(true);
    const [passwordError, setPasswordError] = useState(true)
    const [repasswordError, setRepasswordError] = useState(true)
    const [inputError, setInputError] = useState('')
    const [formValid, setFormValid] = useState(false)

    // начинаем что-то вводить в инпуты и кнопка активируется
    useEffect(() => {
        if (email.length > 0 || password.length > 0 || repassword.length > 0) {
            setFormValid(true);
        } else {
            setFormValid(false)
        }
    }, [email, password, repassword])


    const validateEmail = (event: any) => {
        const email = event.target.value
        const input = event.target

        setEmail(email)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(email).toLowerCase())) {
            setEmailError(true)
            input.classList.add('error')
            setInputError('Некорректный email')
        } else {
            setEmailError(false)
            input.classList.remove('error')
            setInputError('')
        }
    }

    const validatePassword = (event: any) => {
        const password = event.target.value
        setPassword(password)
        const input = event.target

        if (password.length < 3 || password.length > 10) {
            setPasswordError(true)
            input.classList.add('error')
            setInputError('Длина пароля должна быть от 3 до 10 символов')
        } else {
            setPasswordError(false)
            input.classList.remove('error')
            setInputError('')
        }
    }

    const validateRepassword = (e:any) => {
        const repassword = e.target.value
        setRepassword(repassword)
        if (password !== repassword) {
            setRepasswordError(true)
            // setInputError('Пароли не совпадают')
        } else {
            setRepasswordError(false)
            // setInputError('')
        }
    }

    //при клике на кнопку проверяем валидность инпутов и если что выводим ошибку
    const onButtonClick = (e: any) => {
         // const button = e.target;
        if (emailError) {
            setFormValid(false)
            setInputError('Некорректный email')
        } else if (passwordError || repasswordError) {
            setFormValid(false);
            // button.classList.add('block')
            setInputError('Пароли не совпадают')
        } else {
            setFormValid(true);
            // button.classList.remove('block')
            setInputError('')
        }
    }

    return (
        <div className="signIn">
            <form className="signIn">
                <input
                    name="email"
                    type="text"
                    placeholder="Адрес электронной почты"
                    value={email}
                    onChange={validateEmail}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={validatePassword}
                />
                <input
                    name="repassword"
                    type="password"
                    placeholder="Повторите пароль"
                    value={repassword}
                    onChange={validateRepassword}
                />
                {/*{((emailDirty && passwordDirty) && inputError) && <div style={{color: 'red', marginTop: 18}}>{inputError}</div>}*/}
                {(inputError) && <div style={{color: 'red', marginTop: 18}}>{inputError}</div>}
                <button disabled={!formValid} onClick={onButtonClick} name="button" type="submit">Регистрация</button>
            </form>
        </div>
    );
}