module.exports = function(router) {
    var tripCtrl = require('./controller');
    const { productUpload } =require('../../lib/commanService/multer');

    router.post('/trip/list', tripCtrl.tripList);
    router.post('/trip/details', tripCtrl.tripDetails);
    router.post('/trip/add-tripe',tripCtrl.saveTrips);
    router.get('/trip/search-trip',tripCtrl.searchTrip);
    router.post('/trip/edit-tripe',tripCtrl.editTrip);
    router.post('/trip/delete-trip',tripCtrl.deleteTrip)
    return router
}