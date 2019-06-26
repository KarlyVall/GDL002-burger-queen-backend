const Product = require('../models/product');
const mongoose = require('mongoose');

mongoose.connect('localhost:27017/burger');

let products = [
    new Product({
    imagePath:'https://media.mnn.com/assets/images/2017/06/sonic_mushroom_beef_burger.jpg.653x0_q80_crop-smart.jpg',
    title: 'Hamburguesa sencilla',
    description: 'no',
    price: '10'
   }),
   new Product({
    imagePath:'https://media.gettyimages.com/photos/double-cheese-burger-on-white-picture-id136650506',
    title: 'Hamburguesa doble',
    description: 'no',
    price: '15'
   }),
   new Product({
    imagePath:'https://p.globalsources.com/IMAGES/PDT/S1092436793/Se-aceptan-las-patatas-fritas-biodegradables-encajonan-hecho-del-material-del-almid%C3%B3n-de-la-planta-los-dise%C3%B1os-modificados-para-requisitos-particulares.jpg',
    title: 'Papas fritas',
    description: 'no',
    price: '5'
   }),
   new Product({
    imagePath:'https://www.delyfruts.com/wp-content/uploads/2018/11/Caf%C3%A9-americano.jpg',
    title: 'Cafè americano',
    description: 'no',
    price: '7'
   }),
   new Product({
    imagePath:'http://mekatos.com/wp-content/uploads/2013/10/Cafe-con-leche.png',
    title: 'Cafè con leche',
    description: 'no',
    price: '7'
   }),
   new Product({
    imagePath:'http://algarabianinos.com/chamaco/wp-content/uploads/2015/04/s16-ninos-sandwich.jpg',
    title: 'Sandwich de queso',
    description: 'no',
    price: '10'
   }),
];
let done = 0;
for (let i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}