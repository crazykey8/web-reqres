import React, {useEffect, useState} from 'react';
import FormInput from "./FormInput";
import Buttons from "../styles/Buttons";
import {useAppDispatch} from "../store/store";
import {responseRegister} from "../store/slices/SignUpReducer";
import {useNavigate} from "react-router-dom";

function Form() {

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('') // eve.holt@reqres.in
    const [password, setPassword] = useState('') // any password
    const [passwordRepeat, setPasswordRepeat] = useState('')

    const [validateName, setValidateName] = useState(false)
    const [validateEmail, setValidateEmail] = useState(false)
    const [validatePassword, setValidatePassword] = useState(false)
    const [validatePasswordRepeat, setValidatePasswordRepeat] = useState(false)
    const [formValid, setFormValid] = useState(false)

    async function handleAction(e: any) {
        e.preventDefault()
        if (formValid) {
            await dispatch(responseRegister({email, password}))
            await setTimeout(() => {
                navigate('/')
                navigate(0)
            }, 0)
        }
    }

    function validateNameFunc(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value)
        if (name.length <= 3) {
            setValidateName(true)
        } else {
            setValidateName(false)
        }
    }

    function validateEmailFunc(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)
        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        if (!re.test(String(e.target.value).toLowerCase())) {
            setValidateEmail(true)
        } else {
            setValidateEmail(false)
        }
    }

    function validatePasswordFunc(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
        if (password.length <= 3) {
            setValidatePassword(true)
        } else {
            setValidatePassword(false)
        }
    }

    function validatePasswordRepeatFunc(e: React.ChangeEvent<HTMLInputElement>) {
        setPasswordRepeat(e.target.value)
    }

    useEffect(() => {
        if (password !== passwordRepeat) {
            setValidatePasswordRepeat(true)
        } else {
            setValidatePasswordRepeat(false)
        }
    }, [passwordRepeat, password])

    useEffect(() => {
        if ((name.length >= 5) && email.length && password.length && (password === passwordRepeat)) setFormValid(true)
    }, [name.length, email.length, password.length, passwordRepeat.length])

    return (
        <form>
            <FormInput name={'Имя'} type={'text'} placeholder={'Имя'} value={name} validator={validateNameFunc}
                       validate={validateName}/>
            <FormInput name={'Электронная почта'} type={'email'} placeholder={'example@mail.ru'} value={email}
                       validate={validateEmail} validator={validateEmailFunc}/>
            <FormInput name={'Пароль'} type={'password'} value={password} hideShow validate={validatePassword}
                       validator={validatePasswordFunc}/>
            <FormInput name={'Подтвердите пароль'} type={'password'} value={passwordRepeat}
                       hideShow validate={validatePasswordRepeat} validator={validatePasswordRepeatFunc}/>
            <Buttons onClick={handleAction} padding={'13px 0'} width={'100%'}
                     backgroundColor={formValid ? 'var(--color-violet)' : 'var(--color-red)'}
                     color={'var(--color-white)'} margin={'8px 0 0 0'}>
                Зарегистрироваться
            </Buttons>
        </form>
    );
}

export default Form;