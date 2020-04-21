var mysql=require('mysql')
var config=require('./config')
var Test=require('./test')
const Connection = mysql.createConnection({
    host: config.host,
  user: config.user,
  password: config.password,
  database:config.database,
  port:config.port
});

Connection.connect((err)=>{
    if(err){
        console.log(err)
    }
    console.log("Connect SuccessFull")
}); 
module.exports=Connection