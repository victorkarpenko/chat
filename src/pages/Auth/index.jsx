import React from 'react';

import {Button, LoginBlock} from "../../components";
import {Form, Icon, Input} from 'antd';

import "./Auth.scss"

const Auth = () => {
    return (
        <section className={'auth'}>
            <div className="auth__content">
                <div className="auth__top">
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуйста, войдите в свой аккаунт</p>
                </div>
                <LoginBlock>
                    <Form className="login-form">
                        <Form.Item>
                            <Input size={'large'}
                                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder="Username"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input size={'large'}
                                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button size={'large'}>Войти в аккаунт</Button>
                        </Form.Item>
                            <a className={'auth__register-link'} href={'/#'}>Зарегистрироваться</a>
                    </Form>
                </LoginBlock>
            </div>
        </section>
    );
};

export default Auth;