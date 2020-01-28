import React from 'react';
import {Form, Icon, Input} from "antd";
import {Button, ShadowBlock} from "components";
import {Link} from "react-router-dom";
import {validateField} from "utils/helpers";

const RegisterForm = (props) => {
    const isSuccess = false;
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
                <h2>Регистрация</h2>
                <p>Для входа в чат, вам нужно зарегестрироваться</p>
            </div>

            <ShadowBlock>
                {!isSuccess ?
                    <Form onSubmit={handleSubmit} className="login-form">
                        <Form.Item
                            validateStatus={validateField(touched,errors,'email')}
                            hasFeedback
                            help={touched.email && errors.email ? errors.email : ''}
                        >
                            <Input id={'email'}
                                   size={'large'}
                                   type={"email"}
                                   prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder="E-mail"
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input id={'fullName'}
                                   size={'large'}
                                   prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder="Ваше имя"
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                            />
                        </Form.Item>
                        <Form.Item
                            validateStatus={validateField(touched, errors,'password')}
                            hasFeedback
                            help={touched.password && errors.password ? errors.password : ''}>
                            <Input size={'large'}
                                   prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   type="password"
                                   placeholder="Пароль"

                                   id={'password'}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                            />
                        </Form.Item>
                        <Form.Item
                            validateStatus={validateField(touched, errors,'passwordDouble')}
                            hasFeedback
                            help={touched.passwordDouble && errors.passwordDouble ? errors.passwordDouble : ''}
                        >
                            <Input size={'large'}
                                   prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   type="password"
                                   placeholder="Повторите пароль"
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   id={'passwordDouble'}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button onClick={handleSubmit} size={'large'}>Зарегистрироваться</Button>
                        </Form.Item>
                        <Link className={'auth__register-link'} to={'/login'}>Войти в аккаунт</Link>
                    </Form>

                    :

                    <div className="auth__success-block">
                        <div>
                            <Icon type="info-circle" theme="twoTone"/>
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