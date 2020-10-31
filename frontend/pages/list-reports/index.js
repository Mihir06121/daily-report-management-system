import Layout from '../../components/Layout'
import { getReports } from '../../actions/report'
import { getCookie } from '../../actions/auth';
import{ useState, useEffect } from 'react';
import moment from 'moment';

const listReports = () => {

        const [values, setValues] = useState({
            reports:[],
            reload: false
        });
    
        const {
            reports,
            reload
        } = values
        
        const token = getCookie('token');
    
        useEffect(() => {
            loadReport();
        },[reload])
    
        const loadReport =() => {
            getReports().then(data=> {
                if (data.error) {
                    console.log(data.error);
                } else {
                    setValues({...values, reports:data});
                }
            });
        };
    
        const displayReports = () => {
            return reports.reverse().map((r, i) => {
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
                        <tbody className="">
                            <tr className="row">
                                <td className="col">
                                    {r.subject1}
                                </td>
                                <td className="col">
                                    {r.sub_1_Present}
                                </td>
                                <td className="col">
                                    {r.sub_1_Total}
                                </td>
                                <td className="col">
                                    {r.sub_1_Absent}
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
                                    {r.sub_2_Total}
                                </td>
                                <td className="col">
                                    {r.sub_2_Absent}
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
                                    {r.sub_3_Total}
                                </td>
                                <td className="col">
                                    {r.sub_3_Absent}
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
                                    {r.sub_4_Total}
                                </td>
                                <td className="col">
                                    {r.sub_4_Absent}
                                </td>
                            </tr>
                        </tbody>
                    </table>
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