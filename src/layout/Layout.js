import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {GiGameConsole} from "react-icons/gi";
import {useDispatch, useSelector} from "react-redux";
import ItemsInBasket from "../components/ItemsInBasket/ItemsInBasket";
import {LOGOUT} from "../reduxStore/ActionConst";

const Layout = () => {
    const auth = useSelector(state => state.auth)
    const game = useSelector((state => state.basket))
    const dispatch = useDispatch()
    return (
        <>
            <header className="d-flex justify-content-between mt-2">
                <Link to='/'>
                    <GiGameConsole
                        className='basket-icon'
                        fontSize={30}/> Game store</Link>
                <div className="d-flex gap-3">
                    <Link to='/basket'>
                        <ItemsInBasket items={game.length}/>
                    </Link>
                    {auth ?  <Link to='/adminPanel'>adminPanel</Link> : ''}
                    {auth ? <Link to='/'
                                  onClick={()=> dispatch({type:LOGOUT})}>Logout</Link>
                        : ''}
                </div>
            </header>
            <Outlet/>
        </>
    );
};

export default Layout;