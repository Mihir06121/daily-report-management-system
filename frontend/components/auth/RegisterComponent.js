import { useState, useEffect } from 'react';
import { register, isAuth } from '../../actions/auth';
import Router from 'next/router';

const RegisterComponent = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const { name, email, password, error, loading, message, showForm } = values;

    useEffect(() => {
        isAuth() && Router.push(`/`);
    }, []);

    const submitHandler = e => {
        e.preventDefault();
        setValues({ ...values, loading: true, error: false });
        const user = { name, email, password };

        register(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    loading: false,
                    message: data.message,
                    showForm: false
                });
            }
        });
    };

    const changeHandler = email => e => {
        setValues({ ...values, error: false, [email]: e.target.value });
    };
    
    const registerForm = () => {
        return (
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    Name:
                    <input
                        value={name}
                        onChange={changeHandler('name')}
                        type="text"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    Email:
                    <input
                        value={email}
                        onChange={changeHandler('email')}
                        type="email"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    Password:
                    <input
                        value={password}
                        onChange={changeHandler('password')}
                        type="password"
                        className="form-control"
                    />
                </div>

                <div>
                    <button className="btn btn-outline-primary">Register</button>
                </div>
            </form>
        );
    };
    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');


    return (
        <React.Fragment>
            {showForm && registerForm()}
            {showError()}
            {showLoading()}
            {showMessage()}
        </React.Fragment>
    );
};

export default RegisterComponent;