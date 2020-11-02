import Layout from '../../components/Layout';
import Faculty from '../../components/auth/Faculty';
import Link from 'next/link';

const FacultyIndex = () => {
    return (
        <Layout>
            <Faculty>
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Faculty Dashboard</h2>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-outline-primary">
                                <Link href="/faculty/crud/report">
                                    <a>Create Report</a>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </Faculty>
        </Layout>
    );
};

export default FacultyIndex;