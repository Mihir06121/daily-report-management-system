import Layout from '../components/Layout';
import LoginComponent from '../components/auth/LogInComponent';

const Login = () => {
    return (
        <Layout>
            <div className="row  d-flex justify-content-center">
                <div className="col-md-6">
                <h2 className="pt-4 pb-4">Login</h2>
                    <LoginComponent />
                </div>
            </div>
        </Layout>
    );
};

export default Login;