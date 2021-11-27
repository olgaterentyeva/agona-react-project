import {FC, ReactNode} from "react";
import {NavLink} from 'react-router-dom';
import circle from '../../../images/circle.svg'
import plus from '../../../images/plus.svg'
import miniLogo from '../../../images/mini-logo.svg'
import loupe from '../../../images/loupe.svg'
import avatar from '../../../images/avatar.svg'
import 'MainContainer.css'

interface MainContainerProps {
    children: ReactNode;
}

export const MainContainer: FC<MainContainerProps> = ({children}) => {
    return (
        <>
            <header className="header">
                <nav className="left-block">
                    <div className="circle-collection">
                        <img src={circle} alt="circle"/>
                        <NavLink to="/collection" exact className='collection' activeClassName=''>
                            Коллекция
                        </NavLink>
                    </div>
                    <div className="plus-add">
                        <img src={plus} className="plus" alt="plus"/>
                        <p className='add'>Добавить</p>
                    </div>
                </nav>

                <img src={miniLogo} className="miniLogo" alt="mini logo"/>
                
                <nav className="right-block">
                    <img src={loupe} className="loupe" alt="loupe"/>
                    <p className="search">Поиск</p>
                    <img src={avatar} alt="avatar"/>
                </nav>
            </header>

            <main>
                {children}
                {/* сюда добавим фильмы из стора */}
            </main>

        </>
    );
}