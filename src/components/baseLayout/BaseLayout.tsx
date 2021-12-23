import {FC, ReactNode} from "react";
import {NavLink} from 'react-router-dom';
import miniLogo from '../../images/mini-logo.svg'
import avatar from '../../images/avatar.svg'
import loupe from '../../images/loupe.svg';
import plus from '../../images/plus.svg'
import circle from '../../images/circle.svg'
import styles from './BaseLayout.module.sass'

interface MainContainerProps {
    children: ReactNode;
}

export const BaseLayout: FC<MainContainerProps> = ({children}) => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerCont}>
                    <nav className={styles.leftSide}>
                        <div className={styles.collectionRound}>
                            <NavLink to='/collection' exact className={styles.collection} activeClassName={styles.active}>
                                <img src={circle} alt="round"/>
                                <p className={styles.collectionText}>Коллекция</p>
                            </NavLink>
                        </div>
                        <div className={styles.addWithPlus}>
                            <img src={plus} className={styles.plus} alt="plus"/>
                            <p className={styles.add}>Добавить</p>
                        </div>
                    </nav>

                    <NavLink to = {`/`}>
                        <img src={miniLogo} className={styles.shortLogo} alt="short-logo"/>
                    </NavLink>

                    <nav className={styles.rightSide}>
                        <img src={loupe} className={styles.loupe} alt="loupe"/>
                        <p className={styles.search}>Поиск</p>

                        <ul className={styles.dropDown}>
                            <li><img src={avatar} className={styles.profile} alt="profile"/>
                                <ul className={styles.submenu}>
                                    <li><NavLink to={`/signIn`}>Вход</NavLink></li>
                                    <li><NavLink to={`/signUp`}>Регистрация</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <div className={styles.mainContainer}>
                    {children}
                </div>
            </main>
        </>
    )
}
