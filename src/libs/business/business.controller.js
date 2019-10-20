const BusinessModel = require('./business.model');

exports.insert = (req, res) => {
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
    BusinessModel.updateBusinessById(req.body, req.params.businessId)
        .then((result) => {
            res.status(200).send(result);
        }, err => {
            res.status(406).send(err);
        });

};
exports.deleteBusinessById = (req, res) => {
    let id = req.params.businessId;
    BusinessModel.deleteBusinessById(id)
        .then((r) => {
            res.status(200).send(r);
        }, err1 => {
            res.status(406).send(err1);
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