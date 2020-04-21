var Connection=require("./connection")
const all =async ()=>{
    return new Promise((resolve,reject)=>{
        Connection.query("Select * from login",(err,results)=>{
            if(err)
            {
                return reject(err)
            }
            resolve(results)
        })
    })
}

module.exports=all;