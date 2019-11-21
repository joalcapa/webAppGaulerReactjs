import React       from 'react';
import { Formik }  from 'formik';

import styles  from './styles';

const Login = () => {
    const initialValues = { 
        email: '',
    };

    const submitHandler = (values, actions) => {

    };

    const validateHandler = (values, props) => {
        const errors = {};
      
        if (!values.email) {
          errors.email = 'Email requerido';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Email invalido';
        }

        if (!values.password)
          errors.password = 'Contraseña requerida';
      
        return errors;
    };

    return (
        <div style={styles.container}>
            <div style={styles.containerForm}>
                <h1 style={styles.centerText}>
                    Inicio de sesión
                </h1>
                <div style={styles.centerText}>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={submitHandler}
                        validate={validateHandler}
                    >
                        { 
                
                            (props) => (
                            <form onSubmit={props.handleSubmit}>
                                <div>
                                    <input
                                        type={'text'}
                                        name={'email'}
                                        placeholder={'Correo electrónico'}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.email}
                                    />
                                </div>
                                <div>
                                    <input
                                        type={'password'}
                                        name={'password'}
                                        placeholder={'Contraseña'}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.password}
                                    />
                                </div>
                                <div>
                                    {props.errors.email && <div>{props.errors.email}</div>}
                                    {props.errors.password && <div>{props.errors.password}</div>}
                                    <button type={'submit'}>Enviar</button>
                                </div>
                            </form>
                            )
 
                        }
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default Login;