
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



exports.getAllAnimals = function(req, res, next) {
    Animal.find({}, (err, animals) => { 
    if (err) {
    return next(err);
    } else { 
    res.status(200).json(animals);
    }
    });
   };
   
