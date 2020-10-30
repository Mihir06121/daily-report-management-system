import Layout from '../../components/Layout'
import { getReports } from '../../actions/report'
// import { useState } from 'react';
// import { API } from '../../config';

const listReports = ({reports}) => {

    
    // const displayReports = () => {
    //     return reports.map((report, i) => {
    //         return (
    //             <article key={i}>
    //                 <div>
    //                     <section>
    //                         Date: {repor}
    //                     </section>
    //                 </div>
    //             </article>
    //         )
    //     })
    // }
    
    return (
        <Layout>
            <div>
                List Of Reports
                <div>
                    {/* {displayReports()} */}
                    {JSON.stringify(reports)}
                    {console.log(reports)}
                </div>
            </div>
        </Layout>
    )
}

listReports.getInitialProps = () => {
    return getReports().then(data => {
        if (data.error) {
            console.log(data.error)
        } else {
            return {
                reports: data.reports,
            }
        }
    })
}

export default listReports