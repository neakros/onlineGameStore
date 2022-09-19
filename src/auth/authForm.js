import React from 'react';
import './authForm.scss'
import { useForm } from "react-hook-form";
import {ImWarning} from "react-icons/im";
import {useDispatch} from "react-redux";
import {LOGIN} from "../reduxStore/ActionConst";
import {Link} from "react-router-dom";

const AuthForm = () => {
    const dispatch = useDispatch()

    const {
        register,
        formState: {
            isValid,
            errors
        },
        handleSubmit,
    } = useForm({
        mode: "onChange"
    })

    const onSubmit = (data) =>{
        console.log(JSON.stringify(data))
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                <input
                    type='email'
                    placeholder='Введіть Email'
                    {...register('email', {required: true})}/>

                <div
                    className='errors'>
                    {errors?.email && <p><ImWarning/>Введіть Email!</p>}
                </div>

                <input
                    type='password'
                    placeholder='Введіть пароль'
                    {...register('password', {required: 'Введіть пароль',
                        minLength: {
                        value: 6,
                            message: 'Мінімальна кількість символів 6'
                        },
                        pattern: /[A-ZА-Яа-яa-z0-9]{6}/})}/>

                <div
                    className='errors'>
                    {errors?.password && <p>{errors?.password?.message || <ImWarning/>}</p>}
                </div>

                {isValid ? <Link to='/basket'>
                    <input
                        className='submit'
                        type='submit'
                        onClick={()=> isValid ? dispatch({type:LOGIN}) : false}/>
                </Link>
                    :
                    <input
                    className='submit'
                    type='submit'
                    value='Login'
                    onClick={()=> isValid ? dispatch({type:LOGIN}) : false}/>}
            </form>
        </>
    );
};

export default AuthForm;