import {action, makeObservable, observable, override} from "mobx";

export default class AuthStore {

    email = '';
    password = '';
    repassword = '';
    emailError = true;
    passwordError = true;
    repasswordError = true;
    inputError = '';
    formValid = false;
    isRegistered = false;

    constructor() {
        makeObservable(this, {
            email: observable,
            password: observable,
            repassword: observable,
            emailError: observable,
            passwordError: observable,
            repasswordError: observable,
            inputError: observable,
            formValid: observable,
            isRegistered: observable,
            setFormValid: action,
            setEmailError: action,
            setIsRegistered: action,
            setPasswordError: action,
            setRepasswordError: action,
            setInputError: action,
            setPassword: action,
            setRepassword: action,
            setEmail: action,
            validateEmail: action,
            validatePassword: action,
            validateRepassword: action,
        })
    }

    setFormValid = (value: boolean): void => {
        this.formValid = value;
    }

    setEmail = (value: string): void => {
        this.email = value;
    }

    setPassword = (value: string): void => {
        this.password = value;
    }

    setRepassword = (value: string): void => {
        this.repassword = value;
    }

    setEmailError = (value: boolean): void => {
        this.emailError = value;
    }

    setPasswordError = (value: boolean): void => {
        this.passwordError = value;
    }

    setRepasswordError = (value: boolean): void => {
        this.repasswordError = value;
    }

    setInputError = (value: string): void => {
        this.inputError = value;
    }

    setIsRegistered = (value: boolean): void => {
        this.isRegistered = value;
    }

    validateEmail = (event: any) => {
        const emailValue = event.target.value
        const input = event.target

        this.setEmail(emailValue)
        console.log(this.email);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(emailValue).toLowerCase())) {
            this.setEmailError(true)
            input.classList.add('error')
        } else {
            this.setEmailError(false)
            input.classList.remove('error')
        }
    }

    validatePassword = (event: any) => {
        const password = event.target.value
        this.setPassword(password)

        if (password.length < 3 || password.length > 10) {
            this.setPasswordError(true)
            this.setInputError('Длина пароля должна быть от 3 до 10 символов')
        } else {
            this.setPasswordError(false)
            this.setInputError("")
        }
    }

    validateRepassword = (event: any) => {
        const password = event.target.value
        this.setRepassword(password)
        if (password !== this.password) {
            this.setRepasswordError(true)
            this.setInputError('Пароли не совпадают')
        } else {
            this.setRepasswordError(false)
            this.setInputError('');
        }
    }
}