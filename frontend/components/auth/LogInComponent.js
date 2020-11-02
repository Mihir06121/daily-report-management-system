import { useState, useEffect } from 'react';
import { login, authenticate, isAuth } from '../../actions/auth';
import Router from 'next/router';


const LoginComponent = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true,
    });

    const { email, password, error, loading, message, showForm } = values;

    useEffect(() => {
        isAuth() && Router.push(`/`);
    }, []);

    const submitHandler = event => {
        event.preventDefault();
        setValues({ ...values, loading: true, error: false });
        const user = { email, password };

        login(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                authenticate(data, () => {
                    if (isAuth() && isAuth().role === 1) {
                        Router.push(`/faculty`);
                        console.log('login succesfull')
                    } else {
                        Router.push(`/user`);
                    }
                });
            }
        });
    };

    const changeHandler = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };
      
    
    const loginForm = () => {
        return (
            <form onSubmit={submitHandler}>
                <div className="form-group text-area">
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
                    <button className="btn btn-outline-primary">Login</button>
                </div>
            </form>
        );

        
    };

    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');

    return (
        <React.Fragment>
            {showForm && loginForm()}
            {showError()}
            {showLoading()}
            {showMessage()}
        </React.Fragment>
    );
};

export default LoginComponent;