import React from 'react';
import {Form, Icon, Input} from "antd";
import {Button, ShadowBlock} from "components";
import {Link} from "react-router-dom";
import {validateField} from "utils/helpers";


const LoginForm = (props) => {
        const {
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
        } = props;

        return (
            <>
                <div className="auth__top">
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуйста, войдите в свой аккаунт</p>
                </div>

                <ShadowBlock>
                    <Form onSubmit={handleSubmit} className="login-form">
                        <Form.Item
                            validateStatus={validateField(touched, errors,'email')}
                            hasFeedback
                            help={touched.email && errors.email ? errors.email : ''}
                        >
                            <Input id={'email'}
                                   size={'large'}
                                   prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder="E-mail"
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                            />
                        </Form.Item>
                        <Form.Item
                            validateStatus={validateField(touched, errors,'password')}
                            hasFeedback
                            help={touched.password && errors.password ? errors.password : ''}
                        >
                            <Input size={'large'}
                                   prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   type="password"
                                   placeholder="Password"
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   id={'password'}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button onClick={handleSubmit} size={'large'}>Войти в аккаунт</Button>
                        </Form.Item>
                        <Link className={'auth__register-link'} to={'/registration'}>Зарегистрироваться</Link>
                    </Form>
                </ShadowBlock>
            </>
        );
    }
;

export default LoginForm;