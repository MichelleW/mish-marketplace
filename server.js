// ============ Various Helper Libraries ============ 
const path = require('path');
// ==================================================



// ============ Express ============ 
const express = require('express');
const app = express();
// =================================



// ============ Body Parser ============ 
// Will require: express/app
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// =====================================
 


// ============ Session ============ 
// Will require: express/app
// const session = require('express-session');
// app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 600000 }
// }))
// =================================

 





// ============ Static Routes ============ 
// Will use: path 
app.use(express.static(path.join(__dirname, "mish-marketplace/dist/mish-marketplace")));
// =======================================


// ============ Mongoose ============ 
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/marketplace_db");
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name must be at least 3 characaters long.'],
    minlength: [3, 'Length must be at least 3 characaters long.']
  },
  description: {
    type: String,
    required: [true, 'description must be at least 3 characaters long.'],
    minlength: [3, 'description must be at least 3 characaters long.']
  },
  price:{
    type:Number
  },
  imgUrl: String,
  likes:{
    type:Number
  },
  comments:{
    type:String
  }

})


mongoose.model('Product', ProductSchema);
const Product = mongoose.model('Product');




// Routes
app.get('/api/listing', function (req, res) {
  console.log('service js :');
  Product.find({}, function (err, products) {
    console.log('service js :',products);
    res.json(products);
  });
})

app.get('/api/listing/edit/:id', function (req, res) {

  Product.findById(req.params.id, function (err, Product) {
    if (err) {
      console.log('server err :',  err);
      res.json(err);
    } else {
      res.json(Product);
    }
  })
})



app.post('/api/listing-new', function (req, res) {
  productInstance = new Product();
  productInstance.name = req.body.name;
  productInstance.description = req.body.description;
  productInstance.imgUrl = req.body.imgUrl;
  productInstance.like = req.body.like;
  productInstance.comments = req.body.comments;
  productInstance.save(function (err) {
    if (err) {
      console.log('in serverjs',err);
      res.json(err);
    } else {
      res.json(productInstance);
    }
  })
})


//update 
app.put('/api/listing/edit/:id', function(req, res) {
  console.log("SERVER > put product/id");
  console.log("SERVER > put product/id params.id", req.params.id);
  console.log("SERVER > put product/id body", req.body);
  Product.findById(req.params.id, function(err, pet){
      console.log("SERVER > findbyid, err ", err)
      console.log("SERVER > findbyid, pet ", pet)
      if(err){

      } else {
          console.log("product found for update:", product);
          product.name = req.body.name;
          product.description = req.body.description;
          product.imgUrl = req.body.imgUrl;
          product.like = req.body.like;
          product.comments = req.body.comments;
          pet.save(function(err){
              if(err){
                  res.json(err);
              } else {
                  res.json(true);
              }
          })
      }
  })
})

app.delete('/api/listing/delete/:id', function(req, res) {
    console.log("SERVER > delete id:", req.params.id)
    Product.deleteOne({_id: req.params.id}, function(err){
        if(err){
            res.json(err);
        } else {
            res.json(true);
        }
    })
})


 

//send mismatch route to angular and angular will redirect to the angular path
app.all("*", (req, res, next) => {
  res.sendFile(path.resolve("./mish-marketplace/dist/mish-marketplace/index.html"))
});





// ============ Server ============ 
// Will require: express/app 
app.listen(8000);
// ================================

