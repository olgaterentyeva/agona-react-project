import {useState} from "react";
import {NavLink} from "react-router-dom";

export function Slider () {

    const [question, setQuestion] = useState('Еще не зарегистрированы?');
    const [href, setHref] = useState('Регистрация');
    const [isRegistered, setIsRegistered] = useState(false);
    const [page, setPage] = useState('/signUp');


    const handleSwitch = () => {
        if (!isRegistered) {
            setQuestion('Есть логин для входа?')
            setHref('Войти')
            setIsRegistered(true)
            setPage('/signIn')
        } else {
            setQuestion('Еще не зарегистрированы?')
            setHref('Регистрация')
            setIsRegistered(false)
            setPage('/signUp')
        }
    }

    return (
        <div className="switch">
            <p>{question}</p>
            <NavLink to={page} onClick={handleSwitch}>{href}</NavLink>
        </div>
    );
}
