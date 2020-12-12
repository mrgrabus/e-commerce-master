const express = require('express')
const apiRouter = require('./routes');
const app = express();
const cors = require('cors');
const db = require('./db');



app.use(express.json())
app.use('/api', apiRouter)


app.use(cors())












app.listen(process.env.PORT || '9000', ()=>{
  
  console.log(`server is running on port : ${process.env.PORT  || '9000'}`)

})