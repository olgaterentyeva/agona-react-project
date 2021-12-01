import {FC, ReactNode, useEffect, useState} from "react";
import {NavLink, useParams} from 'react-router-dom';
import miniLogo from '../../images/mini-logo.svg'
import avatar from '../../images/avatar.svg'
import loupe from '../../images/loupe.svg';
import plus from '../../images/plus.svg'
import circle from '../../images/circle.svg'
import './BaseLayout.css'
import {FilmModel} from "../../models/Film.model";
import {useStores} from "../../utils";

interface MainContainerProps {
    children: ReactNode;
}

export const BaseLayout: FC<MainContainerProps> = ({children}) => {
    return (
        <>
            <header className='header'>
                <div className="headerCont">
                    <nav className='left-side'>
                        <div className="collection-round">
                            <NavLink to='/collection' exact className='collection' activeClassName='active'>
                                <img src={circle} alt="round"/>
                                <p className="collectionText">Коллекция</p>
                            </NavLink>
                        </div>
                        <div className='add-with-plus'>
                            <img src={plus} className="plus" alt="plus"/>
                            <p className='add'>Добавить</p>
                        </div>
                    </nav>

                    <NavLink to={`/collection`}>
                        <img src={miniLogo} className="short-logo" alt="short-logo"/>
                    </NavLink>

                    <nav className='right-side'>
                        <img src={loupe} className="loupe" alt="loupe"/>
                        <p className='search'>Поиск</p>

                        <ul className="drop-down">
                            <li><img src={avatar} className="profile" alt="profile"/>
                                    <ul className="submenu">
                                        <li><NavLink to={`/signIn`}>Вход</NavLink></li>
                                        <li><NavLink to={`/signUp`}>Регистрация</NavLink></li>
                                    </ul>
                            </li>
                        </ul>

                    </nav>
                </div>
            </header>

            <main>
                <div className="main-container">
                    {children}
                </div>
            </main>
        </>
    )
}
