const { rejects } = require('assert');
const mysql = require('mysql');
const { resolve } = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())


const conn = mysql.createPool({
    connectionLimit: 10,
    password: 'fe11b455',
    user: 'bf7ea24a16aab8',
    database: 'heroku_f3e88451dc6d21a',
    host: 'eu-cdbr-west-03.cleardb.net',
    port: '3306'
})

let database = {};


database.selectOne = (id) =>{
    return new Promise((resolve, reject) =>{

                conn.query(`
                select * from product
                where id = ${id};`, (err, results) =>{
        
                    if(err){
                        return reject(err)
                    }
        
                    return resolve(results);
        
                })
        
            })
}


database.category = (id) =>{
    return new Promise((resolve, reject) =>{

                conn.query(`
                select product.id, product.name, product.price, product.description, 
                product.mainImage, product.category_id, category.name as category_name
                from product 
                join category on product.category_id = category.id
                where category_id = ${id};`, (err, results) =>{
        
                    if(err){
                        return reject(err)
                    }
        
                    return resolve(results);
        
                })
        
            })
}
database.images = (id) =>{
    return new Promise((resolve, reject) =>{

                conn.query(`
                select * from images where product_id = ${id};`, (err, results) =>{
        
                    if(err){
                        return reject(err)
                    }
        
                    return resolve(results);
        
                })
        
            })
}


database.addCart = (productId) =>{

    return new Promise ((resolve, reject) =>{
        conn.query(`insert into cart(product_id)
                    value(${productId});`, (err, result) =>{
                        if(err){
                            return reject(err)
                        }
                        return resolve(result)
                    })
    })
}
database.getCart = () =>{

    return new Promise ((resolve, reject) =>{
        conn.query(`select cart.id, product.name, product.price, product.mainImage, product_id
                    from cart
                    join product on cart.product_id = product.id;`, (err, result) =>{
                        if(err){
                            return reject(err)
                        }
                        return resolve(result)
                    })
    })
}
database.deleteCart = () =>{

    return new Promise ((resolve, reject) =>{
        conn.query(`DELETE FROM cart;`, (err, result) =>{
                        if(err){
                            return reject(err)
                        }
                        return resolve(result)
                    })
    })
}

database.getRelated = (categoryId) =>{

    return new Promise ((resolve, reject) =>{
        conn.query(`SELECT * FROM product
                    where category_id = ${categoryId}
                    ORDER BY RAND()
                    LIMIT 3;`, (err, result) =>{
                        if(err){
                            return reject(err)
                        }
                        return resolve(result)
                    })
    })

}
database.addOrder = (data) =>{

    return new Promise ((resolve, reject) =>{
        conn.query(`INSERT INTO orders (email, firstName, lastName, companyName, address, appartment, postalCode, city, country, phone)
        values 
        ('${data.email}', '${data.firstName}', '${data.lastName}', '${data.companyName}', '${data.address}', '${data.appartment}', 
        '${data.postalCode}', '${data.city}', '${data.country}', '${data.phone}');`, 
            (err, result) =>{
                        if(err){
                            return reject(err)
                        }
                        return resolve(result)
                    })
    })

}

module.exports = database;