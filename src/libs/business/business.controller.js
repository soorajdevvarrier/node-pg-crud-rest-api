const BusinessModel = require('./business.model');
const fs = require('fs');

exports.insert = (req, res) => {
    req.body.image = `uploads/business-images/${req.file.filename}`;
    BusinessModel.createBusiness(req.body).then((result) => {
        res.status(201).send(result);
    }, err => {
        res.status(406).send(err);
    });
};
exports.findBusinessById = (req, res) => {
    BusinessModel.findBusinessById(req.params.businessId)
        .then((result) => {
            res.status(200).send(result);
        }, err => {
            res.status(err.status).send(err.message);
        });
};
exports.updateBusinessById = (req, res) => {
    if (req.file != undefined) {
        req.body.image = `uploads/business-images/${req.file.filename}`;
        let id = req.params.businessId
        BusinessModel.findBusinessById(id)
            .then((result) => {
                if (result.image != null) {
                    fs.unlinkSync(result.image);
                }
                BusinessModel.updateBusinessById(req.body, id)
                    .then((r) => {
                        res.status(200).send(r);
                    }, err1 => {
                        res.status(406).send(err1);
                    });
            }, err => {
                res.status(406).send(err);
            });
    } else {

        BusinessModel.updateBusinessById(req.body, req.params.businessId)
            .then((result) => {
                res.status(200).send(result);
            }, err => {
                res.status(406).send(err);
            });
    }
};
exports.deleteBusinessById = (req, res) => {
    let id = req.params.businessId;
    BusinessModel.findBusinessById(id)
        .then((result) => {
            if (result.image != null) {
                fs.unlinkSync(result.image);
            }
            BusinessModel.deleteBusinessById(id)
                .then((r) => {
                    res.status(200).send(r);
                }, err1 => {
                    res.status(406).send(err1);
                });
        }, err => {
            res.status(406).send(err);
        });
};
exports.findAllBusiness = (req, res) => {
    BusinessModel.findAllBusiness()
        .then((result) => {
            res.status(200).send(result);
        }, err => {
            res.status(406).send(err);
        });
}; 