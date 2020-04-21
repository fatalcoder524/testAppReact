var express=require('express');
var DB=require('./test')
const router=express.Router();
router.get('/api/test',async(req,res)=>{
    try{
        let users=await DB().then((data)=>{
            return data;
        })
        res.json(users)
    }catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})

module.exports = router