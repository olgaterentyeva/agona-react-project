import React, {useEffect} from "react";
import {useHistory} from "react-router";
import {Input} from "../components/ui/input/Input";
import {Button} from '../components/ui/button/Button';
import {QuestionSlider} from "../components/ui/questionSlider/QuestionSlider";
import {Loading} from "../components/ui/loading/Loading";
import {useStores} from "../utils";
import {observer} from "mobx-react";


export const SignInFormWithStore = observer(() => {

    const {
        signInStore:
            {
                email,
                password,
                emailError,
                passwordError,
                inputError,
                formValid,
                isRegistered,
                setFormValid,
                setInputError,
                setIsRegistered,
                validateEmail,
                validatePassword
            }
    } = useStores();

    const history = useHistory();

    useEffect(() => {
        if (email.length > 0 || password.length > 0) {
            setFormValid(true);

        } else {
            setFormValid(false)
        }
    }, [email, password])

    const onButtonClick = () => {
        if (emailError || passwordError) {
            setFormValid(false);
            setInputError('Неверные пароль или логин')
        } else {
            setFormValid(true);
            setInputError('')
            setIsRegistered(true)
            setTimeout(() => {
                setIsRegistered(false)
                history.push("/collection")
            }, 3000, 3001);
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
                    <Loading/> :
                    <Button type="submit" disabled={!formValid} onClick={onButtonClick} buttonText="Войти"/>
                }
                <QuestionSlider question='Еще не зарегистрированы?' href='/signUp' hrefText='Регистрация'/>
            </form>
        </div>
    );
})