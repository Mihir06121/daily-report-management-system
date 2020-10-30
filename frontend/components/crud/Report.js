import{ useState, useEffect } from 'react';
import { getCookie } from '../../actions/auth';
import { create, getReport } from '../../actions/report';

const Report = () => {
    const [values, setValues] = useState({
        subject1: '',
        sub_1_Present: '0',
        sub_1_Absent: '0',
        sub_1_Total: '0',
        subject2: '',
        sub_2_Present: '0',
        sub_2_Absent: '0',
        sub_2_Total: '0',
        subject3: '',
        sub_3_Present: '0',
        sub_3_Absent: '0',
        sub_3_Total: '0',
        subject4: '',
        sub_4_Present: '0',
        sub_4_Absent: '0',
        sub_4_Total: '0',
        error: false,
        success: false,
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
        success,
        error,
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

    const clickSubmit = e => {
        e.preventDefault();
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
                setValues({ ...values, error: false, success: true, 
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
                    console.log('report Submitted successfully')
            }
        });
    };

    const handleChange = name => event => {
        setValues({ ...values, [name]:event.target.value,
            error: false, success: false, removed: '' });
    };

    const showSuccess = () => {
        if (success) {
            return <p className="text-white bg-primary">Report is created</p>;
        }
    };

    const showError = () => {
        if (error) {
            return <p className="text-white bg-danger">SomeThing went wromg<br/>
            Check if any entry is missing</p>;
        }
    };

    const mouseMoveHandler = event => {
        setValues({ ...values, error: false, success: false, removed: '' });
    };

    return(
        <React.Fragment>
            <h1>Report From</h1>
            <form onSubmit={clickSubmit}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md">
                            <label className="text-muted">Subject 1</label>
                            <select className="custom-select form-control" id="inputGroupSelect01"
                            onChange={handleChange('subject1')} 
                            value={subject1} 
                            required >
                                <option defaultValue>Select-One</option>
                                <option value="DBMS">DBMS</option>
                                <option value="DS">DS</option>
                                <option value="AM">AM</option>
                                <option value="CN">CN</option>
                                <option value="PP">PP</option>
                                <option value="No-Lectures">No-Lect</option>
                            </select>
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
                            <select className="custom-select form-control" id="inputGroupSelect01"
                            onChange={handleChange('subject2')} 
                            value={subject2} 
                            required >
                                <option defaultValue>Select-One</option>
                                <option value="DBMS">DBMS</option>
                                <option value="DS">DS</option>
                                <option value="AM">AM</option>
                                <option value="CN">CN</option>
                                <option value="PP">PP</option>
                                <option value="No-Lectures">No-Lect</option>
                            </select>
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
                            <select className="custom-select form-control" id="inputGroupSelect01"
                            onChange={handleChange('subject3')} 
                            value={subject3} 
                            required >
                                <option defaultValue>Select-One</option>
                                <option value="DBMS">DBMS</option>
                                <option value="DS">DS</option>
                                <option value="AM">AM</option>
                                <option value="CN">CN</option>
                                <option value="PP">PP</option>
                                <option value="No-Lectures">No-Lect</option>
                            </select>
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
                            <select className="custom-select form-control" id="inputGroupSelect01"
                            onChange={handleChange('subject4')} 
                            value={subject4} 
                            required >
                                <option defaultValue>Select-One</option>
                                <option value="DBMS">DBMS</option>
                                <option value="DS">DS</option>
                                <option value="AM">AM</option>
                                <option value="CN">CN</option>
                                <option value="PP">PP</option>
                                <option value="No-Lectures">No-Lect</option>
                            </select>
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
            <div onMouseMove={mouseMoveHandler}>
            <div className="text-center">
                {showSuccess()}
                {showError()}
            </div>
            </div>
        </React.Fragment>
    )
}

export default Report