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
console.log ("someone try to login with",  username, password)
let matched = dbUsers.find (element => element.username == username
    
)
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

//tr to login
console.log (login ("Mai", "maya"))
console.log (login ("Mai", "mystery"))