import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from './User.js';
import bcrypt from 'bcryptjs';

const userRouter = express.Router();

userRouter.get('/users', expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    res.send(users);
}));

userRouter.post('/signup', expressAsyncHandler(async (req, res) => {
  const user = await User.findOne({email:req.body.email});
  if(user){
    res.status(400).send({"message":"email already exist"});
  }else{
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
  });
  const user = await newUser.save();
  res.send({
    _id: user._id,
    name: user.name,
    email: user.email,
  });
}
}));

userRouter.post(
    '/signin',
    expressAsyncHandler(async (req, res) => {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.send({
            _id: user._id,
            email: user.email,
            "message": "SignIn successful"
          });
          return;
        }
      }
      res.status(401).send({ message: 'Invalid email or password' });
    })
  );


  export default userRouter;
