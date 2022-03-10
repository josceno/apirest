# apirest
that is my first api  using mongo db and node

that's Api can register and validate the inputed data 
name: 
email: 
password: 

    _.base_url  instead of localhost:8081 works as well
  localhost:8081/auth/register is from register json in database type:
  {
    "name": "",
    "email": "",
    "password": ""
  }
    localhost:8081
  _.base_url/auth/authenticate{
     "email": "insert a already registred data",
	   "password":  "insert a already registred data"
  }

the software used for meke that Api was insmonia but a pretty sure postman should work as well

if you want test the authetication system them go to respective header and 
    header authorzation, value bearer token

the token can be taked when you log in your account
