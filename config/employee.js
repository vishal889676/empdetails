const mongoose=require('mongoose');
const schema = new mongoose.Schema({
name: 'string',
age:'string',
dep:'string',
date: 'string'
 });
const employee = mongoose.model('employee', schema);
module.exports=employee;