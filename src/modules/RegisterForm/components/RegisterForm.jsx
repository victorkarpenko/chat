import React from 'react';
import {Form, Icon, Input} from "antd";
import {Button, ShadowBlock} from "components";
import {Link} from "react-router-dom";

const RegisterForm = (props) => {
    const isSuccess = false;
    return (
        <>
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа в чат, вам нужно зарегестрироваться</p>
            </div>

            <ShadowBlock>
                {!isSuccess ?
                    <Form className="login-form">
                        <Form.Item>
                            <Input size={'large'}
                                   type={"email"}
                                   prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder="E-mail"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input size={'large'}
                                   prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder="Ваше имя"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input size={'large'}
                                   prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   type="password"
                                   placeholder="Пароль"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input size={'large'}
                                   prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   type="password"
                                   placeholder="Повторите пароль"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button size={'large'}>Зарегистрироваться</Button>
                        </Form.Item>
                        <Link className={'auth__register-link'} to={'/login'}>Войти в аккаунт</Link>
                    </Form>

                    :

                    <div className="auth__success-block">
                        <div>
                            <Icon type="info-circle" theme="twoTone" />
                        </div>
                        <h2>Подтвердите свой аккаунт</h2>
                        <p>
                            На Вашу почту отправлено письмо с ссылкой на подтверждение
                            аккаунта.
                        </p>
                    </div>
                }
            </ShadowBlock>
        </>
    );
};

export default RegisterForm;