import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import Report from '../../../components/crud/Report';

const createReport = () => {
    return(
        <Layout>
            <Admin>
                <div className="conatiner-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <Report />
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    )
}

export default createReport;