const express = require('express');
const db = require('../db');
const cors = require('cors');

const router = express.Router();
const app = express();



router.get('/', (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
})

router.get('/product/:id', async (req, res, next) =>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    
    
    try {
        let results = await db.selectOne(req.params.id);
        res.json(results)
    } catch(e) {
        console.log(e)
        res.sendStatus(500)
    }

})



router.get('/category/:id', async (req, res, next) =>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    
    
    try {
        let results = await db.category(req.params.id);
        res.json(results)
    } catch(e) {
        console.log(e)
        res.sendStatus(500)
    }

})
router.get('/images/:id', async (req, res, next) =>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    
    
    try {
        let results = await db.images(req.params.id);
        res.json(results)
    } catch(e) {
        console.log(e)
        res.sendStatus(500)
    }

})
router.post('/add-cart', async (req, res, next) =>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 

 
    
    
    try{
        let result = await db.addCart(req.query.productId);
        res.json(result)
        
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }

})
router.get('/get-cart', async (req, res, next) =>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    
    
    try {
        let results = await db.getCart();
        res.json(results)
        
    } catch(e) {
        console.log(e)
        res.sendStatus(500)
    }

})
router.get('/delete', async (req, res, next) =>{

    
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    
    
    try {
        let results = await db.deleteCart();
        res.json(results)
        
    } catch(e) {
        console.log(e)
        res.sendStatus(500)
    }

})

router.get('/related/:id', async (req, res, next) =>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    
    
    try {
        let results = await db.getRelated(req.params.id);
        res.json(results)
        
    } catch(e) {
        console.log(e)
        res.sendStatus(500)
    }

})

router.post('/order', async (req, res, next) =>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 

 
    
    
    try{
        // let result = await db.addCart(req.query.productId);
        // res.json(result)
        res.send(console.log(req.body.data))
        
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }

})


module.exports = router
