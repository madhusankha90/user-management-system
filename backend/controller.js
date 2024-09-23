const User = require("./model");

const getUsers = (req, res, next) => { //retrieve
  User.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};c

const addUser = (req, res, next) => {
  const user = new User({
    id: req.body.id,   //const {id,name}  = req.body
    name: req.body.name,
  });
  user.save()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

const updateUser = (req,res,next) => {
    const {id,name} = req.body;
    User.updateOne({id:id},{$set:{name:name}})
    .then(response =>{
        res.json({ response})
    })
    .catch(error=>{
        res.json({error})
    })
}

const deleteUser = (req,res,next) => {
    const {id} = req.body;
    User.deleteOne({id:id})
    .then(response =>{
        res.json({ response})
    })
    .catch(error=>{
        res.json({message:error})
    })
}


module.exports = {getUsers,addUser,updateUser,deleteUser};