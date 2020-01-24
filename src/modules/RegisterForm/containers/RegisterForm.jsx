import RegisterForm from '../components/RegisterForm'
import {withFormik} from "formik";

export default withFormik({
    /*mapPropsToValues: () => ({ email: 'dsfdsfds@dsfdsfds' }),*/
    // Custom sync validation
    validate: values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Введите E-Mail';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Неверный E-Mail';
        }

        if(!values.password){
            errors.password = 'Введите пароль'
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test((values.password))){
            errors.password = 'Слишком легкий пароль'
        }

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'RegisterForm',
})(RegisterForm);