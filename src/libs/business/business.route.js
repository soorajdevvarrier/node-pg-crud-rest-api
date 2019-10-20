const BusinessController = require('./business.controller'); 


exports.businessRoutes = function (app) {
    app.post('/business', [ 
        BusinessController.insert
    ]);
    app.get('/business/:businessId', [ 
        BusinessController.findBusinessById
    ]);
    app.put('/business/:businessId', [ 
        BusinessController.updateBusinessById
    ]);
    app.delete('/business/:businessId', [ 
        BusinessController.deleteBusinessById
    ]);
    app.get('/business', [ 
        BusinessController.findAllBusiness
    ]);
};