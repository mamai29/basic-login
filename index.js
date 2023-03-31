let dbUsers=
[
{
    username: "Mai",
    password: "mystery",
    name : " Maisarah Hassan",
    email : " mai@utem.edu.my"

},
{
    username: "Fatin",
    password: "Apiqoh",
    name : " Fatin Afiqah",
    email : " fatin@utem.edu.my"

},
{
    username: "Ina",
    password: "Adlina",
    name : " Nor Adlina",
    email : " ina@utem.edu.my"

},
{
    username: "Ying",
    password: "Ruying",
    name : " Lim Ru Ying",
    email : " ry@utem.edu.my"

},
]

function login (username, password) 
{
//console.log ("someone try to login with",  username, password)
let matched = dbUsers.find (element => element.username == username)

if (matched)
    {
        if (matched.password == password)
        {
            return matched
        }
        else 
        {
            return "password is incorrect"
        }   
    }
    else 
    { return "username cannot be found"}

}

function register (newusername, newpassword, newname, newemail) 
{
   // TO DO : Check if username exist 
   
let exist = dbUsers.find (element => element.username == newusername)

if (exist)
    {
        return "username is already exist"
    }
else 
    { 
      
         dbUsers.push
         ({username: newusername,
            password: newpassword,
            name : newname,
            email : newemail
        })
    }
}

//try to login
//console.log (login ("Mai", "mystery"))
//console.log (login ("maya", "2222"))

//register
console.log (register ("Mai","2222", "maisara", "mya@utem.edu.my"))