var express = require('express')
var app = express()
const morgan = require('morgan')
var sql = require('mysql')

app.use(express.static('./frontend'))
const bodyparser = require('body-parser')

var connection = sql.createConnection({
  //properties
  host: 'localhost',
  user: 'root',
  password: 'Rootuser',
  database: 'testing'
});
//middleware to process your request
app.use(bodyparser.urlencoded({extended: false}))
//app.use(morgan('combined'))

connection.connect(function (error) {
  //callback function
  if (!!error) {
    console.log('error', error);
  } else {
    console.log('connected');
  }

});
 
app.post("/user_create",(request,response)=>{
  console.log("trying to create  new user")

  console.log("firNAme" + request.body.create_first_name)
  const firstName = request.body.create_first_name
  const lastName = request.body.create_last_name
  
  const queryString = "insert into new_table (a,idd) values(?,?)"
  connection.query(queryString,[firstName,lastName],(error,results,fields)=>{
    if(error){
      console.log("Failed to add new entry" +error)
      response.sendStatus(500)
      return
    }
    else{
      console.log("Inserted successfully with Id")
      response.end()
    }
  })
  response.end()
})
app.get('/user/:id',function(request,response)  {
  console.log("fecthing " + request.params.id)
  //const connection = mysql.cre
  const userId = request.params.id
  const queryString = "select * from new_table where idd = ?"
  connection.query(queryString,[userId],(error,rows,fields)=>{
    if (error) {
      console.log("Failed to query f" + error)
      response.sendStatus(500)
      return
    }
    console.log("success")
    // let user1 = {firstName:"Harshit",lastName:"Kyal"}
    console.log(rows)
    response.json(rows)
  }) 
  //response.end();
})

app.delete('/user/:id',(request,response)=>{
  const userId = request.params.id
  const queryString = "delete  from new_table where id = ?"
  connection.query(queryString,[userId],(error,request,response) => {
    if(!error)
      response.send("Delete Successfully")
    else
      console.log(error)
  })
})
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/users', function (request, response) {
  ///response.send('Hello World!')
  connection.query('SELECT * FROM new_table', function (error, rows, fields) {
    if(!!error) {
      console.log('Error in query',error);
    } else{
      response.json(rows)
      console.log('successfull query');
    }
  });
})

app.listen(app.get('port'), function () {
  console.log("Node app is running at localhost:" + app.get('port'))
})
