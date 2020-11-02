import Layout from '../../components/Layout'
import { getReports, removeReport } from '../../actions/report'
import { getCookie, isAuth } from '../../actions/auth';
import{ useState, useEffect } from 'react';
import moment from 'moment';

const listReports = () => {

        const [values, setValues] = useState({
            reports:[],
        });
    
        const {
            reports,
        } = values
        
        const token = getCookie('token');
    
        useEffect(() => {
            loadReport();
        },[])
    
        const loadReport =() => {
            getReports().then(data=> {
                if (data.error) {
                    console.log(data.error);
                } else {
                    setValues({...values, reports:data});
                }
            });
        };

        const deleteReport = _id => {
            removeReport(_id, token).then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    loadReport();
                    setValues({...values, reports:data});
                }
            });
        };
    
        const deleteConfirm = _id => {
            let answer = window.confirm('Are you sure you want to delete this report?');
            if (answer) {
                deleteReport(_id);
            }
        };
    
        const displayReports = () => {
            return reports.map((r, i) => {
                return(
                    <div className="text-black text-center" key={i}>
                        <div className="row text-center">
                            <div className="col">
                                { r.prof_name }
                            </div>
                            <div className="col">
                                {moment(r.updatedAt).format("DD/MM/YY")}
                            </div>
                        </div>
                        <table className="container border text-center">
                            <thead>
                                <tr className="row">
                                    <th className="col">
                                        Subjects
                                    </th>
                                    <th className="col">
                                        Present
                                    </th>
                                    <th className="col">
                                        Absent
                                    </th>
                                    <th className="col">
                                        Total
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row">
                                    <td className="col">
                                        {r.subject1}
                                    </td>
                                    <td className="col">
                                        {r.sub_1_Present}
                                    </td>
                                    <td className="col">
                                        {r.sub_1_Absent}
                                    </td>
                                    <td className="col">
                                        {r.sub_1_Total}
                                    </td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr className="row">
                                    <td className="col">
                                        {r.subject2}
                                    </td>
                                    <td className="col">
                                        {r.sub_2_Present}
                                    </td>
                                    <td className="col">
                                        {r.sub_2_Absent}
                                    </td>
                                    <td className="col">
                                        {r.sub_2_Total}
                                    </td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr className="row">
                                    <td className="col">
                                        {r.subject3}
                                    </td>
                                    <td className="col">
                                        {r.sub_3_Present}
                                    </td>
                                    <td className="col">
                                        {r.sub_3_Absent}
                                    </td>
                                    <td className="col">
                                        {r.sub_3_Total}
                                    </td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr className="row">
                                    <td className="col">
                                        {r.subject4}
                                    </td>
                                    <td className="col">
                                        {r.sub_4_Present}
                                    </td>
                                    <td className="col">
                                        {r.sub_4_Absent}
                                    </td>
                                    <td className="col">
                                        {r.sub_4_Total}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="btn btn-sm btn-outline-danger" onClick={() => deleteConfirm(r._id)}>
                            Delete
                        </button>
                        <hr/>
                        <br/>
                    </div>
                )
            })
        }
    return(
     <div>
         <Layout> 

            {displayReports()}
         </Layout>
     </div>
    )
}

export default listReports