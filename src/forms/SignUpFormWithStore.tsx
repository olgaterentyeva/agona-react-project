import React, {useEffect} from "react";
import {useHistory} from "react-router";
import {Input} from "../components/ui/input/Input";
import {Button} from '../components/ui/button/Button';
import {QuestionSlider} from "../components/ui/questionSlider/QuestionSlider";
import {Loading} from "../components/ui/loading/Loading";
import {useStores} from "../utils";
import {observer} from "mobx-react";

export const SignUpFormWithStore = observer(() => {
    const {
        signInStore: {
            email,
            password,
            repassword,
            emailError,
            passwordError,
            repasswordError,
            inputError,
            formValid,
            isRegistered,
            setFormValid,
            setInputError,
            setIsRegistered,
            validateEmail,
            validatePassword,
            validateRepassword
        }
    } = useStores();
    const history = useHistory();

    useEffect(() => {
        if (email.length > 0 || password.length > 0 || repassword.length > 0) {
            setFormValid(true);

        } else {
            setFormValid(false)
        }
    }, [email, password, repassword])


    const onButtonClick = (e: any) => {
        if (emailError) {
            setFormValid(false)
            setInputError('Некорректный email')
        } else if (passwordError || repasswordError) {
            setFormValid(false);
            setInputError('Неверный пароль')
        } else {
            setFormValid(true);
            setInputError('');
            setIsRegistered(true)
            setTimeout(() => {
                setIsRegistered(false)
                history.push("/collection");
            }, 2000, 2001);
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
                <Input
                    name="repassword"
                    type="password"
                    placeholder="Повторите пароль"
                    value={repassword}
                    onChange={validateRepassword}
                />
                {(inputError) && <div style={{color: 'red', marginTop: 18}}>{inputError}</div>}
                {isRegistered ?
                    <Loading/> :
                    <Button type="submit" disabled={!formValid} onClick={onButtonClick} buttonText="Регистрация"/>
                }
                <QuestionSlider question='Есть логин для входа?' href='/signIn' hrefText='Войти'/>
            </form>
        </div>
    );
})