import Layout from '../../../components/Layout';
import Faculty from '../../../components/auth/Faculty';
import Report from '../../../components/crud/Report';

const createReport = () => {
    return(
        <Layout>
            <Faculty>
                <div className="conatiner-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <Report />
                        </div>
                    </div>
                </div>
            </Faculty>
        </Layout>
    )
}

export default createReport;