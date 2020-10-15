import Layout from '../components/Layout';
import RegisterComponent from '../components/auth/RegisterComponent';
import Link from 'next/link';

const Signup = () => {
    return (
        <Layout>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                <h2 className="pt-4 pb-4">Register</h2>
                    <RegisterComponent />
                </div>
            </div>
        </Layout>
    );
};

export default Signup;