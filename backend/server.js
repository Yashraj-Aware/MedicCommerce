require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const authRoutes = require('./router/authRoute')
const categoryRoutes = require('./router/categoryRoute')
const productRoutes = require('./router/productsRoute')

const app = express()

//middleware
app.use(express.json())
app.use(cors())


// log of all the actions
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
  });

//routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/category', categoryRoutes)
app.use('/api/v1/products', productRoutes)

//connextion to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Db connected successfully');
  })
  .catch((error) => {
    console.log(`error: ${error.message}`);
  });

//listening on port
app.listen(process.env.PORT, () => {
    console.log('server is listening on port ', process.env.PORT);
})


