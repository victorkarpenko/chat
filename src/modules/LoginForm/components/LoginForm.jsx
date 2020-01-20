import React from 'react';
import {Form, Icon, Input} from "antd";
import {Button, ShadowBlock} from "components";
import {Link} from "react-router-dom";

const LoginForm = (props) => {
        return (
            <>
                <div className="auth__top">
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуйста, войдите в свой аккаунт</p>
                </div>


                <ShadowBlock>
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
                        <Link className={'auth__register-link'} to={'/registration'}>Зарегистрироваться</Link>
                    </Form>
                </ShadowBlock>
            </>
        );
    }
;

export default LoginForm;