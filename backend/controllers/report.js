const Report = require('../models/report')

exports.create = (req, res) => {
    const{
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
    } = req.body;

    let report = new Report({
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
    })

    report.save((err, data) => {
        if(err) {
            return res.status(400).json({
                error: err
            })
        }
        res.json(data)
    })

}

exports.list = (req, res) => {
    Report.find({}).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

exports.read = (req, res) => {
        const reportId = req.params._id;

        Report.findOne({ reportId }).exec((err, report) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
        res.json(report);
    });
};

exports.remove = (req, res) => {
    const reportId = req.params._id;

    Report.findOneAndRemove({ reportId }).exec((err) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({
            message: 'Report deleted successfully'
        });
    });
};

// exports.update = (req, res) => {

//     const reportId = req.params._id;

//     const{
//         subject1,
//         sub_1_Present,
//         sub_1_Absent,
//         sub_1_Total,
//         subject2,
//         sub_2_Present,
//         sub_2_Absent,
//         sub_2_Total,
//         subject3,
//         sub_3_Present,
//         sub_3_Absent,
//         sub_3_Total,
//         subject4,
//         sub_4_Present,
//         sub_4_Absent,
//         sub_4_Total,
//     } = req.body;

//     Report.findByIdAndUpdate({ reportId }).exec((err) => {
//         if (err) {
//             return res.status(400).json({
//                 error: err
//             });
//         }

       
    
//         let updatedreport = new Report({
//             subject1,
//             sub_1_Present,
//             sub_1_Absent,
//             sub_1_Total,
//             subject2,
//             sub_2_Present,
//             sub_2_Absent,
//             sub_2_Total,
//             subject3,
//             sub_3_Present,
//             sub_3_Absent,
//             sub_3_Total,
//             subject4,
//             sub_4_Present,
//             sub_4_Absent,
//             sub_4_Total,
//         })

//         updatedreport.save((err, data) => {
//             if(err) {
//                 return res.status(400).json({
//                     error: err
//                 })
//             }
//             res.json(data)
//         })
//     });
// }
