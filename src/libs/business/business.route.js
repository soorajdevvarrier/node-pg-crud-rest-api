const BusinessController = require('./business.controller'); 
const BusinessModel = require('./business.model'); 


exports.businessRoutes = function (app) {
    app.post('/business', [ 
        BusinessModel.uploadBusinessImage,
        BusinessController.insert
    ]);
    app.get('/business/:businessId', [ 
        BusinessController.findBusinessById
    ]);
    app.put('/business/:businessId', [ 
        BusinessModel.uploadBusinessImage,
        BusinessController.updateBusinessById
    ]);
    app.delete('/business/:businessId', [ 
        BusinessController.deleteBusinessById
    ]);
    app.get('/business', [ 
        BusinessController.findAllBusiness
    ]);
};