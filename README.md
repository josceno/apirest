# apirest
That is my first api  using mongo db and node

that's Api can register and validate the inputted data 
name: 
email: 
password: 

    _.base_url  instead of localhost:8081 works as well
  localhost:8081/auth/register is from register json in database type:
  {
    "name": "",
    "email": "",
    "password": ""
  }
    localhost:8081
  _.base_url/auth/authenticate{
     "email": "insert a already registered data",
   "password":  "insert a already registered data"
  }

the software used to make that Api was insomnia, but a pretty sure postman should work as well

if you want to test the authentication system, then go to respective header and 
    header authorization, value bearer token

the token can be taken when you log in your account
