
const { response } = require("express");
//const bcrypt = require('bcrypt');
const {model} = require('mongoose');
// const saltRounds = 12;

const { Animal } = require("../model/Animal");

/**
 * renders home view
 * @param {*} req 
 * @param {*} res 
 */
exports.indexView = (req, res) => {
    res.render('index', {
        pageTitle: 'INFT 2202 - Home Page',
    })
}

/**
 * render the login page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getForm = (req, res, next) => {
    res.render('animals/entry-form', {
        pageTitle: 'Form',
        errorMessage: ''
    });
}
/**
 * render the edit form 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getEditForm = (req, res, next) => {
    res.render('animals/edit-animal', {
        pageTitle: 'Edit Form',
        errorMessage: ''
    });
}

/**
 * display all the data from the database
 * @param {*} req 
 * @param {*} res 
 */
exports.getAllAnimals = async (req, res) => {
    try {
        // Fetch all animals from the database
        const animal = await Animal.find({});
        console.log(animal)
        res.render('animals/all_animals', {
            pageTitle: 'All Animals',
            animals: animal
        });
    } catch (error) {
        console.error('Error fetching animals:', error);
        res.status(500).send('Failed to fetch animals from database');
    }
};
/**
 * Add a new animal data to the database
 * @param {*} req 
 * @param {*} res 
 */
exports.addAnimal = async (req, res) => {
    try {
        // Parse form data from request body
        const { Zoo, ScientificName, CommonName, GivenName, Gender, DOB, age, isTransportable } = req.body;

        // Create a new Animal object with form data
        const newAnimal = new Animal({
            Zoo,
            ScientificName,
            CommonName,
            GivenName,
            Gender,
            DOB,
            age,
            isTransportable
        });

        // Save the new animal record to the database
        await newAnimal.save();

        // Send response indicating successful addition of the animal
        res.status(201).send('Animal added successfully');
    } catch (error) {
        // If an error occurs, send an error response
        console.error('Error adding animal:', error);
        res.status(500).send('Failed to add animal to database');
    }
};



module.exports = exports;

   
