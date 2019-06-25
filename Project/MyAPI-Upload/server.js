var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/swag-shop');

var Product = require('./Models/product');
var WishList = require('./Models/wishList');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post('/product', function(request, response){
    var product = new Product(); //new Product({title:request.body.title,price:request.body.price,likes:request.body.likes});
    product.title = request.body.title;
    product.price = request.body.price;
    product.save(function(err, savedProduct){ //save(error, mongoobject saved product)
        if(err){
            response.status(500).send({error:"Could not save product"});
        } else{
            response.send(savedProduct); // response.json(savedProduct);
        }
    });
});

app.get('/product', function(request,response){
    Product.find({}, function(err, availProduct){
       if(err) {
           response.status(500).send({error:"No product available"});
       }else {
           response.send(availProduct);
       }
    });
});

app.get('/wishlist', function(request, response){
    WishList.find({}).populate({path:'products', model:'Product'}).exec(function(err, wishLists){
        if(err) {
           response.status(500).send({error:"No product available"});
       }else {
           response.status(200).send(wishLists);
       }
    });
});

app.post('/wishlist', function(request,response){
    var wishlist = new WishList();
    wishlist.title = request.body.title;
    
    wishlist.save(function(err, savedWishList){
       if(err){
           response.status(500).send("cannot able to save the wishlist product")
       } else{
           response.send(savedWishList);
       }
    });
});

app.put('/wishlist/product/add', function(request, response){
   Product.findOne({_id:request.body.productID}, function(err, product){
       if(err){
           response.status(500).send({error:"Cannot able to find the product ID"})
       }else{
           console.log(product);
           WishList.update({_id:request.body.wishListID}, {$addToSet:{products:product._id}}, function(err, wishlistMSg){
                if(err){
                    response.status(500).send({error:"Could not able to add product to the wishlist"});
                } else{
                    response.send("Successfully added to wishlist "+wishlistMSg)
                }
           });
       }
   });
});

//app.get('/', function(request, response){
//    response.send('server is working fine');
//});

app.listen(2512, function(){
    console.log('server is running on 2512!');
});