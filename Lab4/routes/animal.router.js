const router = require('express').Router();

const {
    indexView,
    getForm,
    getAllAnimals,
    addAnimal,
    getEditForm
} = require('../controllers/animal.controller');

// Route to render the home/index view 
router.get('/', indexView);

// Route to render the form view
router.get('/entry-form', getForm); 

// Route to render the edit form page
router.get('/edit-animal', getEditForm);

// Route to render the hall animals page which displays all the animal records from the database.
router.get('/all_animals', getAllAnimals);

// Route to add a new animal to the database
router.post('/addAnimal', addAnimal);




module.exports = router;
