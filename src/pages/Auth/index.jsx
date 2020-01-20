import React from 'react';

import "./Auth.scss"
import LoginForm from "../../modules/LoginForm";
import {Route, Switch} from "react-router";
import RegisterForm from "../../modules/RegisterForm";

const Auth = () => {
    return (
        <section className={'auth'}>
            <div className="auth__content">
                <Switch>
                    <Route path={'/registration'} component={RegisterForm}/>
                    <Route path={['/', '/login']} component={LoginForm}/>
                </Switch>
            </div>
        </section>
    );
};

export default Auth;