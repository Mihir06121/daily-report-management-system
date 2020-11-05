import { withRouter } from 'next/router'
import Layout from '../../components/Layout'
import { singleReport } from '../../actions/report'
import { useState } from 'react'

const SingleReport = ({report, router}) => {
    return (
        <React.Fragment>
            <Layout>
                <article>
                    {JSON.stringify(router)}
                    {JSON.stringify(report)}
                </article>
            </Layout>
        </React.Fragment>
    )
}

SingleReport.getInitialProps = ({query}) => {
    return singleReport(query._id).then(data => {
        if(data.error) {
            console.log(data.error)
        } else {
            return {report: data}
        }
    })
}



export default withRouter(SingleReport)