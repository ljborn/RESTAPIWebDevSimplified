const express = required('express')
const app = express ()
const mongoose = require('mongoose')

mongoose.connect('mondodb://localhost/subscribers')

 
app.listen(3000, () => console.log('Server Started'))