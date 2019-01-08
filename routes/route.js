var authenticated = require('../config/middleware/authenticated');
var passport = require('../config/passport');

var express = require("express");
var router = express.Router();
var db = require('../models');
// @TODO remove this object after ...
var results = {
    type: "Sweat Shirt",
    size: "large",
    height: "n/a",
    color: "Black/ Black/ Graphite",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/91BnZxDZEKL._SL1500_.jpg",
    productUrl: "https://www.amazon.com/Under-Armour-Coldgear-Infrared-Academy/dp/B077XNL1R3",
    price: "46.99",
    occasion: "sport",
    gender: "male",
    brand: "Under Armor",
    description: "Under Armour Men's Coldgear Infrared Fleece ¼ Zip Sweat Shirt",

};
router.get('/', function (req, res) {
    db.Product.findAll({}).then((data) => {
        console.log(data[0]);
        res.render('index', {

            results: data
        });
    })
});
router.get('/login', function (req, res) {
    res.render('login');

});



module.exports = router;