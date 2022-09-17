import React from 'react';
import {useDispatch} from "react-redux";
import {LOGIN, LOGOUT} from "../reduxStore/ActionConst";
import {Link} from "react-router-dom";

const Auth = () => {
    const dispatch = useDispatch();
    return (
        <div className='text-center d-flex justify-content-center gap-4'>
            <button type='button' className='btn btn-outline-warning'
                    onClick={()=> dispatch({type:LOGIN})}>
                <Link to='/basket'>Login</Link>
            </button>
            <button  type='button' className='btn btn-outline-danger'
                     onClick={()=> dispatch({type:LOGOUT})}>
                <Link to='/'>Logout</Link>
            </button>
        </div>
    );
};

export default Auth;