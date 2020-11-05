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
        prof_name
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
        prof_name,
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
    Report.find({}).sort({ createdAt: -1 }).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

exports.read = (req, res) => {
        const reportId = req.params.id;

        Report.findById({ _id: reportId }).exec((err, report) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
        res.json(report);
        console.log(report)
    });
};

exports.remove = (req, res) => {
    const reportId = req.params.id;

    Report.findByIdAndRemove({_id: reportId }).exec((err) => {
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
