export default ({isAuth, values, errors}) => {

    debugger;

    const rules = {
        email: (errors, value) => {
            if (!value) {
                errors.email = 'Введите E-Mail';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                errors.email = 'Неверный E-Mail';
            }
        },
        password: (errors, value) => {
            if (!value) {
                errors.password = 'Введите пароль'
            } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test((value))) {
                errors.password = isAuth ? 'Неверный пароль' : 'Слишком легкий пароль'
            }
        },
        passwordDouble: (errors, value) => {
            if (!value) {
                errors.passwordDouble = 'Введите пароль повторно'
            } else if (values.password !== value) {
                errors.passwordDouble = 'Неверный пароль'
            }
        }
    };

    Object.keys(values).forEach(
        key => rules[key] && rules[key](errors, values[key])
    )
};