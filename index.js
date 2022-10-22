import express from "express" // pulling express from node_modules
// calling library from npm i express 

import people from './data.js' // import people from data file (just to test our api)
const PORT = 3033 // declared port 3000 -4000 only local in our computer 

const app = express() // calls express the function express () and 
// put new express application inside the app variable 

app.use(express.json()) // * when we get data in were getting in json format
// line 15 wont work if this is left out , read request in json 


app.get('/people',(req,res) => {
res.send(people)
}) // getting information from data file , routing method 


app.post('/people', (req,res) => {
    const newperson = req.body
    people.push(newperson)
    res.send(people)
}) // different routing method 

app.listen(PORT,() => console.log( `Listening to http://localhost:${PORT}...`))