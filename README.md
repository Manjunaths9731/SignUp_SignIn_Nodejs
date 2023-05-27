# SignUp_SignIn_Nodejs
#Node Js , React Js and MongoDB
Clone project 
Go to backend folder -> terminal -> npm install
Go to frontend folder -> terminal -> npm install
Go to backend folder -> terminal -> npm start
Go to frontend folder -> terminal -> npm start
Frontend: http://localhost:3000/
Backend: http://localhost:4000/
Create .env file in backend folder and paste : MONGODB_URI="mongodb://localhost/signin"
Download mongodb and mongodb compass
Start mongodb from terminal
Connect to localhost and create signin collection and create users folder inside signin collection
![Screenshot from 2023-05-27 15-53-28](https://github.com/Manjunaths9731/SignUp_SignIn_Nodejs/assets/66406975/7ac2f0ec-efdc-4695-923f-e7625e48bd60)
Start mongodb from terminal using command: sudo systemctl start mongod

#API's Created:
http://localhost:3000/api/users -> GET
http://localhost:3000/api/signup ->POST
JSON BODY or payload:
{
    "name":"manju",
    "email":"manju1@example.com",
    "password":"12345678"
}

http://localhost:3000/api/signin ->POST
JSON BODY or payload:
{
    "email":"manju1@example.com",
    "password":"12345678"
}
