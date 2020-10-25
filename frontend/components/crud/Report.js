import{ useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { getCookie } from '../../actions/auth';
import { create } from '../../actions/report';

const Report = () => {
    const [values, setValues] = useState({
        subject1: '',
        sub_1_Present: '',
        sub_1_Absent: '',
        sub_1_Total: '',
        subject2: '',
        sub_2_Present: '',
        sub_2_Absent: '',
        sub_2_Total: '',
        subject3: '',
        sub_3_Present: '',
        sub_3_Absent: '',
        sub_3_Total: '',
        subject4: '',
        sub_4_Present: '',
        sub_4_Absent: '',
        sub_4_Total: '',
        error: false,
        success: false,
        reports: [],
        removed: false,
        reload: false
    });

    const {
        subject1,
        sub_1_Present,
        sub_1_Absent,
        sub_1_Total,
        subject2,
        sub_2_Present,
        sub_2_Absent,
        sub_2_Total,
        subject3,
        sub_3_Present,
        sub_3_Absent,
        sub_3_Total,
        subject4,
        sub_4_Present,
        sub_4_Absent,
        sub_4_Total,
        reports,
        removed,
        reload
    } = values
    
    const token = getCookie('token');

    // useEffect(() => {
    //     loadReport();
    // },[reload])

    // const loadReport =() => {
    //     getReport().then(data=> {
    //         if (data.error) {
    //             console.log(data.error);
    //         } else {
    //             setValues({...values, reports:data});
    //         }
    //     });
    // };

    // const showReports = () => {

    // } 

    const clickSubmit = e => {
        e.preventDefault();
        // console.log('create category', name);
        create({ 
            subject1,
            sub_1_Present,
            sub_1_Absent,
            sub_1_Total,
            subject2,
            sub_2_Present,
            sub_2_Absent,
            sub_2_Total,
            subject3,
            sub_3_Present,
            sub_3_Absent,
            sub_3_Total,
            subject4,
            sub_4_Present,
            sub_4_Absent,
            sub_4_Total,
         }, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({ ...values, error: false, success: false, 
                    subject1: '',
                    sub_1_Present: '',
                    sub_1_Absent: '',
                    sub_1_Total: '',
                    subject2: '',
                    sub_2_Present: '',
                    sub_2_Absent: '',
                    sub_2_Total: '',
                    subject3: '',
                    sub_3_Present: '',
                    sub_3_Absent: '',
                    sub_3_Total: '',
                    subject4: '',
                    sub_4_Present: '',
                    sub_4_Absent: '',
                    sub_4_Total: '', 
                    removed: !removed, reload: !reload });
            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, [name]:e.target.value,
            error: false, success: false, removed: '' });
    };

    return(
        <React.Fragment>
            <h1>Report From</h1>
            <form onSubmit={clickSubmit}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md">
                            <label className="text-muted">Subject 1</label>
                            <input type="text" className="form-control" 
                            onChange={handleChange('subject1')} 
                            value={subject1} 
                            required />
                        </div>
                        <div className="col-md">
                            <label className="text-muted">Present</label>
                            <input type="number" className="form-control" 
                            onChange={handleChange('sub_1_Present')} 
                            value={sub_1_Present} 
                            required />
                        </div>
                        <div className="col-md">
                            <label className="text-muted">Absent</label>
                            <input type="number" className="form-control" 
                            onChange={handleChange('sub_1_Absent')} 
                            value={sub_1_Absent} 
                            required />
                        </div>
                        <div className="col-md">
                            <label className="text-muted">Total</label>
                            <input type="number" className="form-control" 
                            onChange={handleChange('sub_1_Total')} 
                            value={sub_1_Total} 
                            required />
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md">
                            <label className="text-muted">Subject 2</label>
                            <input type="text" className="form-control" 
                            onChange={handleChange ('subject2')} 
                            value={subject2} 
                            required />
                        </div>
                        <div className="col-md">
                            <label className="text-muted">Present</label>
                            <input type="number" className="form-control" 
                            onChange={handleChange('sub_2_Present')} 
                            value={sub_2_Present} 
                            required />
                        </div>
                        <div className="col-md">
                            <label className="text-muted">Absent</label>
                            <input type="number" className="form-control" 
                            onChange={handleChange('sub_2_Absent')} 
                            value={sub_2_Absent} 
                            required />
                        </div>
                        <div className="col-md">
                            <label className="text-muted">Total</label>
                            <input type="number" className="form-control" 
                            onChange={handleChange('sub_2_Total')} 
                            value={sub_2_Total} 
                            required />
                        </div>
                    </div>
                    <hr/>
                    <div className="text-center"><h1>Break</h1></div>
                    <hr/>
                    <div className="row">
                        <div className="col-md">
                            <label className="text-muted">Subject 3</label>
                            <input type="text" className="form-control" 
                            onChange={handleChange('subject3')} 
                            value={subject3} 
                            required />
                        </div>
                        <div className="col-md">
                            <label className="text-muted">Present</label>
                            <input type="number" className="form-control" 
                            onChange={handleChange('sub_3_Present')} 
                            value={sub_3_Present} 
                            required />
                        </div>
                        <div className="col-md">
                            <label className="text-muted">Absent</label>
                            <input type="number" className="form-control" 
                            onChange={handleChange('sub_3_Absent')} 
                            value={sub_3_Absent} 
                            required />
                        </div>
                        <div className="col-md">
                            <label className="text-muted">Total</label>
                            <input type="number" className="form-control" 
                            onChange={handleChange('sub_3_Total')} 
                            value={sub_3_Total} 
                            required />
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md">
                            <label className="text-muted">Subject 4</label>
                            <input type="text" className="form-control" 
                            onChange={handleChange('subject4')} 
                            value={subject4} 
                            required />
                        </div>
                        <div className="col-md">
                            <label className="text-muted">Present</label>
                            <input type="number" className="form-control" 
                            onChange={handleChange('sub_4_Present')} 
                            value={sub_4_Present} 
                            required />
                        </div>
                        <div className="col-md">
                            <label className="text-muted">Absent</label>
                            <input type="number" className="form-control" 
                            onChange={handleChange('sub_4_Absent')} 
                            value={sub_4_Absent} 
                            required />
                        </div>
                        <div className="col-md">
                            <label className="text-muted">Total</label>
                            <input type="number" className="form-control" 
                            onChange={handleChange('sub_4_Total')} 
                            value={sub_4_Total} 
                            required />
                        </div>
                    </div>
                </div>
                <div className="text-center pt-5 pb-5">
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </div>
            </form>
        </React.Fragment>
    )
}

export default Report