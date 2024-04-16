const router = require('express').Router();

const {
    indexView,
    getForm,
    getAllAnimals
} = require('../controllers/animal.controller');


// Home/Index 
router.get('/', indexView);
router.get('/entry-form', getForm);
router.get('/all-animals', getAllAnimals);


module.exports = router;
