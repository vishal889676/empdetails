const express=require('express');
const employee=require('../config/employee');

const router=express.Router()

router.get('/', async function(req, res){
 console.log('enter in allProducts')
const emp=await employee.find({});//finding all products from mongodblog
return res.send(emp)
 
 })

router.post('/',async function(req, res){

 console.log(req.body)
  const emp =new employee(req.body);//sending body data to database
  console.log("create products successfully")
  emp.save();
  return res.send(emp)

})
router.delete('/delete/:id',async function(req, res){
 const id=req.params.id;
  await employee.deleteOne({id})
 res.send('deleted this products');
  
});

router.put('/update/:id',async function(req, res){
 const id=req.query.number;//taking data through query and updated the product
 const emp=await employee.findOneAndUpdate({id},{$set:{quantity:req.query.number}});
res.send('update sucesfull')
})

module.exports=router;