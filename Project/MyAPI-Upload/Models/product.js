var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var product = new Schema({
    title: String,
    price: Number,
    likes: {type:Number, default:0}
});

module.exports = mongoose.model('Product', product); //creates mongo DB with making smaller case od 'Product' and adds 's' at the end